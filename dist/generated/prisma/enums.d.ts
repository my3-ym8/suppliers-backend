export declare const UserRole: {
    readonly supplier: "supplier";
    readonly customer: "customer";
    readonly admin: "admin";
    readonly superadmin: "superadmin";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const SupplierVerificationStatus: {
    readonly under_review: "under_review";
    readonly incomplete_info: "incomplete_info";
    readonly approved: "approved";
    readonly rejected: "rejected";
};
export type SupplierVerificationStatus = (typeof SupplierVerificationStatus)[keyof typeof SupplierVerificationStatus];
export declare const ProductPublicationStatus: {
    readonly draft: "draft";
    readonly active: "active";
};
export type ProductPublicationStatus = (typeof ProductPublicationStatus)[keyof typeof ProductPublicationStatus];
export declare const ProductOrderStatus: {
    readonly none: "none";
    readonly ordered: "ordered";
    readonly sold: "sold";
    readonly cancelled: "cancelled";
};
export type ProductOrderStatus = (typeof ProductOrderStatus)[keyof typeof ProductOrderStatus];
export declare const CompanyType: {
    readonly AS: "AS";
    readonly LTD: "LTD";
    readonly SOLE: "SOLE";
    readonly OTHER: "OTHER";
};
export type CompanyType = (typeof CompanyType)[keyof typeof CompanyType];
export declare const NotificationType: {
    readonly email: "email";
    readonly dashboard: "dashboard";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const NotificationStatus: {
    readonly pending: "pending";
    readonly sent: "sent";
    readonly failed: "failed";
    readonly read: "read";
};
export type NotificationStatus = (typeof NotificationStatus)[keyof typeof NotificationStatus];
export declare const NotificationCategory: {
    readonly supplier_registration: "supplier_registration";
    readonly supplier_status_change: "supplier_status_change";
    readonly supplier_info_update: "supplier_info_update";
    readonly product_order: "product_order";
    readonly product_status_change: "product_status_change";
    readonly product_sold: "product_sold";
    readonly admin_product_request: "admin_product_request";
};
export type NotificationCategory = (typeof NotificationCategory)[keyof typeof NotificationCategory];
//# sourceMappingURL=enums.d.ts.map