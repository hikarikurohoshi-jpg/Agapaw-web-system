CREATE DATABASE IF NOT EXISTS agapaw
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE agapaw;


-- ==================================== CORE MASTER TABLES ====================================================================


-- =================================================
-- ||                 BRANCHES                    ||
-- =================================================
CREATE TABLE branches (
    branch_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_code VARCHAR(20) NOT NULL UNIQUE,
    name VARCHAR(100) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;


-- =================================================
-- ||                   ROLES                     ||
-- =================================================
CREATE TABLE roles (
    role_id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    role_name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NULL
) ENGINE=InnoDB;


-- =================================================
-- ||                   USERS                     ||
-- =================================================
CREATE TABLE users (
    user_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_id BIGINT UNSIGNED NOT NULL,
    role_id SMALLINT UNSIGNED NOT NULL,

    username VARCHAR(50) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NULL UNIQUE,

    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    deleted_at DATETIME NULL,

    last_login DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_users_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_users_role
        FOREIGN KEY (role_id) REFERENCES roles(role_id)
        ON DELETE RESTRICT,

    INDEX idx_users_branch_role (branch_id, role_id),
    INDEX idx_users_deleted (deleted_at)
) ENGINE=InnoDB;



-- =================================================
-- ||                 CUSTOMERS                   ||
-- =================================================
CREATE TABLE customers (
    customer_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_id BIGINT UNSIGNED NOT NULL,

    name VARCHAR(150) NOT NULL,
    phone VARCHAR(20) NULL,
    email VARCHAR(150) NULL,
    loyalty_points INT NOT NULL DEFAULT 0,

    deleted_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_customers_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    INDEX idx_customers_phone (phone),
    INDEX idx_customers_email (email),
    INDEX idx_customers_branch (branch_id),
    INDEX idx_customers_deleted (deleted_at)
) ENGINE=InnoDB;






-- ===========================================================================================================================

-- ==================================== PRODUCT STRUCTURE ====================================================================


-- =================================================
-- ||                CATEGORIES                   ||
-- =================================================
CREATE TABLE categories (
    category_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_id BIGINT UNSIGNED NOT NULL,
    name VARCHAR(100) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    deleted_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_categories_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    UNIQUE KEY uk_branch_category (branch_id, name),
    INDEX idx_categories_branch (branch_id),
    INDEX idx_categories_deleted (deleted_at)
) ENGINE=InnoDB;



-- =================================================
-- ||                PRODUCTS                     ||
-- =================================================
CREATE TABLE products (
    product_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_id BIGINT UNSIGNED NOT NULL,
    category_id BIGINT UNSIGNED NOT NULL,

    sku VARCHAR(50) NULL UNIQUE,
    name VARCHAR(150) NOT NULL,
    base_price DECIMAL(10,2) NOT NULL CHECK (base_price >= 0),

    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    deleted_at DATETIME NULL,

    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_products_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_products_category
        FOREIGN KEY (category_id) REFERENCES categories(category_id)
        ON DELETE RESTRICT,

    INDEX idx_products_branch_category (branch_id, category_id),
    INDEX idx_products_deleted (deleted_at),
    FULLTEXT KEY ft_products_name (name)
) ENGINE=InnoDB;




-- =================================================
-- ||               PRODUCTS SIZES                ||
-- =================================================
CREATE TABLE product_sizes (
    size_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    product_id BIGINT UNSIGNED NOT NULL,

    size_name VARCHAR(50) NOT NULL,
    price_modifier DECIMAL(10,2) NOT NULL DEFAULT 0.00,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,

    CONSTRAINT fk_sizes_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE CASCADE,

    UNIQUE KEY uk_product_size (product_id, size_name)
) ENGINE=InnoDB;



-- ===========================================================================================================================

-- ==================================== TRANSACTION TABLE ====================================================================


-- =================================================
-- ||                    ORDERS                   ||
-- =================================================
CREATE TABLE orders (
    order_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    branch_id BIGINT UNSIGNED NOT NULL,
    order_number VARCHAR(50) NOT NULL,
    customer_id BIGINT UNSIGNED NULL,
    cashier_id BIGINT UNSIGNED NOT NULL,

    order_type ENUM('DINE_IN','TAKEOUT','DELIVERY') NOT NULL,

    delivery_address TEXT NULL,

    payment_timing ENUM('PAY_NOW','PAY_LATER')
        NOT NULL DEFAULT 'PAY_NOW',

    status ENUM('PENDING','PREPARING','READY','COMPLETED','CANCELLED')
        NOT NULL DEFAULT 'PENDING',

    subtotal DECIMAL(12,2) NOT NULL CHECK (subtotal >= 0),
    discount_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00 CHECK (discount_amount >= 0),
    tax_amount DECIMAL(12,2) NOT NULL DEFAULT 0.00 CHECK (tax_amount >= 0),
    delivery_fee DECIMAL(10,2) NOT NULL DEFAULT 0.00 CHECK (delivery_fee >= 0),

    total_amount DECIMAL(12,2) NOT NULL CHECK (
        total_amount = (subtotal - discount_amount + tax_amount + delivery_fee)
        AND total_amount >= 0
    ),

    is_paid BOOLEAN NOT NULL DEFAULT FALSE,

    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    completed_at DATETIME NULL,

    CONSTRAINT chk_delivery_address_required
        CHECK (
            (order_type = 'DELIVERY' AND delivery_address IS NOT NULL)
            OR
            (order_type <> 'DELIVERY')
        ),

    CONSTRAINT fk_orders_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_orders_customer
        FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
        ON DELETE SET NULL,

    CONSTRAINT fk_orders_cashier
        FOREIGN KEY (cashier_id) REFERENCES users(user_id)
        ON DELETE RESTRICT,

    UNIQUE KEY uk_branch_order (branch_id, order_number),

    INDEX idx_orders_customer (customer_id),
    INDEX idx_orders_cashier (cashier_id),
    INDEX idx_orders_branch_date (branch_id, created_at),
    INDEX idx_orders_status (status),
    INDEX idx_orders_is_paid (is_paid)
) ENGINE=InnoDB;



-- =================================================
-- ||               ORDERS ITEMS                  ||
-- =================================================
CREATE TABLE order_items (
    order_item_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,

    order_id BIGINT UNSIGNED NOT NULL,
    branch_id BIGINT UNSIGNED NOT NULL,   -- NEW (important fix)

    product_id BIGINT UNSIGNED NOT NULL,
    size_id BIGINT UNSIGNED NULL,

    quantity INT UNSIGNED NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL CHECK (unit_price >= 0),
    total_price DECIMAL(12,2) NOT NULL CHECK (
        total_price = quantity * unit_price
    ),

    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_items_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_items_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_items_product
        FOREIGN KEY (product_id) REFERENCES products(product_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_items_size
        FOREIGN KEY (size_id) REFERENCES product_sizes(size_id)
        ON DELETE SET NULL,

    INDEX idx_items_order (order_id),
    INDEX idx_items_product (product_id),
    INDEX idx_items_branch (branch_id)
) ENGINE=InnoDB;


-- =================================================
-- ||                  PAYMENTS                   ||
-- =================================================
CREATE TABLE payments (
    payment_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT UNSIGNED NOT NULL,
    branch_id BIGINT UNSIGNED NOT NULL,
    paid_by BIGINT UNSIGNED NOT NULL,

    payment_method ENUM('CASH','GCASH','CARD','BANK') NOT NULL,
    amount DECIMAL(12,2) NOT NULL CHECK (amount > 0),

    payment_status ENUM('PENDING','COMPLETED','FAILED','REFUNDED')
        NOT NULL DEFAULT 'PENDING',

    transaction_reference VARCHAR(100) NULL,

    paid_at DATETIME NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    completed_flag TINYINT
        AS (CASE WHEN payment_status = 'COMPLETED' THEN 1 ELSE NULL END)
        STORED,

    CONSTRAINT fk_payments_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_payments_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_payments_paid_by
        FOREIGN KEY (paid_by) REFERENCES users(user_id)
        ON DELETE RESTRICT,

    UNIQUE KEY uk_one_completed_payment (order_id, completed_flag),

    INDEX idx_payments_order (order_id),
    INDEX idx_payments_branch_date (branch_id, paid_at),
    INDEX idx_payments_status (payment_status)
) ENGINE=InnoDB;

-- ===========================================================================================================================

-- ==================================== AUDIT TABLE ====================================================================


-- =================================================
-- ||            ORDER STATUS HISTORY             ||
-- =================================================
CREATE TABLE order_status_history (
    history_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    order_id BIGINT UNSIGNED NOT NULL,
    old_status ENUM('PENDING','PREPARING','READY','COMPLETED','CANCELLED') NOT NULL,
    new_status ENUM('PENDING','PREPARING','READY','COMPLETED','CANCELLED') NOT NULL,
    changed_by BIGINT UNSIGNED NOT NULL,
    changed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_osh_order
        FOREIGN KEY (order_id) REFERENCES orders(order_id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_osh_user
        FOREIGN KEY (changed_by) REFERENCES users(user_id)
        ON DELETE RESTRICT,

    INDEX idx_osh_order (order_id)
) ENGINE=InnoDB;



-- =================================================
-- ||           PAYMENT STATUS HISTORY            ||
-- =================================================
CREATE TABLE payment_status_history (
    history_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    payment_id BIGINT UNSIGNED NOT NULL,
    old_status ENUM('PENDING','COMPLETED','FAILED','REFUNDED')
 NOT NULL,
    new_status ENUM('PENDING','COMPLETED','FAILED','REFUNDED')
 NOT NULL,
    changed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_psh_payment
        FOREIGN KEY (payment_id) REFERENCES payments(payment_id)
        ON DELETE RESTRICT,

    INDEX idx_psh_payment (payment_id)
) ENGINE=InnoDB;



-- =================================================
-- ||                LOG IN LOGS                  ||
-- =================================================
CREATE TABLE login_logs (
    log_id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED NOT NULL,
    ip_address VARCHAR(45) NOT NULL,
    user_agent TEXT NULL,
    login_time DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    success BOOLEAN NOT NULL,

    CONSTRAINT fk_login_user
        FOREIGN KEY (user_id) REFERENCES users(user_id)
        ON DELETE CASCADE,

    INDEX idx_login_user (user_id)
) ENGINE=InnoDB;


-- ==================================== PERFORMANCE TABLE ====================================================================

-- =================================================
-- ||              DAILY SALES SUMMAR             ||
-- =================================================
CREATE TABLE daily_sales_summary (
    summary_date DATE NOT NULL,
    branch_id BIGINT UNSIGNED NOT NULL,
    total_orders INT NOT NULL DEFAULT 0,
    total_revenue DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    total_items_sold INT NOT NULL DEFAULT 0,

    PRIMARY KEY (summary_date, branch_id),

    CONSTRAINT fk_summary_branch
        FOREIGN KEY (branch_id) REFERENCES branches(branch_id)
        ON DELETE RESTRICT
) ENGINE=InnoDB;