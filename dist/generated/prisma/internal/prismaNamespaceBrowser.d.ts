import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.ts';
export type * from './prismaNamespace.ts';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly AuthUser: "AuthUser";
    readonly AuthToken: "AuthToken";
    readonly UserProfile: "UserProfile";
    readonly File: "File";
    readonly Supplier: "Supplier";
    readonly SupplierStatus: "SupplierStatus";
    readonly SupplierDocument: "SupplierDocument";
    readonly SupplierBankAccount: "SupplierBankAccount";
    readonly SupplierContactAddress: "SupplierContactAddress";
    readonly SupplierSkillActivity: "SupplierSkillActivity";
    readonly SupplierMainActivity: "SupplierMainActivity";
    readonly SupplierSubActivity: "SupplierSubActivity";
    readonly SupplierBrandMapping: "SupplierBrandMapping";
    readonly SupplierType: "SupplierType";
    readonly ActivityCategory: "ActivityCategory";
    readonly AdminAssignment: "AdminAssignment";
    readonly Product: "Product";
    readonly ProductLike: "ProductLike";
    readonly ProductStatus: "ProductStatus";
    readonly ProductMedia: "ProductMedia";
    readonly Customer: "Customer";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly AdminProductOrder: "AdminProductOrder";
    readonly Notification: "Notification";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AuthUserScalarFieldEnum: {
    readonly auth_user_id: "auth_user_id";
    readonly application_id: "application_id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly phone: "phone";
    readonly role: "role";
    readonly email_verified: "email_verified";
    readonly is_active: "is_active";
    readonly is_superadmin: "is_superadmin";
    readonly last_login_at: "last_login_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum];
export declare const AuthTokenScalarFieldEnum: {
    readonly token_id: "token_id";
    readonly auth_user_id: "auth_user_id";
    readonly token_hash: "token_hash";
    readonly token_type: "token_type";
    readonly is_single_use: "is_single_use";
    readonly expires_at: "expires_at";
    readonly used_at: "used_at";
    readonly created_at: "created_at";
    readonly metadata: "metadata";
};
export type AuthTokenScalarFieldEnum = (typeof AuthTokenScalarFieldEnum)[keyof typeof AuthTokenScalarFieldEnum];
export declare const UserProfileScalarFieldEnum: {
    readonly user_profile_id: "user_profile_id";
    readonly auth_user_id: "auth_user_id";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly kvkk_accepted: "kvkk_accepted";
    readonly kvkk_accepted_at: "kvkk_accepted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly file_id: "file_id";
    readonly storage_key: "storage_key";
    readonly original_filename: "original_filename";
    readonly mime_type: "mime_type";
    readonly size_bytes: "size_bytes";
    readonly uploaded_by: "uploaded_by";
    readonly uploaded_at: "uploaded_at";
    readonly metadata: "metadata";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const SupplierScalarFieldEnum: {
    readonly supplier_id: "supplier_id";
    readonly auth_user_id: "auth_user_id";
    readonly legal_name: "legal_name";
    readonly company_type: "company_type";
    readonly tax_number: "tax_number";
    readonly tax_office: "tax_office";
    readonly trade_registry_no: "trade_registry_no";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum];
export declare const SupplierStatusScalarFieldEnum: {
    readonly supplier_id: "supplier_id";
    readonly current_status: "current_status";
    readonly status_note: "status_note";
    readonly changed_by: "changed_by";
    readonly changed_at: "changed_at";
};
export type SupplierStatusScalarFieldEnum = (typeof SupplierStatusScalarFieldEnum)[keyof typeof SupplierStatusScalarFieldEnum];
export declare const SupplierDocumentScalarFieldEnum: {
    readonly supplier_document_id: "supplier_document_id";
    readonly supplier_id: "supplier_id";
    readonly tax_sheet_file_id: "tax_sheet_file_id";
    readonly trade_registry_file_id: "trade_registry_file_id";
    readonly signature_declaration_file_id: "signature_declaration_file_id";
    readonly uploaded_at: "uploaded_at";
};
export type SupplierDocumentScalarFieldEnum = (typeof SupplierDocumentScalarFieldEnum)[keyof typeof SupplierDocumentScalarFieldEnum];
export declare const SupplierBankAccountScalarFieldEnum: {
    readonly bank_account_id: "bank_account_id";
    readonly supplier_id: "supplier_id";
    readonly bank_name: "bank_name";
    readonly iban: "iban";
    readonly account_holder_name: "account_holder_name";
    readonly proof_file_id: "proof_file_id";
    readonly is_primary: "is_primary";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierBankAccountScalarFieldEnum = (typeof SupplierBankAccountScalarFieldEnum)[keyof typeof SupplierBankAccountScalarFieldEnum];
export declare const SupplierContactAddressScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_id: "supplier_id";
    readonly is_billing: "is_billing";
    readonly country: "country";
    readonly province: "province";
    readonly district: "district";
    readonly address: "address";
    readonly phone: "phone";
    readonly website: "website";
    readonly contact_full_name: "contact_full_name";
    readonly contact_title: "contact_title";
    readonly contact_email: "contact_email";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierContactAddressScalarFieldEnum = (typeof SupplierContactAddressScalarFieldEnum)[keyof typeof SupplierContactAddressScalarFieldEnum];
export declare const SupplierSkillActivityScalarFieldEnum: {
    readonly supplier_skills_id: "supplier_skills_id";
    readonly supplier_id: "supplier_id";
    readonly supplier_type_id: "supplier_type_id";
    readonly expertise_level: "expertise_level";
    readonly why_choose_us: "why_choose_us";
    readonly is_featured: "is_featured";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierSkillActivityScalarFieldEnum = (typeof SupplierSkillActivityScalarFieldEnum)[keyof typeof SupplierSkillActivityScalarFieldEnum];
export declare const SupplierMainActivityScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_skills_id: "supplier_skills_id";
    readonly activity_category_id: "activity_category_id";
};
export type SupplierMainActivityScalarFieldEnum = (typeof SupplierMainActivityScalarFieldEnum)[keyof typeof SupplierMainActivityScalarFieldEnum];
export declare const SupplierSubActivityScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_main_activity_id: "supplier_main_activity_id";
    readonly sub_category_name: "sub_category_name";
};
export type SupplierSubActivityScalarFieldEnum = (typeof SupplierSubActivityScalarFieldEnum)[keyof typeof SupplierSubActivityScalarFieldEnum];
export declare const SupplierBrandMappingScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_skills_id: "supplier_skills_id";
    readonly brand_name: "brand_name";
};
export type SupplierBrandMappingScalarFieldEnum = (typeof SupplierBrandMappingScalarFieldEnum)[keyof typeof SupplierBrandMappingScalarFieldEnum];
export declare const SupplierTypeScalarFieldEnum: {
    readonly supplier_type_id: "supplier_type_id";
    readonly name: "name";
    readonly is_active: "is_active";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type SupplierTypeScalarFieldEnum = (typeof SupplierTypeScalarFieldEnum)[keyof typeof SupplierTypeScalarFieldEnum];
export declare const ActivityCategoryScalarFieldEnum: {
    readonly activity_category_id: "activity_category_id";
    readonly name: "name";
    readonly parent_id: "parent_id";
    readonly is_active: "is_active";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type ActivityCategoryScalarFieldEnum = (typeof ActivityCategoryScalarFieldEnum)[keyof typeof ActivityCategoryScalarFieldEnum];
export declare const AdminAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly admin_user_id: "admin_user_id";
    readonly supplier_id: "supplier_id";
    readonly assigned_by: "assigned_by";
    readonly assigned_at: "assigned_at";
    readonly is_active: "is_active";
};
export type AdminAssignmentScalarFieldEnum = (typeof AdminAssignmentScalarFieldEnum)[keyof typeof AdminAssignmentScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly product_code: "product_code";
    readonly supplier_id: "supplier_id";
    readonly name: "name";
    readonly slug: "slug";
    readonly short_description: "short_description";
    readonly full_description: "full_description";
    readonly main_image_file_id: "main_image_file_id";
    readonly price: "price";
    readonly currency: "currency";
    readonly stock: "stock";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductLikeScalarFieldEnum: {
    readonly like_id: "like_id";
    readonly product_id: "product_id";
    readonly customer_id: "customer_id";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProductLikeScalarFieldEnum = (typeof ProductLikeScalarFieldEnum)[keyof typeof ProductLikeScalarFieldEnum];
export declare const ProductStatusScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly publication_status: "publication_status";
    readonly order_status: "order_status";
    readonly status_note: "status_note";
    readonly quantity: "quantity";
    readonly changed_by: "changed_by";
    readonly changed_at: "changed_at";
};
export type ProductStatusScalarFieldEnum = (typeof ProductStatusScalarFieldEnum)[keyof typeof ProductStatusScalarFieldEnum];
export declare const ProductMediaScalarFieldEnum: {
    readonly media_id: "media_id";
    readonly product_id: "product_id";
    readonly file_id: "file_id";
    readonly media_type: "media_type";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
};
export type ProductMediaScalarFieldEnum = (typeof ProductMediaScalarFieldEnum)[keyof typeof ProductMediaScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly auth_user_id: "auth_user_id";
    readonly customer_type: "customer_type";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly order_id: "order_id";
    readonly order_code: "order_code";
    readonly customer_id: "customer_id";
    readonly supplier_id: "supplier_id";
    readonly total_amount: "total_amount";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly product_id: "product_id";
    readonly unit_price: "unit_price";
    readonly quantity: "quantity";
    readonly created_at: "created_at";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const AdminProductOrderScalarFieldEnum: {
    readonly admin_order_id: "admin_order_id";
    readonly supplier_id: "supplier_id";
    readonly product_id: "product_id";
    readonly quantity: "quantity";
    readonly ordered_by: "ordered_by";
    readonly order_note: "order_note";
    readonly created_at: "created_at";
};
export type AdminProductOrderScalarFieldEnum = (typeof AdminProductOrderScalarFieldEnum)[keyof typeof AdminProductOrderScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly notification_id: "notification_id";
    readonly recipient_user_id: "recipient_user_id";
    readonly notification_type: "notification_type";
    readonly notification_category: "notification_category";
    readonly status: "status";
    readonly title: "title";
    readonly message: "message";
    readonly supplier_id: "supplier_id";
    readonly product_id: "product_id";
    readonly order_id: "order_id";
    readonly admin_order_id: "admin_order_id";
    readonly related_user_id: "related_user_id";
    readonly quantity: "quantity";
    readonly status_before: "status_before";
    readonly status_after: "status_after";
    readonly metadata: "metadata";
    readonly sent_at: "sent_at";
    readonly read_at: "read_at";
    readonly created_at: "created_at";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly audit_id: "audit_id";
    readonly actor_user_id: "actor_user_id";
    readonly action: "action";
    readonly target_table: "target_table";
    readonly target_id: "target_id";
    readonly changes: "changes";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly created_at: "created_at";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map