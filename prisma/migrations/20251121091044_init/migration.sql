-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('supplier', 'customer', 'admin', 'superadmin');

-- CreateEnum
CREATE TYPE "SupplierVerificationStatus" AS ENUM ('under_review', 'incomplete_info', 'approved', 'rejected');

-- CreateEnum
CREATE TYPE "ProductPublicationStatus" AS ENUM ('draft', 'active');

-- CreateEnum
CREATE TYPE "ProductOrderStatus" AS ENUM ('none', 'ordered', 'sold', 'cancelled');

-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('AS', 'LTD', 'SOLE', 'OTHER');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('email', 'dashboard');

-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('pending', 'sent', 'failed', 'read');

-- CreateEnum
CREATE TYPE "NotificationCategory" AS ENUM ('supplier_registration', 'supplier_status_change', 'supplier_info_update', 'product_order', 'product_status_change', 'product_sold', 'admin_product_request');

-- CreateTable
CREATE TABLE "AuthUser" (
    "auth_user_id" UUID NOT NULL,
    "application_id" TEXT NOT NULL DEFAULT '01',
    "email" TEXT NOT NULL,
    "password_hash" TEXT,
    "phone" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'supplier',
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_superadmin" BOOLEAN NOT NULL DEFAULT false,
    "last_login_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthUser_pkey" PRIMARY KEY ("auth_user_id")
);

-- CreateTable
CREATE TABLE "AuthToken" (
    "token_id" SERIAL NOT NULL,
    "auth_user_id" UUID NOT NULL,
    "token_hash" TEXT NOT NULL,
    "token_type" TEXT NOT NULL DEFAULT 'EMAIL_VERIFICATION',
    "is_single_use" BOOLEAN NOT NULL DEFAULT true,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "used_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "AuthToken_pkey" PRIMARY KEY ("token_id")
);

-- CreateTable
CREATE TABLE "UserProfile" (
    "user_profile_id" SERIAL NOT NULL,
    "auth_user_id" UUID NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "kvkk_accepted" BOOLEAN NOT NULL DEFAULT false,
    "kvkk_accepted_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserProfile_pkey" PRIMARY KEY ("user_profile_id")
);

-- CreateTable
CREATE TABLE "File" (
    "file_id" SERIAL NOT NULL,
    "storage_key" TEXT NOT NULL,
    "original_filename" TEXT,
    "mime_type" TEXT,
    "size_bytes" BIGINT,
    "uploaded_by" UUID,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" JSONB,

    CONSTRAINT "File_pkey" PRIMARY KEY ("file_id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "supplier_id" SERIAL NOT NULL,
    "auth_user_id" UUID NOT NULL,
    "legal_name" TEXT NOT NULL,
    "company_type" "CompanyType" NOT NULL,
    "tax_number" TEXT NOT NULL,
    "tax_office" TEXT,
    "trade_registry_no" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "SupplierStatus" (
    "supplier_id" INTEGER NOT NULL,
    "current_status" "SupplierVerificationStatus" NOT NULL DEFAULT 'under_review',
    "status_note" TEXT,
    "changed_by" UUID,
    "changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplierStatus_pkey" PRIMARY KEY ("supplier_id")
);

-- CreateTable
CREATE TABLE "SupplierDocument" (
    "supplier_document_id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "tax_sheet_file_id" INTEGER,
    "trade_registry_file_id" INTEGER,
    "signature_declaration_file_id" INTEGER,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplierDocument_pkey" PRIMARY KEY ("supplier_document_id")
);

-- CreateTable
CREATE TABLE "SupplierBankAccount" (
    "bank_account_id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "iban" TEXT NOT NULL,
    "account_holder_name" TEXT NOT NULL,
    "proof_file_id" INTEGER,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupplierBankAccount_pkey" PRIMARY KEY ("bank_account_id")
);

-- CreateTable
CREATE TABLE "SupplierContactAddress" (
    "id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "is_billing" BOOLEAN NOT NULL DEFAULT false,
    "country" TEXT NOT NULL DEFAULT 'Türkiye',
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "website" TEXT,
    "contact_full_name" TEXT NOT NULL,
    "contact_title" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupplierContactAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierSkillActivity" (
    "supplier_skills_id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "supplier_type_id" INTEGER NOT NULL,
    "expertise_level" TEXT,
    "why_choose_us" TEXT,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SupplierSkillActivity_pkey" PRIMARY KEY ("supplier_skills_id")
);

-- CreateTable
CREATE TABLE "SupplierMainActivity" (
    "id" SERIAL NOT NULL,
    "supplier_skills_id" INTEGER NOT NULL,
    "activity_category_id" INTEGER NOT NULL,

    CONSTRAINT "SupplierMainActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierSubActivity" (
    "id" SERIAL NOT NULL,
    "supplier_main_activity_id" INTEGER NOT NULL,
    "sub_category_name" TEXT NOT NULL,

    CONSTRAINT "SupplierSubActivity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierBrandMapping" (
    "id" SERIAL NOT NULL,
    "supplier_skills_id" INTEGER NOT NULL,
    "brand_name" TEXT NOT NULL,

    CONSTRAINT "SupplierBrandMapping_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SupplierType" (
    "supplier_type_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SupplierType_pkey" PRIMARY KEY ("supplier_type_id")
);

-- CreateTable
CREATE TABLE "ActivityCategory" (
    "activity_category_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "parent_id" INTEGER,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_by" UUID,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ActivityCategory_pkey" PRIMARY KEY ("activity_category_id")
);

-- CreateTable
CREATE TABLE "AdminAssignment" (
    "id" SERIAL NOT NULL,
    "admin_user_id" UUID NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "assigned_by" UUID,
    "assigned_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "AdminAssignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" SERIAL NOT NULL,
    "product_code" TEXT NOT NULL DEFAULT '01',
    "supplier_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "short_description" TEXT,
    "full_description" TEXT,
    "main_image_file_id" INTEGER,
    "price" DECIMAL(12,2) NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'TRY',
    "stock" INTEGER NOT NULL DEFAULT 0,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "ProductLike" (
    "like_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "customer_id" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductLike_pkey" PRIMARY KEY ("like_id")
);

-- CreateTable
CREATE TABLE "ProductStatus" (
    "product_id" INTEGER NOT NULL,
    "publication_status" "ProductPublicationStatus" NOT NULL DEFAULT 'draft',
    "order_status" "ProductOrderStatus",
    "status_note" TEXT,
    "quantity" INTEGER,
    "changed_by" UUID,
    "changed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductStatus_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "ProductMedia" (
    "media_id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "file_id" INTEGER NOT NULL,
    "media_type" TEXT,
    "sort_order" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductMedia_pkey" PRIMARY KEY ("media_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "auth_user_id" UUID NOT NULL,
    "customer_type" TEXT NOT NULL DEFAULT 'individual',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "order_id" SERIAL NOT NULL,
    "order_code" TEXT NOT NULL DEFAULT '01',
    "customer_id" INTEGER,
    "supplier_id" INTEGER,
    "total_amount" DECIMAL(14,2),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "product_id" INTEGER,
    "unit_price" DECIMAL(12,2),
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AdminProductOrder" (
    "admin_order_id" SERIAL NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "product_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "ordered_by" UUID NOT NULL,
    "order_note" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AdminProductOrder_pkey" PRIMARY KEY ("admin_order_id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "notification_id" SERIAL NOT NULL,
    "recipient_user_id" UUID NOT NULL,
    "notification_type" "NotificationType" NOT NULL,
    "notification_category" "NotificationCategory" NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'pending',
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "supplier_id" INTEGER,
    "product_id" INTEGER,
    "order_id" INTEGER,
    "admin_order_id" INTEGER,
    "related_user_id" UUID,
    "quantity" INTEGER,
    "status_before" TEXT,
    "status_after" TEXT,
    "metadata" JSONB,
    "sent_at" TIMESTAMP(3),
    "read_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "audit_id" BIGSERIAL NOT NULL,
    "actor_user_id" UUID,
    "action" TEXT NOT NULL,
    "target_table" TEXT,
    "target_id" TEXT,
    "changes" JSONB,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("audit_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_application_id_key" ON "AuthUser"("application_id");

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_email_key" ON "AuthUser"("email");

-- CreateIndex
CREATE INDEX "AuthUser_role_idx" ON "AuthUser"("role");

-- CreateIndex
CREATE INDEX "AuthUser_is_superadmin_idx" ON "AuthUser"("is_superadmin");

-- CreateIndex
CREATE UNIQUE INDEX "AuthToken_token_hash_key" ON "AuthToken"("token_hash");

-- CreateIndex
CREATE INDEX "AuthToken_auth_user_id_idx" ON "AuthToken"("auth_user_id");

-- CreateIndex
CREATE INDEX "AuthToken_expires_at_idx" ON "AuthToken"("expires_at");

-- CreateIndex
CREATE UNIQUE INDEX "UserProfile_auth_user_id_key" ON "UserProfile"("auth_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "File_storage_key_key" ON "File"("storage_key");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_auth_user_id_key" ON "Supplier"("auth_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_tax_number_key" ON "Supplier"("tax_number");

-- CreateIndex
CREATE UNIQUE INDEX "SupplierDocument_supplier_id_key" ON "SupplierDocument"("supplier_id");

-- CreateIndex
CREATE INDEX "SupplierContactAddress_supplier_id_idx" ON "SupplierContactAddress"("supplier_id");

-- CreateIndex
CREATE INDEX "SupplierContactAddress_is_billing_idx" ON "SupplierContactAddress"("is_billing");

-- CreateIndex
CREATE INDEX "SupplierMainActivity_supplier_skills_id_idx" ON "SupplierMainActivity"("supplier_skills_id");

-- CreateIndex
CREATE UNIQUE INDEX "SupplierMainActivity_supplier_skills_id_activity_category_i_key" ON "SupplierMainActivity"("supplier_skills_id", "activity_category_id");

-- CreateIndex
CREATE INDEX "SupplierSubActivity_supplier_main_activity_id_idx" ON "SupplierSubActivity"("supplier_main_activity_id");

-- CreateIndex
CREATE INDEX "SupplierBrandMapping_supplier_skills_id_idx" ON "SupplierBrandMapping"("supplier_skills_id");

-- CreateIndex
CREATE UNIQUE INDEX "SupplierType_name_key" ON "SupplierType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityCategory_name_key" ON "ActivityCategory"("name");

-- CreateIndex
CREATE INDEX "AdminAssignment_admin_user_id_idx" ON "AdminAssignment"("admin_user_id");

-- CreateIndex
CREATE INDEX "AdminAssignment_supplier_id_idx" ON "AdminAssignment"("supplier_id");

-- CreateIndex
CREATE INDEX "AdminAssignment_is_active_idx" ON "AdminAssignment"("is_active");

-- CreateIndex
CREATE UNIQUE INDEX "AdminAssignment_admin_user_id_supplier_id_key" ON "AdminAssignment"("admin_user_id", "supplier_id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_product_code_key" ON "Product"("product_code");

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "ProductLike_product_id_idx" ON "ProductLike"("product_id");

-- CreateIndex
CREATE INDEX "ProductLike_customer_id_idx" ON "ProductLike"("customer_id");

-- CreateIndex
CREATE INDEX "ProductLike_is_active_idx" ON "ProductLike"("is_active");

-- CreateIndex
CREATE UNIQUE INDEX "ProductLike_product_id_customer_id_key" ON "ProductLike"("product_id", "customer_id");

-- CreateIndex
CREATE INDEX "ProductMedia_product_id_idx" ON "ProductMedia"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_auth_user_id_key" ON "Customer"("auth_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_order_code_key" ON "Order"("order_code");

-- CreateIndex
CREATE INDEX "OrderItem_order_id_idx" ON "OrderItem"("order_id");

-- CreateIndex
CREATE INDEX "OrderItem_product_id_idx" ON "OrderItem"("product_id");

-- CreateIndex
CREATE INDEX "AdminProductOrder_supplier_id_idx" ON "AdminProductOrder"("supplier_id");

-- CreateIndex
CREATE INDEX "AdminProductOrder_product_id_idx" ON "AdminProductOrder"("product_id");

-- CreateIndex
CREATE INDEX "AdminProductOrder_ordered_by_idx" ON "AdminProductOrder"("ordered_by");

-- CreateIndex
CREATE INDEX "Notification_recipient_user_id_idx" ON "Notification"("recipient_user_id");

-- CreateIndex
CREATE INDEX "Notification_status_idx" ON "Notification"("status");

-- CreateIndex
CREATE INDEX "Notification_notification_type_idx" ON "Notification"("notification_type");

-- CreateIndex
CREATE INDEX "Notification_notification_category_idx" ON "Notification"("notification_category");

-- CreateIndex
CREATE INDEX "Notification_supplier_id_idx" ON "Notification"("supplier_id");

-- CreateIndex
CREATE INDEX "Notification_product_id_idx" ON "Notification"("product_id");

-- CreateIndex
CREATE INDEX "Notification_order_id_idx" ON "Notification"("order_id");

-- CreateIndex
CREATE INDEX "Notification_created_at_idx" ON "Notification"("created_at");

-- CreateIndex
CREATE INDEX "AuditLog_actor_user_id_idx" ON "AuditLog"("actor_user_id");

-- CreateIndex
CREATE INDEX "AuditLog_target_table_target_id_idx" ON "AuditLog"("target_table", "target_id");

-- CreateIndex
CREATE INDEX "AuditLog_created_at_idx" ON "AuditLog"("created_at");

-- AddForeignKey
ALTER TABLE "AuthToken" ADD CONSTRAINT "AuthToken_auth_user_id_fkey" FOREIGN KEY ("auth_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserProfile" ADD CONSTRAINT "UserProfile_auth_user_id_fkey" FOREIGN KEY ("auth_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_uploaded_by_fkey" FOREIGN KEY ("uploaded_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_auth_user_id_fkey" FOREIGN KEY ("auth_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierStatus" ADD CONSTRAINT "SupplierStatus_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierStatus" ADD CONSTRAINT "SupplierStatus_changed_by_fkey" FOREIGN KEY ("changed_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierDocument" ADD CONSTRAINT "SupplierDocument_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierDocument" ADD CONSTRAINT "SupplierDocument_tax_sheet_file_id_fkey" FOREIGN KEY ("tax_sheet_file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierDocument" ADD CONSTRAINT "SupplierDocument_trade_registry_file_id_fkey" FOREIGN KEY ("trade_registry_file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierDocument" ADD CONSTRAINT "SupplierDocument_signature_declaration_file_id_fkey" FOREIGN KEY ("signature_declaration_file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierBankAccount" ADD CONSTRAINT "SupplierBankAccount_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierBankAccount" ADD CONSTRAINT "SupplierBankAccount_proof_file_id_fkey" FOREIGN KEY ("proof_file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierContactAddress" ADD CONSTRAINT "SupplierContactAddress_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierSkillActivity" ADD CONSTRAINT "SupplierSkillActivity_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierSkillActivity" ADD CONSTRAINT "SupplierSkillActivity_supplier_type_id_fkey" FOREIGN KEY ("supplier_type_id") REFERENCES "SupplierType"("supplier_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierMainActivity" ADD CONSTRAINT "SupplierMainActivity_supplier_skills_id_fkey" FOREIGN KEY ("supplier_skills_id") REFERENCES "SupplierSkillActivity"("supplier_skills_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierMainActivity" ADD CONSTRAINT "SupplierMainActivity_activity_category_id_fkey" FOREIGN KEY ("activity_category_id") REFERENCES "ActivityCategory"("activity_category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierSubActivity" ADD CONSTRAINT "SupplierSubActivity_supplier_main_activity_id_fkey" FOREIGN KEY ("supplier_main_activity_id") REFERENCES "SupplierMainActivity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierBrandMapping" ADD CONSTRAINT "SupplierBrandMapping_supplier_skills_id_fkey" FOREIGN KEY ("supplier_skills_id") REFERENCES "SupplierSkillActivity"("supplier_skills_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SupplierType" ADD CONSTRAINT "SupplierType_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityCategory" ADD CONSTRAINT "ActivityCategory_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "ActivityCategory"("activity_category_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActivityCategory" ADD CONSTRAINT "ActivityCategory_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAssignment" ADD CONSTRAINT "AdminAssignment_admin_user_id_fkey" FOREIGN KEY ("admin_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAssignment" ADD CONSTRAINT "AdminAssignment_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminAssignment" ADD CONSTRAINT "AdminAssignment_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_main_image_file_id_fkey" FOREIGN KEY ("main_image_file_id") REFERENCES "File"("file_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductLike" ADD CONSTRAINT "ProductLike_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStatus" ADD CONSTRAINT "ProductStatus_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductStatus" ADD CONSTRAINT "ProductStatus_changed_by_fkey" FOREIGN KEY ("changed_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductMedia" ADD CONSTRAINT "ProductMedia_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "File"("file_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_auth_user_id_fkey" FOREIGN KEY ("auth_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("customer_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminProductOrder" ADD CONSTRAINT "AdminProductOrder_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminProductOrder" ADD CONSTRAINT "AdminProductOrder_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AdminProductOrder" ADD CONSTRAINT "AdminProductOrder_ordered_by_fkey" FOREIGN KEY ("ordered_by") REFERENCES "AuthUser"("auth_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_recipient_user_id_fkey" FOREIGN KEY ("recipient_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("supplier_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_admin_order_id_fkey" FOREIGN KEY ("admin_order_id") REFERENCES "AdminProductOrder"("admin_order_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_related_user_id_fkey" FOREIGN KEY ("related_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_actor_user_id_fkey" FOREIGN KEY ("actor_user_id") REFERENCES "AuthUser"("auth_user_id") ON DELETE SET NULL ON UPDATE CASCADE;
