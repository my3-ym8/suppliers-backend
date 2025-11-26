import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model AuthUser
 *
 */
export type AuthUserModel = runtime.Types.Result.DefaultSelection<Prisma.$AuthUserPayload>;
export type AggregateAuthUser = {
    _count: AuthUserCountAggregateOutputType | null;
    _min: AuthUserMinAggregateOutputType | null;
    _max: AuthUserMaxAggregateOutputType | null;
};
export type AuthUserMinAggregateOutputType = {
    auth_user_id: string | null;
    application_id: string | null;
    email: string | null;
    password_hash: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    email_verified: boolean | null;
    is_active: boolean | null;
    is_superadmin: boolean | null;
    last_login_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AuthUserMaxAggregateOutputType = {
    auth_user_id: string | null;
    application_id: string | null;
    email: string | null;
    password_hash: string | null;
    phone: string | null;
    role: $Enums.UserRole | null;
    email_verified: boolean | null;
    is_active: boolean | null;
    is_superadmin: boolean | null;
    last_login_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type AuthUserCountAggregateOutputType = {
    auth_user_id: number;
    application_id: number;
    email: number;
    password_hash: number;
    phone: number;
    role: number;
    email_verified: number;
    is_active: number;
    is_superadmin: number;
    last_login_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type AuthUserMinAggregateInputType = {
    auth_user_id?: true;
    application_id?: true;
    email?: true;
    password_hash?: true;
    phone?: true;
    role?: true;
    email_verified?: true;
    is_active?: true;
    is_superadmin?: true;
    last_login_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type AuthUserMaxAggregateInputType = {
    auth_user_id?: true;
    application_id?: true;
    email?: true;
    password_hash?: true;
    phone?: true;
    role?: true;
    email_verified?: true;
    is_active?: true;
    is_superadmin?: true;
    last_login_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type AuthUserCountAggregateInputType = {
    auth_user_id?: true;
    application_id?: true;
    email?: true;
    password_hash?: true;
    phone?: true;
    role?: true;
    email_verified?: true;
    is_active?: true;
    is_superadmin?: true;
    last_login_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type AuthUserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUser to aggregate.
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: Prisma.AuthUserOrderByWithRelationInput | Prisma.AuthUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AuthUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuthUsers
    **/
    _count?: true | AuthUserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AuthUserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AuthUserMaxAggregateInputType;
};
export type GetAuthUserAggregateType<T extends AuthUserAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuthUser[P]> : Prisma.GetScalarType<T[P], AggregateAuthUser[P]>;
};
export type AuthUserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthUserWhereInput;
    orderBy?: Prisma.AuthUserOrderByWithAggregationInput | Prisma.AuthUserOrderByWithAggregationInput[];
    by: Prisma.AuthUserScalarFieldEnum[] | Prisma.AuthUserScalarFieldEnum;
    having?: Prisma.AuthUserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthUserCountAggregateInputType | true;
    _min?: AuthUserMinAggregateInputType;
    _max?: AuthUserMaxAggregateInputType;
};
export type AuthUserGroupByOutputType = {
    auth_user_id: string;
    application_id: string;
    email: string;
    password_hash: string | null;
    phone: string | null;
    role: $Enums.UserRole;
    email_verified: boolean;
    is_active: boolean;
    is_superadmin: boolean;
    last_login_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: AuthUserCountAggregateOutputType | null;
    _min: AuthUserMinAggregateOutputType | null;
    _max: AuthUserMaxAggregateOutputType | null;
};
type GetAuthUserGroupByPayload<T extends AuthUserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuthUserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuthUserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuthUserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuthUserGroupByOutputType[P]>;
}>>;
export type AuthUserWhereInput = {
    AND?: Prisma.AuthUserWhereInput | Prisma.AuthUserWhereInput[];
    OR?: Prisma.AuthUserWhereInput[];
    NOT?: Prisma.AuthUserWhereInput | Prisma.AuthUserWhereInput[];
    auth_user_id?: Prisma.UuidFilter<"AuthUser"> | string;
    application_id?: Prisma.StringFilter<"AuthUser"> | string;
    email?: Prisma.StringFilter<"AuthUser"> | string;
    password_hash?: Prisma.StringNullableFilter<"AuthUser"> | string | null;
    phone?: Prisma.StringNullableFilter<"AuthUser"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"AuthUser"> | $Enums.UserRole;
    email_verified?: Prisma.BoolFilter<"AuthUser"> | boolean;
    is_active?: Prisma.BoolFilter<"AuthUser"> | boolean;
    is_superadmin?: Prisma.BoolFilter<"AuthUser"> | boolean;
    last_login_at?: Prisma.DateTimeNullableFilter<"AuthUser"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"AuthUser"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AuthUser"> | Date | string;
    tokens?: Prisma.AuthTokenListRelationFilter;
    profiles?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    suppliers?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    uploadedFiles?: Prisma.FileListRelationFilter;
    supplierStatusChanges?: Prisma.SupplierStatusListRelationFilter;
    supplierTypesCreated?: Prisma.SupplierTypeListRelationFilter;
    activityCatCreated?: Prisma.ActivityCategoryListRelationFilter;
    adminAssignments?: Prisma.AdminAssignmentListRelationFilter;
    adminAssignmentsMade?: Prisma.AdminAssignmentListRelationFilter;
    adminOrders?: Prisma.AdminProductOrderListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    notificationsRelated?: Prisma.NotificationListRelationFilter;
    productStatusChanges?: Prisma.ProductStatusListRelationFilter;
};
export type AuthUserOrderByWithRelationInput = {
    auth_user_id?: Prisma.SortOrder;
    application_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_superadmin?: Prisma.SortOrder;
    last_login_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    tokens?: Prisma.AuthTokenOrderByRelationAggregateInput;
    profiles?: Prisma.UserProfileOrderByWithRelationInput;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    suppliers?: Prisma.SupplierOrderByWithRelationInput;
    uploadedFiles?: Prisma.FileOrderByRelationAggregateInput;
    supplierStatusChanges?: Prisma.SupplierStatusOrderByRelationAggregateInput;
    supplierTypesCreated?: Prisma.SupplierTypeOrderByRelationAggregateInput;
    activityCatCreated?: Prisma.ActivityCategoryOrderByRelationAggregateInput;
    adminAssignments?: Prisma.AdminAssignmentOrderByRelationAggregateInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentOrderByRelationAggregateInput;
    adminOrders?: Prisma.AdminProductOrderOrderByRelationAggregateInput;
    auditLogs?: Prisma.AuditLogOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    notificationsRelated?: Prisma.NotificationOrderByRelationAggregateInput;
    productStatusChanges?: Prisma.ProductStatusOrderByRelationAggregateInput;
};
export type AuthUserWhereUniqueInput = Prisma.AtLeast<{
    auth_user_id?: string;
    application_id?: string;
    email?: string;
    AND?: Prisma.AuthUserWhereInput | Prisma.AuthUserWhereInput[];
    OR?: Prisma.AuthUserWhereInput[];
    NOT?: Prisma.AuthUserWhereInput | Prisma.AuthUserWhereInput[];
    password_hash?: Prisma.StringNullableFilter<"AuthUser"> | string | null;
    phone?: Prisma.StringNullableFilter<"AuthUser"> | string | null;
    role?: Prisma.EnumUserRoleFilter<"AuthUser"> | $Enums.UserRole;
    email_verified?: Prisma.BoolFilter<"AuthUser"> | boolean;
    is_active?: Prisma.BoolFilter<"AuthUser"> | boolean;
    is_superadmin?: Prisma.BoolFilter<"AuthUser"> | boolean;
    last_login_at?: Prisma.DateTimeNullableFilter<"AuthUser"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"AuthUser"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"AuthUser"> | Date | string;
    tokens?: Prisma.AuthTokenListRelationFilter;
    profiles?: Prisma.XOR<Prisma.UserProfileNullableScalarRelationFilter, Prisma.UserProfileWhereInput> | null;
    customer?: Prisma.XOR<Prisma.CustomerNullableScalarRelationFilter, Prisma.CustomerWhereInput> | null;
    suppliers?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
    uploadedFiles?: Prisma.FileListRelationFilter;
    supplierStatusChanges?: Prisma.SupplierStatusListRelationFilter;
    supplierTypesCreated?: Prisma.SupplierTypeListRelationFilter;
    activityCatCreated?: Prisma.ActivityCategoryListRelationFilter;
    adminAssignments?: Prisma.AdminAssignmentListRelationFilter;
    adminAssignmentsMade?: Prisma.AdminAssignmentListRelationFilter;
    adminOrders?: Prisma.AdminProductOrderListRelationFilter;
    auditLogs?: Prisma.AuditLogListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    notificationsRelated?: Prisma.NotificationListRelationFilter;
    productStatusChanges?: Prisma.ProductStatusListRelationFilter;
}, "auth_user_id" | "application_id" | "email">;
export type AuthUserOrderByWithAggregationInput = {
    auth_user_id?: Prisma.SortOrder;
    application_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_superadmin?: Prisma.SortOrder;
    last_login_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.AuthUserCountOrderByAggregateInput;
    _max?: Prisma.AuthUserMaxOrderByAggregateInput;
    _min?: Prisma.AuthUserMinOrderByAggregateInput;
};
export type AuthUserScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuthUserScalarWhereWithAggregatesInput | Prisma.AuthUserScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuthUserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuthUserScalarWhereWithAggregatesInput | Prisma.AuthUserScalarWhereWithAggregatesInput[];
    auth_user_id?: Prisma.UuidWithAggregatesFilter<"AuthUser"> | string;
    application_id?: Prisma.StringWithAggregatesFilter<"AuthUser"> | string;
    email?: Prisma.StringWithAggregatesFilter<"AuthUser"> | string;
    password_hash?: Prisma.StringNullableWithAggregatesFilter<"AuthUser"> | string | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"AuthUser"> | string | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"AuthUser"> | $Enums.UserRole;
    email_verified?: Prisma.BoolWithAggregatesFilter<"AuthUser"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"AuthUser"> | boolean;
    is_superadmin?: Prisma.BoolWithAggregatesFilter<"AuthUser"> | boolean;
    last_login_at?: Prisma.DateTimeNullableWithAggregatesFilter<"AuthUser"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AuthUser"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"AuthUser"> | Date | string;
};
export type AuthUserCreateInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUpdateInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateManyInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type AuthUserUpdateManyMutationInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthUserUncheckedUpdateManyInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AuthUserCountOrderByAggregateInput = {
    auth_user_id?: Prisma.SortOrder;
    application_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_superadmin?: Prisma.SortOrder;
    last_login_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AuthUserMaxOrderByAggregateInput = {
    auth_user_id?: Prisma.SortOrder;
    application_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_superadmin?: Prisma.SortOrder;
    last_login_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AuthUserMinOrderByAggregateInput = {
    auth_user_id?: Prisma.SortOrder;
    application_id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    email_verified?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    is_superadmin?: Prisma.SortOrder;
    last_login_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type AuthUserScalarRelationFilter = {
    is?: Prisma.AuthUserWhereInput;
    isNot?: Prisma.AuthUserWhereInput;
};
export type AuthUserNullableScalarRelationFilter = {
    is?: Prisma.AuthUserWhereInput | null;
    isNot?: Prisma.AuthUserWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type AuthUserCreateNestedOneWithoutTokensInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutTokensInput, Prisma.AuthUserUncheckedCreateWithoutTokensInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutTokensInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutTokensInput, Prisma.AuthUserUncheckedCreateWithoutTokensInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutTokensInput;
    upsert?: Prisma.AuthUserUpsertWithoutTokensInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutTokensInput, Prisma.AuthUserUpdateWithoutTokensInput>, Prisma.AuthUserUncheckedUpdateWithoutTokensInput>;
};
export type AuthUserCreateNestedOneWithoutProfilesInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutProfilesInput, Prisma.AuthUserUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutProfilesInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutProfilesInput, Prisma.AuthUserUncheckedCreateWithoutProfilesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutProfilesInput;
    upsert?: Prisma.AuthUserUpsertWithoutProfilesInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutProfilesInput, Prisma.AuthUserUpdateWithoutProfilesInput>, Prisma.AuthUserUncheckedUpdateWithoutProfilesInput>;
};
export type AuthUserCreateNestedOneWithoutUploadedFilesInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedCreateWithoutUploadedFilesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutUploadedFilesInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutUploadedFilesNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedCreateWithoutUploadedFilesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutUploadedFilesInput;
    upsert?: Prisma.AuthUserUpsertWithoutUploadedFilesInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutUploadedFilesInput, Prisma.AuthUserUpdateWithoutUploadedFilesInput>, Prisma.AuthUserUncheckedUpdateWithoutUploadedFilesInput>;
};
export type AuthUserCreateNestedOneWithoutSuppliersInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSuppliersInput, Prisma.AuthUserUncheckedCreateWithoutSuppliersInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSuppliersInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutSuppliersNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSuppliersInput, Prisma.AuthUserUncheckedCreateWithoutSuppliersInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSuppliersInput;
    upsert?: Prisma.AuthUserUpsertWithoutSuppliersInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutSuppliersInput, Prisma.AuthUserUpdateWithoutSuppliersInput>, Prisma.AuthUserUncheckedUpdateWithoutSuppliersInput>;
};
export type AuthUserCreateNestedOneWithoutSupplierStatusChangesInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutSupplierStatusChangesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSupplierStatusChangesInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutSupplierStatusChangesNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutSupplierStatusChangesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSupplierStatusChangesInput;
    upsert?: Prisma.AuthUserUpsertWithoutSupplierStatusChangesInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutSupplierStatusChangesInput, Prisma.AuthUserUpdateWithoutSupplierStatusChangesInput>, Prisma.AuthUserUncheckedUpdateWithoutSupplierStatusChangesInput>;
};
export type AuthUserCreateNestedOneWithoutSupplierTypesCreatedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedCreateWithoutSupplierTypesCreatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSupplierTypesCreatedInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutSupplierTypesCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedCreateWithoutSupplierTypesCreatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutSupplierTypesCreatedInput;
    upsert?: Prisma.AuthUserUpsertWithoutSupplierTypesCreatedInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutSupplierTypesCreatedInput, Prisma.AuthUserUpdateWithoutSupplierTypesCreatedInput>, Prisma.AuthUserUncheckedUpdateWithoutSupplierTypesCreatedInput>;
};
export type AuthUserCreateNestedOneWithoutActivityCatCreatedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedCreateWithoutActivityCatCreatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutActivityCatCreatedInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutActivityCatCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedCreateWithoutActivityCatCreatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutActivityCatCreatedInput;
    upsert?: Prisma.AuthUserUpsertWithoutActivityCatCreatedInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutActivityCatCreatedInput, Prisma.AuthUserUpdateWithoutActivityCatCreatedInput>, Prisma.AuthUserUncheckedUpdateWithoutActivityCatCreatedInput>;
};
export type AuthUserCreateNestedOneWithoutAdminAssignmentsInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminAssignmentsInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserCreateNestedOneWithoutAdminAssignmentsMadeInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsMadeInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminAssignmentsMadeInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutAdminAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminAssignmentsInput;
    upsert?: Prisma.AuthUserUpsertWithoutAdminAssignmentsInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutAdminAssignmentsInput, Prisma.AuthUserUpdateWithoutAdminAssignmentsInput>, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsInput>;
};
export type AuthUserUpdateOneWithoutAdminAssignmentsMadeNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsMadeInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminAssignmentsMadeInput;
    upsert?: Prisma.AuthUserUpsertWithoutAdminAssignmentsMadeInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUpdateWithoutAdminAssignmentsMadeInput>, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsMadeInput>;
};
export type AuthUserCreateNestedOneWithoutProductStatusChangesInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutProductStatusChangesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutProductStatusChangesInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutProductStatusChangesNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutProductStatusChangesInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutProductStatusChangesInput;
    upsert?: Prisma.AuthUserUpsertWithoutProductStatusChangesInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutProductStatusChangesInput, Prisma.AuthUserUpdateWithoutProductStatusChangesInput>, Prisma.AuthUserUncheckedUpdateWithoutProductStatusChangesInput>;
};
export type AuthUserCreateNestedOneWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutCustomerInput, Prisma.AuthUserUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutCustomerInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutCustomerInput, Prisma.AuthUserUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutCustomerInput;
    upsert?: Prisma.AuthUserUpsertWithoutCustomerInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutCustomerInput, Prisma.AuthUserUpdateWithoutCustomerInput>, Prisma.AuthUserUncheckedUpdateWithoutCustomerInput>;
};
export type AuthUserCreateNestedOneWithoutAdminOrdersInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedCreateWithoutAdminOrdersInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminOrdersInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutAdminOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedCreateWithoutAdminOrdersInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAdminOrdersInput;
    upsert?: Prisma.AuthUserUpsertWithoutAdminOrdersInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutAdminOrdersInput, Prisma.AuthUserUpdateWithoutAdminOrdersInput>, Prisma.AuthUserUncheckedUpdateWithoutAdminOrdersInput>;
};
export type AuthUserCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserCreateNestedOneWithoutNotificationsRelatedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsRelatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutNotificationsRelatedInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.AuthUserUpsertWithoutNotificationsInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutNotificationsInput, Prisma.AuthUserUpdateWithoutNotificationsInput>, Prisma.AuthUserUncheckedUpdateWithoutNotificationsInput>;
};
export type AuthUserUpdateOneWithoutNotificationsRelatedNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsRelatedInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutNotificationsRelatedInput;
    upsert?: Prisma.AuthUserUpsertWithoutNotificationsRelatedInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutNotificationsRelatedInput, Prisma.AuthUserUpdateWithoutNotificationsRelatedInput>, Prisma.AuthUserUncheckedUpdateWithoutNotificationsRelatedInput>;
};
export type AuthUserCreateNestedOneWithoutAuditLogsInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAuditLogsInput, Prisma.AuthUserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAuditLogsInput;
    connect?: Prisma.AuthUserWhereUniqueInput;
};
export type AuthUserUpdateOneWithoutAuditLogsNestedInput = {
    create?: Prisma.XOR<Prisma.AuthUserCreateWithoutAuditLogsInput, Prisma.AuthUserUncheckedCreateWithoutAuditLogsInput>;
    connectOrCreate?: Prisma.AuthUserCreateOrConnectWithoutAuditLogsInput;
    upsert?: Prisma.AuthUserUpsertWithoutAuditLogsInput;
    disconnect?: Prisma.AuthUserWhereInput | boolean;
    delete?: Prisma.AuthUserWhereInput | boolean;
    connect?: Prisma.AuthUserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AuthUserUpdateToOneWithWhereWithoutAuditLogsInput, Prisma.AuthUserUpdateWithoutAuditLogsInput>, Prisma.AuthUserUncheckedUpdateWithoutAuditLogsInput>;
};
export type AuthUserCreateWithoutTokensInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutTokensInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutTokensInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutTokensInput, Prisma.AuthUserUncheckedCreateWithoutTokensInput>;
};
export type AuthUserUpsertWithoutTokensInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutTokensInput, Prisma.AuthUserUncheckedUpdateWithoutTokensInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutTokensInput, Prisma.AuthUserUncheckedCreateWithoutTokensInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutTokensInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutTokensInput, Prisma.AuthUserUncheckedUpdateWithoutTokensInput>;
};
export type AuthUserUpdateWithoutTokensInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutTokensInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutProfilesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutProfilesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutProfilesInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutProfilesInput, Prisma.AuthUserUncheckedCreateWithoutProfilesInput>;
};
export type AuthUserUpsertWithoutProfilesInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutProfilesInput, Prisma.AuthUserUncheckedUpdateWithoutProfilesInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutProfilesInput, Prisma.AuthUserUncheckedCreateWithoutProfilesInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutProfilesInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutProfilesInput, Prisma.AuthUserUncheckedUpdateWithoutProfilesInput>;
};
export type AuthUserUpdateWithoutProfilesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutProfilesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutUploadedFilesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutUploadedFilesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutUploadedFilesInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedCreateWithoutUploadedFilesInput>;
};
export type AuthUserUpsertWithoutUploadedFilesInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedUpdateWithoutUploadedFilesInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedCreateWithoutUploadedFilesInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutUploadedFilesInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutUploadedFilesInput, Prisma.AuthUserUncheckedUpdateWithoutUploadedFilesInput>;
};
export type AuthUserUpdateWithoutUploadedFilesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutUploadedFilesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutSuppliersInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutSuppliersInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutSuppliersInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSuppliersInput, Prisma.AuthUserUncheckedCreateWithoutSuppliersInput>;
};
export type AuthUserUpsertWithoutSuppliersInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutSuppliersInput, Prisma.AuthUserUncheckedUpdateWithoutSuppliersInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSuppliersInput, Prisma.AuthUserUncheckedCreateWithoutSuppliersInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutSuppliersInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutSuppliersInput, Prisma.AuthUserUncheckedUpdateWithoutSuppliersInput>;
};
export type AuthUserUpdateWithoutSuppliersInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutSuppliersInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutSupplierStatusChangesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutSupplierStatusChangesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutSupplierStatusChangesInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutSupplierStatusChangesInput>;
};
export type AuthUserUpsertWithoutSupplierStatusChangesInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedUpdateWithoutSupplierStatusChangesInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutSupplierStatusChangesInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutSupplierStatusChangesInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutSupplierStatusChangesInput, Prisma.AuthUserUncheckedUpdateWithoutSupplierStatusChangesInput>;
};
export type AuthUserUpdateWithoutSupplierStatusChangesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutSupplierStatusChangesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutSupplierTypesCreatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutSupplierTypesCreatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutSupplierTypesCreatedInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedCreateWithoutSupplierTypesCreatedInput>;
};
export type AuthUserUpsertWithoutSupplierTypesCreatedInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedUpdateWithoutSupplierTypesCreatedInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedCreateWithoutSupplierTypesCreatedInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutSupplierTypesCreatedInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutSupplierTypesCreatedInput, Prisma.AuthUserUncheckedUpdateWithoutSupplierTypesCreatedInput>;
};
export type AuthUserUpdateWithoutSupplierTypesCreatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutSupplierTypesCreatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutActivityCatCreatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutActivityCatCreatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutActivityCatCreatedInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedCreateWithoutActivityCatCreatedInput>;
};
export type AuthUserUpsertWithoutActivityCatCreatedInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedUpdateWithoutActivityCatCreatedInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedCreateWithoutActivityCatCreatedInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutActivityCatCreatedInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutActivityCatCreatedInput, Prisma.AuthUserUncheckedUpdateWithoutActivityCatCreatedInput>;
};
export type AuthUserUpdateWithoutActivityCatCreatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutActivityCatCreatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutAdminAssignmentsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutAdminAssignmentsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutAdminAssignmentsInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsInput>;
};
export type AuthUserCreateWithoutAdminAssignmentsMadeInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutAdminAssignmentsMadeInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutAdminAssignmentsMadeInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsMadeInput>;
};
export type AuthUserUpsertWithoutAdminAssignmentsInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutAdminAssignmentsInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminAssignmentsInput, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsInput>;
};
export type AuthUserUpdateWithoutAdminAssignmentsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutAdminAssignmentsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUpsertWithoutAdminAssignmentsMadeInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsMadeInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedCreateWithoutAdminAssignmentsMadeInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutAdminAssignmentsMadeInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminAssignmentsMadeInput, Prisma.AuthUserUncheckedUpdateWithoutAdminAssignmentsMadeInput>;
};
export type AuthUserUpdateWithoutAdminAssignmentsMadeInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutAdminAssignmentsMadeInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutProductStatusChangesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
};
export type AuthUserUncheckedCreateWithoutProductStatusChangesInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
};
export type AuthUserCreateOrConnectWithoutProductStatusChangesInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutProductStatusChangesInput>;
};
export type AuthUserUpsertWithoutProductStatusChangesInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedUpdateWithoutProductStatusChangesInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedCreateWithoutProductStatusChangesInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutProductStatusChangesInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutProductStatusChangesInput, Prisma.AuthUserUncheckedUpdateWithoutProductStatusChangesInput>;
};
export type AuthUserUpdateWithoutProductStatusChangesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutProductStatusChangesInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
};
export type AuthUserCreateWithoutCustomerInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutCustomerInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutCustomerInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutCustomerInput, Prisma.AuthUserUncheckedCreateWithoutCustomerInput>;
};
export type AuthUserUpsertWithoutCustomerInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutCustomerInput, Prisma.AuthUserUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutCustomerInput, Prisma.AuthUserUncheckedCreateWithoutCustomerInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutCustomerInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutCustomerInput, Prisma.AuthUserUncheckedUpdateWithoutCustomerInput>;
};
export type AuthUserUpdateWithoutCustomerInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutCustomerInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutAdminOrdersInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutAdminOrdersInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutAdminOrdersInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedCreateWithoutAdminOrdersInput>;
};
export type AuthUserUpsertWithoutAdminOrdersInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedUpdateWithoutAdminOrdersInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedCreateWithoutAdminOrdersInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutAdminOrdersInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutAdminOrdersInput, Prisma.AuthUserUncheckedUpdateWithoutAdminOrdersInput>;
};
export type AuthUserUpdateWithoutAdminOrdersInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutAdminOrdersInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutNotificationsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutNotificationsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsInput>;
};
export type AuthUserCreateWithoutNotificationsRelatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutNotificationsRelatedInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    auditLogs?: Prisma.AuditLogUncheckedCreateNestedManyWithoutActorInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutNotificationsRelatedInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsRelatedInput>;
};
export type AuthUserUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutNotificationsInput, Prisma.AuthUserUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutNotificationsInput, Prisma.AuthUserUncheckedUpdateWithoutNotificationsInput>;
};
export type AuthUserUpdateWithoutNotificationsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutNotificationsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUpsertWithoutNotificationsRelatedInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedUpdateWithoutNotificationsRelatedInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedCreateWithoutNotificationsRelatedInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutNotificationsRelatedInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutNotificationsRelatedInput, Prisma.AuthUserUncheckedUpdateWithoutNotificationsRelatedInput>;
};
export type AuthUserUpdateWithoutNotificationsRelatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutNotificationsRelatedInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    auditLogs?: Prisma.AuditLogUncheckedUpdateManyWithoutActorNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserCreateWithoutAuditLogsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserUncheckedCreateWithoutAuditLogsInput = {
    auth_user_id?: string;
    application_id?: string;
    email: string;
    password_hash?: string | null;
    phone?: string | null;
    role?: $Enums.UserRole;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    tokens?: Prisma.AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput;
    profiles?: Prisma.UserProfileUncheckedCreateNestedOneWithoutAuth_userInput;
    customer?: Prisma.CustomerUncheckedCreateNestedOneWithoutAuth_userInput;
    suppliers?: Prisma.SupplierUncheckedCreateNestedOneWithoutAuth_userInput;
    uploadedFiles?: Prisma.FileUncheckedCreateNestedManyWithoutUploaderInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAdminInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutAssigned_by_userInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutRecipientInput;
    notificationsRelated?: Prisma.NotificationUncheckedCreateNestedManyWithoutRelated_userInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedCreateNestedManyWithoutChanged_by_userInput;
};
export type AuthUserCreateOrConnectWithoutAuditLogsInput = {
    where: Prisma.AuthUserWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAuditLogsInput, Prisma.AuthUserUncheckedCreateWithoutAuditLogsInput>;
};
export type AuthUserUpsertWithoutAuditLogsInput = {
    update: Prisma.XOR<Prisma.AuthUserUpdateWithoutAuditLogsInput, Prisma.AuthUserUncheckedUpdateWithoutAuditLogsInput>;
    create: Prisma.XOR<Prisma.AuthUserCreateWithoutAuditLogsInput, Prisma.AuthUserUncheckedCreateWithoutAuditLogsInput>;
    where?: Prisma.AuthUserWhereInput;
};
export type AuthUserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: Prisma.AuthUserWhereInput;
    data: Prisma.XOR<Prisma.AuthUserUpdateWithoutAuditLogsInput, Prisma.AuthUserUncheckedUpdateWithoutAuditLogsInput>;
};
export type AuthUserUpdateWithoutAuditLogsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUpdateManyWithoutChanged_by_userNestedInput;
};
export type AuthUserUncheckedUpdateWithoutAuditLogsInput = {
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    application_id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    email_verified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_superadmin?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    last_login_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tokens?: Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput;
    profiles?: Prisma.UserProfileUncheckedUpdateOneWithoutAuth_userNestedInput;
    customer?: Prisma.CustomerUncheckedUpdateOneWithoutAuth_userNestedInput;
    suppliers?: Prisma.SupplierUncheckedUpdateOneWithoutAuth_userNestedInput;
    uploadedFiles?: Prisma.FileUncheckedUpdateManyWithoutUploaderNestedInput;
    supplierStatusChanges?: Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
    supplierTypesCreated?: Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    activityCatCreated?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAdminNestedInput;
    adminAssignmentsMade?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutAssigned_by_userNestedInput;
    adminOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutRecipientNestedInput;
    notificationsRelated?: Prisma.NotificationUncheckedUpdateManyWithoutRelated_userNestedInput;
    productStatusChanges?: Prisma.ProductStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput;
};
/**
 * Count Type AuthUserCountOutputType
 */
export type AuthUserCountOutputType = {
    tokens: number;
    uploadedFiles: number;
    supplierStatusChanges: number;
    supplierTypesCreated: number;
    activityCatCreated: number;
    adminAssignments: number;
    adminAssignmentsMade: number;
    adminOrders: number;
    auditLogs: number;
    notifications: number;
    notificationsRelated: number;
    productStatusChanges: number;
};
export type AuthUserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tokens?: boolean | AuthUserCountOutputTypeCountTokensArgs;
    uploadedFiles?: boolean | AuthUserCountOutputTypeCountUploadedFilesArgs;
    supplierStatusChanges?: boolean | AuthUserCountOutputTypeCountSupplierStatusChangesArgs;
    supplierTypesCreated?: boolean | AuthUserCountOutputTypeCountSupplierTypesCreatedArgs;
    activityCatCreated?: boolean | AuthUserCountOutputTypeCountActivityCatCreatedArgs;
    adminAssignments?: boolean | AuthUserCountOutputTypeCountAdminAssignmentsArgs;
    adminAssignmentsMade?: boolean | AuthUserCountOutputTypeCountAdminAssignmentsMadeArgs;
    adminOrders?: boolean | AuthUserCountOutputTypeCountAdminOrdersArgs;
    auditLogs?: boolean | AuthUserCountOutputTypeCountAuditLogsArgs;
    notifications?: boolean | AuthUserCountOutputTypeCountNotificationsArgs;
    notificationsRelated?: boolean | AuthUserCountOutputTypeCountNotificationsRelatedArgs;
    productStatusChanges?: boolean | AuthUserCountOutputTypeCountProductStatusChangesArgs;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUserCountOutputType
     */
    select?: Prisma.AuthUserCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthTokenWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountUploadedFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountSupplierStatusChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierStatusWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountSupplierTypesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierTypeWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountActivityCatCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityCategoryWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountAdminAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminAssignmentWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountAdminAssignmentsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminAssignmentWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountAdminOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminProductOrderWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountAuditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuditLogWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountNotificationsRelatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * AuthUserCountOutputType without action
 */
export type AuthUserCountOutputTypeCountProductStatusChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductStatusWhereInput;
};
export type AuthUserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    auth_user_id?: boolean;
    application_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    phone?: boolean;
    role?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    tokens?: boolean | Prisma.AuthUser$tokensArgs<ExtArgs>;
    profiles?: boolean | Prisma.AuthUser$profilesArgs<ExtArgs>;
    customer?: boolean | Prisma.AuthUser$customerArgs<ExtArgs>;
    suppliers?: boolean | Prisma.AuthUser$suppliersArgs<ExtArgs>;
    uploadedFiles?: boolean | Prisma.AuthUser$uploadedFilesArgs<ExtArgs>;
    supplierStatusChanges?: boolean | Prisma.AuthUser$supplierStatusChangesArgs<ExtArgs>;
    supplierTypesCreated?: boolean | Prisma.AuthUser$supplierTypesCreatedArgs<ExtArgs>;
    activityCatCreated?: boolean | Prisma.AuthUser$activityCatCreatedArgs<ExtArgs>;
    adminAssignments?: boolean | Prisma.AuthUser$adminAssignmentsArgs<ExtArgs>;
    adminAssignmentsMade?: boolean | Prisma.AuthUser$adminAssignmentsMadeArgs<ExtArgs>;
    adminOrders?: boolean | Prisma.AuthUser$adminOrdersArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.AuthUser$auditLogsArgs<ExtArgs>;
    notifications?: boolean | Prisma.AuthUser$notificationsArgs<ExtArgs>;
    notificationsRelated?: boolean | Prisma.AuthUser$notificationsRelatedArgs<ExtArgs>;
    productStatusChanges?: boolean | Prisma.AuthUser$productStatusChangesArgs<ExtArgs>;
    _count?: boolean | Prisma.AuthUserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["authUser"]>;
export type AuthUserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    auth_user_id?: boolean;
    application_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    phone?: boolean;
    role?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["authUser"]>;
export type AuthUserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    auth_user_id?: boolean;
    application_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    phone?: boolean;
    role?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["authUser"]>;
export type AuthUserSelectScalar = {
    auth_user_id?: boolean;
    application_id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    phone?: boolean;
    role?: boolean;
    email_verified?: boolean;
    is_active?: boolean;
    is_superadmin?: boolean;
    last_login_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type AuthUserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"auth_user_id" | "application_id" | "email" | "password_hash" | "phone" | "role" | "email_verified" | "is_active" | "is_superadmin" | "last_login_at" | "created_at" | "updated_at", ExtArgs["result"]["authUser"]>;
export type AuthUserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tokens?: boolean | Prisma.AuthUser$tokensArgs<ExtArgs>;
    profiles?: boolean | Prisma.AuthUser$profilesArgs<ExtArgs>;
    customer?: boolean | Prisma.AuthUser$customerArgs<ExtArgs>;
    suppliers?: boolean | Prisma.AuthUser$suppliersArgs<ExtArgs>;
    uploadedFiles?: boolean | Prisma.AuthUser$uploadedFilesArgs<ExtArgs>;
    supplierStatusChanges?: boolean | Prisma.AuthUser$supplierStatusChangesArgs<ExtArgs>;
    supplierTypesCreated?: boolean | Prisma.AuthUser$supplierTypesCreatedArgs<ExtArgs>;
    activityCatCreated?: boolean | Prisma.AuthUser$activityCatCreatedArgs<ExtArgs>;
    adminAssignments?: boolean | Prisma.AuthUser$adminAssignmentsArgs<ExtArgs>;
    adminAssignmentsMade?: boolean | Prisma.AuthUser$adminAssignmentsMadeArgs<ExtArgs>;
    adminOrders?: boolean | Prisma.AuthUser$adminOrdersArgs<ExtArgs>;
    auditLogs?: boolean | Prisma.AuthUser$auditLogsArgs<ExtArgs>;
    notifications?: boolean | Prisma.AuthUser$notificationsArgs<ExtArgs>;
    notificationsRelated?: boolean | Prisma.AuthUser$notificationsRelatedArgs<ExtArgs>;
    productStatusChanges?: boolean | Prisma.AuthUser$productStatusChangesArgs<ExtArgs>;
    _count?: boolean | Prisma.AuthUserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AuthUserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AuthUserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AuthUserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuthUser";
    objects: {
        tokens: Prisma.$AuthTokenPayload<ExtArgs>[];
        profiles: Prisma.$UserProfilePayload<ExtArgs> | null;
        customer: Prisma.$CustomerPayload<ExtArgs> | null;
        suppliers: Prisma.$SupplierPayload<ExtArgs> | null;
        uploadedFiles: Prisma.$FilePayload<ExtArgs>[];
        supplierStatusChanges: Prisma.$SupplierStatusPayload<ExtArgs>[];
        supplierTypesCreated: Prisma.$SupplierTypePayload<ExtArgs>[];
        activityCatCreated: Prisma.$ActivityCategoryPayload<ExtArgs>[];
        adminAssignments: Prisma.$AdminAssignmentPayload<ExtArgs>[];
        adminAssignmentsMade: Prisma.$AdminAssignmentPayload<ExtArgs>[];
        adminOrders: Prisma.$AdminProductOrderPayload<ExtArgs>[];
        auditLogs: Prisma.$AuditLogPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        notificationsRelated: Prisma.$NotificationPayload<ExtArgs>[];
        productStatusChanges: Prisma.$ProductStatusPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        auth_user_id: string;
        application_id: string;
        email: string;
        password_hash: string | null;
        phone: string | null;
        role: $Enums.UserRole;
        email_verified: boolean;
        is_active: boolean;
        is_superadmin: boolean;
        last_login_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["authUser"]>;
    composites: {};
};
export type AuthUserGetPayload<S extends boolean | null | undefined | AuthUserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuthUserPayload, S>;
export type AuthUserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuthUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthUserCountAggregateInputType | true;
};
export interface AuthUserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuthUser'];
        meta: {
            name: 'AuthUser';
        };
    };
    /**
     * Find zero or one AuthUser that matches the filter.
     * @param {AuthUserFindUniqueArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthUserFindUniqueArgs>(args: Prisma.SelectSubset<T, AuthUserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AuthUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthUserFindUniqueOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthUserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuthUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuthUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthUserFindFirstArgs>(args?: Prisma.SelectSubset<T, AuthUserFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuthUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindFirstOrThrowArgs} args - Arguments to find a AuthUser
     * @example
     * // Get one AuthUser
     * const authUser = await prisma.authUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthUserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuthUserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AuthUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthUsers
     * const authUsers = await prisma.authUser.findMany()
     *
     * // Get first 10 AuthUsers
     * const authUsers = await prisma.authUser.findMany({ take: 10 })
     *
     * // Only select the `auth_user_id`
     * const authUserWithAuth_user_idOnly = await prisma.authUser.findMany({ select: { auth_user_id: true } })
     *
     */
    findMany<T extends AuthUserFindManyArgs>(args?: Prisma.SelectSubset<T, AuthUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AuthUser.
     * @param {AuthUserCreateArgs} args - Arguments to create a AuthUser.
     * @example
     * // Create one AuthUser
     * const AuthUser = await prisma.authUser.create({
     *   data: {
     *     // ... data to create a AuthUser
     *   }
     * })
     *
     */
    create<T extends AuthUserCreateArgs>(args: Prisma.SelectSubset<T, AuthUserCreateArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AuthUsers.
     * @param {AuthUserCreateManyArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthUserCreateManyArgs>(args?: Prisma.SelectSubset<T, AuthUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AuthUsers and returns the data saved in the database.
     * @param {AuthUserCreateManyAndReturnArgs} args - Arguments to create many AuthUsers.
     * @example
     * // Create many AuthUsers
     * const authUser = await prisma.authUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuthUsers and only return the `auth_user_id`
     * const authUserWithAuth_user_idOnly = await prisma.authUser.createManyAndReturn({
     *   select: { auth_user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthUserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuthUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AuthUser.
     * @param {AuthUserDeleteArgs} args - Arguments to delete one AuthUser.
     * @example
     * // Delete one AuthUser
     * const AuthUser = await prisma.authUser.delete({
     *   where: {
     *     // ... filter to delete one AuthUser
     *   }
     * })
     *
     */
    delete<T extends AuthUserDeleteArgs>(args: Prisma.SelectSubset<T, AuthUserDeleteArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AuthUser.
     * @param {AuthUserUpdateArgs} args - Arguments to update one AuthUser.
     * @example
     * // Update one AuthUser
     * const authUser = await prisma.authUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthUserUpdateArgs>(args: Prisma.SelectSubset<T, AuthUserUpdateArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AuthUsers.
     * @param {AuthUserDeleteManyArgs} args - Arguments to filter AuthUsers to delete.
     * @example
     * // Delete a few AuthUsers
     * const { count } = await prisma.authUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthUserDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuthUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthUserUpdateManyArgs>(args: Prisma.SelectSubset<T, AuthUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AuthUsers and returns the data updated in the database.
     * @param {AuthUserUpdateManyAndReturnArgs} args - Arguments to update many AuthUsers.
     * @example
     * // Update many AuthUsers
     * const authUser = await prisma.authUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AuthUsers and only return the `auth_user_id`
     * const authUserWithAuth_user_idOnly = await prisma.authUser.updateManyAndReturn({
     *   select: { auth_user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends AuthUserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuthUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AuthUser.
     * @param {AuthUserUpsertArgs} args - Arguments to update or create a AuthUser.
     * @example
     * // Update or create a AuthUser
     * const authUser = await prisma.authUser.upsert({
     *   create: {
     *     // ... data to create a AuthUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthUser we want to update
     *   }
     * })
     */
    upsert<T extends AuthUserUpsertArgs>(args: Prisma.SelectSubset<T, AuthUserUpsertArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AuthUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserCountArgs} args - Arguments to filter AuthUsers to count.
     * @example
     * // Count the number of AuthUsers
     * const count = await prisma.authUser.count({
     *   where: {
     *     // ... the filter for the AuthUsers we want to count
     *   }
     * })
    **/
    count<T extends AuthUserCountArgs>(args?: Prisma.Subset<T, AuthUserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuthUserCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthUserAggregateArgs>(args: Prisma.Subset<T, AuthUserAggregateArgs>): Prisma.PrismaPromise<GetAuthUserAggregateType<T>>;
    /**
     * Group by AuthUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends AuthUserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuthUserGroupByArgs['orderBy'];
    } : {
        orderBy?: AuthUserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuthUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuthUser model
     */
    readonly fields: AuthUserFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AuthUser.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AuthUserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tokens<T extends Prisma.AuthUser$tokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    profiles<T extends Prisma.AuthUser$profilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$profilesArgs<ExtArgs>>): Prisma.Prisma__UserProfileClient<runtime.Types.Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    customer<T extends Prisma.AuthUser$customerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$customerArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    suppliers<T extends Prisma.AuthUser$suppliersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$suppliersArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    uploadedFiles<T extends Prisma.AuthUser$uploadedFilesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$uploadedFilesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierStatusChanges<T extends Prisma.AuthUser$supplierStatusChangesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$supplierStatusChangesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierTypesCreated<T extends Prisma.AuthUser$supplierTypesCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$supplierTypesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    activityCatCreated<T extends Prisma.AuthUser$activityCatCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$activityCatCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminAssignments<T extends Prisma.AuthUser$adminAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$adminAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminAssignmentsMade<T extends Prisma.AuthUser$adminAssignmentsMadeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$adminAssignmentsMadeArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminOrders<T extends Prisma.AuthUser$adminOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$adminOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auditLogs<T extends Prisma.AuthUser$auditLogsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.AuthUser$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notificationsRelated<T extends Prisma.AuthUser$notificationsRelatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$notificationsRelatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productStatusChanges<T extends Prisma.AuthUser$productStatusChangesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUser$productStatusChangesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the AuthUser model
 */
export interface AuthUserFieldRefs {
    readonly auth_user_id: Prisma.FieldRef<"AuthUser", 'String'>;
    readonly application_id: Prisma.FieldRef<"AuthUser", 'String'>;
    readonly email: Prisma.FieldRef<"AuthUser", 'String'>;
    readonly password_hash: Prisma.FieldRef<"AuthUser", 'String'>;
    readonly phone: Prisma.FieldRef<"AuthUser", 'String'>;
    readonly role: Prisma.FieldRef<"AuthUser", 'UserRole'>;
    readonly email_verified: Prisma.FieldRef<"AuthUser", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"AuthUser", 'Boolean'>;
    readonly is_superadmin: Prisma.FieldRef<"AuthUser", 'Boolean'>;
    readonly last_login_at: Prisma.FieldRef<"AuthUser", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"AuthUser", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"AuthUser", 'DateTime'>;
}
/**
 * AuthUser findUnique
 */
export type AuthUserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter, which AuthUser to fetch.
     */
    where: Prisma.AuthUserWhereUniqueInput;
};
/**
 * AuthUser findUniqueOrThrow
 */
export type AuthUserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter, which AuthUser to fetch.
     */
    where: Prisma.AuthUserWhereUniqueInput;
};
/**
 * AuthUser findFirst
 */
export type AuthUserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: Prisma.AuthUserOrderByWithRelationInput | Prisma.AuthUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuthUsers.
     */
    cursor?: Prisma.AuthUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: Prisma.AuthUserScalarFieldEnum | Prisma.AuthUserScalarFieldEnum[];
};
/**
 * AuthUser findFirstOrThrow
 */
export type AuthUserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter, which AuthUser to fetch.
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: Prisma.AuthUserOrderByWithRelationInput | Prisma.AuthUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuthUsers.
     */
    cursor?: Prisma.AuthUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthUsers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuthUsers.
     */
    distinct?: Prisma.AuthUserScalarFieldEnum | Prisma.AuthUserScalarFieldEnum[];
};
/**
 * AuthUser findMany
 */
export type AuthUserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter, which AuthUsers to fetch.
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthUsers to fetch.
     */
    orderBy?: Prisma.AuthUserOrderByWithRelationInput | Prisma.AuthUserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuthUsers.
     */
    cursor?: Prisma.AuthUserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthUsers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthUsers.
     */
    skip?: number;
    distinct?: Prisma.AuthUserScalarFieldEnum | Prisma.AuthUserScalarFieldEnum[];
};
/**
 * AuthUser create
 */
export type AuthUserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuthUser.
     */
    data: Prisma.XOR<Prisma.AuthUserCreateInput, Prisma.AuthUserUncheckedCreateInput>;
};
/**
 * AuthUser createMany
 */
export type AuthUserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthUsers.
     */
    data: Prisma.AuthUserCreateManyInput | Prisma.AuthUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AuthUser createManyAndReturn
 */
export type AuthUserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * The data used to create many AuthUsers.
     */
    data: Prisma.AuthUserCreateManyInput | Prisma.AuthUserCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AuthUser update
 */
export type AuthUserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuthUser.
     */
    data: Prisma.XOR<Prisma.AuthUserUpdateInput, Prisma.AuthUserUncheckedUpdateInput>;
    /**
     * Choose, which AuthUser to update.
     */
    where: Prisma.AuthUserWhereUniqueInput;
};
/**
 * AuthUser updateMany
 */
export type AuthUserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthUsers.
     */
    data: Prisma.XOR<Prisma.AuthUserUpdateManyMutationInput, Prisma.AuthUserUncheckedUpdateManyInput>;
    /**
     * Filter which AuthUsers to update
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number;
};
/**
 * AuthUser updateManyAndReturn
 */
export type AuthUserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * The data used to update AuthUsers.
     */
    data: Prisma.XOR<Prisma.AuthUserUpdateManyMutationInput, Prisma.AuthUserUncheckedUpdateManyInput>;
    /**
     * Filter which AuthUsers to update
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * Limit how many AuthUsers to update.
     */
    limit?: number;
};
/**
 * AuthUser upsert
 */
export type AuthUserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuthUser to update in case it exists.
     */
    where: Prisma.AuthUserWhereUniqueInput;
    /**
     * In case the AuthUser found by the `where` argument doesn't exist, create a new AuthUser with this data.
     */
    create: Prisma.XOR<Prisma.AuthUserCreateInput, Prisma.AuthUserUncheckedCreateInput>;
    /**
     * In case the AuthUser was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AuthUserUpdateInput, Prisma.AuthUserUncheckedUpdateInput>;
};
/**
 * AuthUser delete
 */
export type AuthUserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
    /**
     * Filter which AuthUser to delete.
     */
    where: Prisma.AuthUserWhereUniqueInput;
};
/**
 * AuthUser deleteMany
 */
export type AuthUserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuthUsers to delete
     */
    where?: Prisma.AuthUserWhereInput;
    /**
     * Limit how many AuthUsers to delete.
     */
    limit?: number;
};
/**
 * AuthUser.tokens
 */
export type AuthUser$tokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    where?: Prisma.AuthTokenWhereInput;
    orderBy?: Prisma.AuthTokenOrderByWithRelationInput | Prisma.AuthTokenOrderByWithRelationInput[];
    cursor?: Prisma.AuthTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuthTokenScalarFieldEnum | Prisma.AuthTokenScalarFieldEnum[];
};
/**
 * AuthUser.profiles
 */
export type AuthUser$profilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: Prisma.UserProfileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: Prisma.UserProfileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserProfileInclude<ExtArgs> | null;
    where?: Prisma.UserProfileWhereInput;
};
/**
 * AuthUser.customer
 */
export type AuthUser$customerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Customer
     */
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
};
/**
 * AuthUser.suppliers
 */
export type AuthUser$suppliersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    where?: Prisma.SupplierWhereInput;
};
/**
 * AuthUser.uploadedFiles
 */
export type AuthUser$uploadedFilesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: Prisma.FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: Prisma.FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileInclude<ExtArgs> | null;
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    cursor?: Prisma.FileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
/**
 * AuthUser.supplierStatusChanges
 */
export type AuthUser$supplierStatusChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    where?: Prisma.SupplierStatusWhereInput;
    orderBy?: Prisma.SupplierStatusOrderByWithRelationInput | Prisma.SupplierStatusOrderByWithRelationInput[];
    cursor?: Prisma.SupplierStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierStatusScalarFieldEnum | Prisma.SupplierStatusScalarFieldEnum[];
};
/**
 * AuthUser.supplierTypesCreated
 */
export type AuthUser$supplierTypesCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierType
     */
    select?: Prisma.SupplierTypeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierType
     */
    omit?: Prisma.SupplierTypeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierTypeInclude<ExtArgs> | null;
    where?: Prisma.SupplierTypeWhereInput;
    orderBy?: Prisma.SupplierTypeOrderByWithRelationInput | Prisma.SupplierTypeOrderByWithRelationInput[];
    cursor?: Prisma.SupplierTypeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierTypeScalarFieldEnum | Prisma.SupplierTypeScalarFieldEnum[];
};
/**
 * AuthUser.activityCatCreated
 */
export type AuthUser$activityCatCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCategory
     */
    select?: Prisma.ActivityCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityCategory
     */
    omit?: Prisma.ActivityCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActivityCategoryInclude<ExtArgs> | null;
    where?: Prisma.ActivityCategoryWhereInput;
    orderBy?: Prisma.ActivityCategoryOrderByWithRelationInput | Prisma.ActivityCategoryOrderByWithRelationInput[];
    cursor?: Prisma.ActivityCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ActivityCategoryScalarFieldEnum | Prisma.ActivityCategoryScalarFieldEnum[];
};
/**
 * AuthUser.adminAssignments
 */
export type AuthUser$adminAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAssignment
     */
    select?: Prisma.AdminAssignmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminAssignment
     */
    omit?: Prisma.AdminAssignmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AdminAssignmentWhereInput;
    orderBy?: Prisma.AdminAssignmentOrderByWithRelationInput | Prisma.AdminAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AdminAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminAssignmentScalarFieldEnum | Prisma.AdminAssignmentScalarFieldEnum[];
};
/**
 * AuthUser.adminAssignmentsMade
 */
export type AuthUser$adminAssignmentsMadeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAssignment
     */
    select?: Prisma.AdminAssignmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminAssignment
     */
    omit?: Prisma.AdminAssignmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AdminAssignmentWhereInput;
    orderBy?: Prisma.AdminAssignmentOrderByWithRelationInput | Prisma.AdminAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AdminAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminAssignmentScalarFieldEnum | Prisma.AdminAssignmentScalarFieldEnum[];
};
/**
 * AuthUser.adminOrders
 */
export type AuthUser$adminOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProductOrder
     */
    select?: Prisma.AdminProductOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminProductOrder
     */
    omit?: Prisma.AdminProductOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminProductOrderInclude<ExtArgs> | null;
    where?: Prisma.AdminProductOrderWhereInput;
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminProductOrderScalarFieldEnum | Prisma.AdminProductOrderScalarFieldEnum[];
};
/**
 * AuthUser.auditLogs
 */
export type AuthUser$auditLogsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: Prisma.AuditLogSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: Prisma.AuditLogOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuditLogInclude<ExtArgs> | null;
    where?: Prisma.AuditLogWhereInput;
    orderBy?: Prisma.AuditLogOrderByWithRelationInput | Prisma.AuditLogOrderByWithRelationInput[];
    cursor?: Prisma.AuditLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AuditLogScalarFieldEnum | Prisma.AuditLogScalarFieldEnum[];
};
/**
 * AuthUser.notifications
 */
export type AuthUser$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * AuthUser.notificationsRelated
 */
export type AuthUser$notificationsRelatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * AuthUser.productStatusChanges
 */
export type AuthUser$productStatusChangesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductStatus
     */
    select?: Prisma.ProductStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductStatus
     */
    omit?: Prisma.ProductStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductStatusInclude<ExtArgs> | null;
    where?: Prisma.ProductStatusWhereInput;
    orderBy?: Prisma.ProductStatusOrderByWithRelationInput | Prisma.ProductStatusOrderByWithRelationInput[];
    cursor?: Prisma.ProductStatusWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductStatusScalarFieldEnum | Prisma.ProductStatusScalarFieldEnum[];
};
/**
 * AuthUser without action
 */
export type AuthUserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthUser
     */
    select?: Prisma.AuthUserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthUser
     */
    omit?: Prisma.AuthUserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthUserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AuthUser.d.ts.map