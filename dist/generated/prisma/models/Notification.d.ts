import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Notification
 *
 */
export type NotificationModel = runtime.Types.Result.DefaultSelection<Prisma.$NotificationPayload>;
export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
export type NotificationAvgAggregateOutputType = {
    notification_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    order_id: number | null;
    admin_order_id: number | null;
    quantity: number | null;
};
export type NotificationSumAggregateOutputType = {
    notification_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    order_id: number | null;
    admin_order_id: number | null;
    quantity: number | null;
};
export type NotificationMinAggregateOutputType = {
    notification_id: number | null;
    recipient_user_id: string | null;
    notification_type: $Enums.NotificationType | null;
    notification_category: $Enums.NotificationCategory | null;
    status: $Enums.NotificationStatus | null;
    title: string | null;
    message: string | null;
    supplier_id: number | null;
    product_id: number | null;
    order_id: number | null;
    admin_order_id: number | null;
    related_user_id: string | null;
    quantity: number | null;
    status_before: string | null;
    status_after: string | null;
    sent_at: Date | null;
    read_at: Date | null;
    created_at: Date | null;
};
export type NotificationMaxAggregateOutputType = {
    notification_id: number | null;
    recipient_user_id: string | null;
    notification_type: $Enums.NotificationType | null;
    notification_category: $Enums.NotificationCategory | null;
    status: $Enums.NotificationStatus | null;
    title: string | null;
    message: string | null;
    supplier_id: number | null;
    product_id: number | null;
    order_id: number | null;
    admin_order_id: number | null;
    related_user_id: string | null;
    quantity: number | null;
    status_before: string | null;
    status_after: string | null;
    sent_at: Date | null;
    read_at: Date | null;
    created_at: Date | null;
};
export type NotificationCountAggregateOutputType = {
    notification_id: number;
    recipient_user_id: number;
    notification_type: number;
    notification_category: number;
    status: number;
    title: number;
    message: number;
    supplier_id: number;
    product_id: number;
    order_id: number;
    admin_order_id: number;
    related_user_id: number;
    quantity: number;
    status_before: number;
    status_after: number;
    metadata: number;
    sent_at: number;
    read_at: number;
    created_at: number;
    _all: number;
};
export type NotificationAvgAggregateInputType = {
    notification_id?: true;
    supplier_id?: true;
    product_id?: true;
    order_id?: true;
    admin_order_id?: true;
    quantity?: true;
};
export type NotificationSumAggregateInputType = {
    notification_id?: true;
    supplier_id?: true;
    product_id?: true;
    order_id?: true;
    admin_order_id?: true;
    quantity?: true;
};
export type NotificationMinAggregateInputType = {
    notification_id?: true;
    recipient_user_id?: true;
    notification_type?: true;
    notification_category?: true;
    status?: true;
    title?: true;
    message?: true;
    supplier_id?: true;
    product_id?: true;
    order_id?: true;
    admin_order_id?: true;
    related_user_id?: true;
    quantity?: true;
    status_before?: true;
    status_after?: true;
    sent_at?: true;
    read_at?: true;
    created_at?: true;
};
export type NotificationMaxAggregateInputType = {
    notification_id?: true;
    recipient_user_id?: true;
    notification_type?: true;
    notification_category?: true;
    status?: true;
    title?: true;
    message?: true;
    supplier_id?: true;
    product_id?: true;
    order_id?: true;
    admin_order_id?: true;
    related_user_id?: true;
    quantity?: true;
    status_before?: true;
    status_after?: true;
    sent_at?: true;
    read_at?: true;
    created_at?: true;
};
export type NotificationCountAggregateInputType = {
    notification_id?: true;
    recipient_user_id?: true;
    notification_type?: true;
    notification_category?: true;
    status?: true;
    title?: true;
    message?: true;
    supplier_id?: true;
    product_id?: true;
    order_id?: true;
    admin_order_id?: true;
    related_user_id?: true;
    quantity?: true;
    status_before?: true;
    status_after?: true;
    metadata?: true;
    sent_at?: true;
    read_at?: true;
    created_at?: true;
    _all?: true;
};
export type NotificationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType;
};
export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
    [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateNotification[P]> : Prisma.GetScalarType<T[P], AggregateNotification[P]>;
};
export type NotificationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithAggregationInput | Prisma.NotificationOrderByWithAggregationInput[];
    by: Prisma.NotificationScalarFieldEnum[] | Prisma.NotificationScalarFieldEnum;
    having?: Prisma.NotificationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: NotificationCountAggregateInputType | true;
    _avg?: NotificationAvgAggregateInputType;
    _sum?: NotificationSumAggregateInputType;
    _min?: NotificationMinAggregateInputType;
    _max?: NotificationMaxAggregateInputType;
};
export type NotificationGroupByOutputType = {
    notification_id: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id: number | null;
    product_id: number | null;
    order_id: number | null;
    admin_order_id: number | null;
    related_user_id: string | null;
    quantity: number | null;
    status_before: string | null;
    status_after: string | null;
    metadata: runtime.JsonValue | null;
    sent_at: Date | null;
    read_at: Date | null;
    created_at: Date;
    _count: NotificationCountAggregateOutputType | null;
    _avg: NotificationAvgAggregateOutputType | null;
    _sum: NotificationSumAggregateOutputType | null;
    _min: NotificationMinAggregateOutputType | null;
    _max: NotificationMaxAggregateOutputType | null;
};
type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<NotificationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], NotificationGroupByOutputType[P]>;
}>>;
export type NotificationWhereInput = {
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    notification_id?: Prisma.IntFilter<"Notification"> | number;
    recipient_user_id?: Prisma.UuidFilter<"Notification"> | string;
    notification_type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFilter<"Notification"> | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus;
    title?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    supplier_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    product_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    admin_order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    related_user_id?: Prisma.UuidNullableFilter<"Notification"> | string | null;
    quantity?: Prisma.IntNullableFilter<"Notification"> | number | null;
    status_before?: Prisma.StringNullableFilter<"Notification"> | string | null;
    status_after?: Prisma.StringNullableFilter<"Notification"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Notification">;
    sent_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    read_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    admin_order?: Prisma.XOR<Prisma.AdminProductOrderNullableScalarRelationFilter, Prisma.AdminProductOrderWhereInput> | null;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    recipient?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    related_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
};
export type NotificationOrderByWithRelationInput = {
    notification_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    notification_type?: Prisma.SortOrder;
    notification_category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    related_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_before?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_after?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    admin_order?: Prisma.AdminProductOrderOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    recipient?: Prisma.AuthUserOrderByWithRelationInput;
    related_user?: Prisma.AuthUserOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
};
export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number;
    AND?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    OR?: Prisma.NotificationWhereInput[];
    NOT?: Prisma.NotificationWhereInput | Prisma.NotificationWhereInput[];
    recipient_user_id?: Prisma.UuidFilter<"Notification"> | string;
    notification_type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFilter<"Notification"> | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus;
    title?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    supplier_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    product_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    admin_order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    related_user_id?: Prisma.UuidNullableFilter<"Notification"> | string | null;
    quantity?: Prisma.IntNullableFilter<"Notification"> | number | null;
    status_before?: Prisma.StringNullableFilter<"Notification"> | string | null;
    status_after?: Prisma.StringNullableFilter<"Notification"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Notification">;
    sent_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    read_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Notification"> | Date | string;
    admin_order?: Prisma.XOR<Prisma.AdminProductOrderNullableScalarRelationFilter, Prisma.AdminProductOrderWhereInput> | null;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
    product?: Prisma.XOR<Prisma.ProductNullableScalarRelationFilter, Prisma.ProductWhereInput> | null;
    recipient?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    related_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierNullableScalarRelationFilter, Prisma.SupplierWhereInput> | null;
}, "notification_id">;
export type NotificationOrderByWithAggregationInput = {
    notification_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    notification_type?: Prisma.SortOrder;
    notification_category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    product_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    related_user_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    quantity?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_before?: Prisma.SortOrderInput | Prisma.SortOrder;
    status_after?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    sent_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    read_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.NotificationCountOrderByAggregateInput;
    _avg?: Prisma.NotificationAvgOrderByAggregateInput;
    _max?: Prisma.NotificationMaxOrderByAggregateInput;
    _min?: Prisma.NotificationMinOrderByAggregateInput;
    _sum?: Prisma.NotificationSumOrderByAggregateInput;
};
export type NotificationScalarWhereWithAggregatesInput = {
    AND?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    OR?: Prisma.NotificationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.NotificationScalarWhereWithAggregatesInput | Prisma.NotificationScalarWhereWithAggregatesInput[];
    notification_id?: Prisma.IntWithAggregatesFilter<"Notification"> | number;
    recipient_user_id?: Prisma.UuidWithAggregatesFilter<"Notification"> | string;
    notification_type?: Prisma.EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryWithAggregatesFilter<"Notification"> | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusWithAggregatesFilter<"Notification"> | $Enums.NotificationStatus;
    title?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    message?: Prisma.StringWithAggregatesFilter<"Notification"> | string;
    supplier_id?: Prisma.IntNullableWithAggregatesFilter<"Notification"> | number | null;
    product_id?: Prisma.IntNullableWithAggregatesFilter<"Notification"> | number | null;
    order_id?: Prisma.IntNullableWithAggregatesFilter<"Notification"> | number | null;
    admin_order_id?: Prisma.IntNullableWithAggregatesFilter<"Notification"> | number | null;
    related_user_id?: Prisma.UuidNullableWithAggregatesFilter<"Notification"> | string | null;
    quantity?: Prisma.IntNullableWithAggregatesFilter<"Notification"> | number | null;
    status_before?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    status_after?: Prisma.StringNullableWithAggregatesFilter<"Notification"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"Notification">;
    sent_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
    read_at?: Prisma.DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Notification"> | Date | string;
};
export type NotificationCreateInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateManyMutationInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationListRelationFilter = {
    every?: Prisma.NotificationWhereInput;
    some?: Prisma.NotificationWhereInput;
    none?: Prisma.NotificationWhereInput;
};
export type NotificationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type NotificationCountOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    notification_type?: Prisma.SortOrder;
    notification_category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrder;
    related_user_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status_before?: Prisma.SortOrder;
    status_after?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type NotificationAvgOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type NotificationMaxOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    notification_type?: Prisma.SortOrder;
    notification_category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrder;
    related_user_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status_before?: Prisma.SortOrder;
    status_after?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type NotificationMinOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    recipient_user_id?: Prisma.SortOrder;
    notification_type?: Prisma.SortOrder;
    notification_category?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrder;
    related_user_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    status_before?: Prisma.SortOrder;
    status_after?: Prisma.SortOrder;
    sent_at?: Prisma.SortOrder;
    read_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type NotificationSumOrderByAggregateInput = {
    notification_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    order_id?: Prisma.SortOrder;
    admin_order_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type NotificationCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput> | Prisma.NotificationCreateWithoutRecipientInput[] | Prisma.NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRecipientInput | Prisma.NotificationCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.NotificationCreateManyRecipientInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationCreateNestedManyWithoutRelated_userInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput> | Prisma.NotificationCreateWithoutRelated_userInput[] | Prisma.NotificationUncheckedCreateWithoutRelated_userInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRelated_userInput | Prisma.NotificationCreateOrConnectWithoutRelated_userInput[];
    createMany?: Prisma.NotificationCreateManyRelated_userInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutRecipientInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput> | Prisma.NotificationCreateWithoutRecipientInput[] | Prisma.NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRecipientInput | Prisma.NotificationCreateOrConnectWithoutRecipientInput[];
    createMany?: Prisma.NotificationCreateManyRecipientInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutRelated_userInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput> | Prisma.NotificationCreateWithoutRelated_userInput[] | Prisma.NotificationUncheckedCreateWithoutRelated_userInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRelated_userInput | Prisma.NotificationCreateOrConnectWithoutRelated_userInput[];
    createMany?: Prisma.NotificationCreateManyRelated_userInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput> | Prisma.NotificationCreateWithoutRecipientInput[] | Prisma.NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRecipientInput | Prisma.NotificationCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutRecipientInput | Prisma.NotificationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.NotificationCreateManyRecipientInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutRecipientInput | Prisma.NotificationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutRecipientInput | Prisma.NotificationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUpdateManyWithoutRelated_userNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput> | Prisma.NotificationCreateWithoutRelated_userInput[] | Prisma.NotificationUncheckedCreateWithoutRelated_userInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRelated_userInput | Prisma.NotificationCreateOrConnectWithoutRelated_userInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutRelated_userInput | Prisma.NotificationUpsertWithWhereUniqueWithoutRelated_userInput[];
    createMany?: Prisma.NotificationCreateManyRelated_userInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutRelated_userInput | Prisma.NotificationUpdateWithWhereUniqueWithoutRelated_userInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutRelated_userInput | Prisma.NotificationUpdateManyWithWhereWithoutRelated_userInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutRecipientNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput> | Prisma.NotificationCreateWithoutRecipientInput[] | Prisma.NotificationUncheckedCreateWithoutRecipientInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRecipientInput | Prisma.NotificationCreateOrConnectWithoutRecipientInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutRecipientInput | Prisma.NotificationUpsertWithWhereUniqueWithoutRecipientInput[];
    createMany?: Prisma.NotificationCreateManyRecipientInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutRecipientInput | Prisma.NotificationUpdateWithWhereUniqueWithoutRecipientInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutRecipientInput | Prisma.NotificationUpdateManyWithWhereWithoutRecipientInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutRelated_userNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput> | Prisma.NotificationCreateWithoutRelated_userInput[] | Prisma.NotificationUncheckedCreateWithoutRelated_userInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutRelated_userInput | Prisma.NotificationCreateOrConnectWithoutRelated_userInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutRelated_userInput | Prisma.NotificationUpsertWithWhereUniqueWithoutRelated_userInput[];
    createMany?: Prisma.NotificationCreateManyRelated_userInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutRelated_userInput | Prisma.NotificationUpdateWithWhereUniqueWithoutRelated_userInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutRelated_userInput | Prisma.NotificationUpdateManyWithWhereWithoutRelated_userInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput> | Prisma.NotificationCreateWithoutSupplierInput[] | Prisma.NotificationUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSupplierInput | Prisma.NotificationCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.NotificationCreateManySupplierInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput> | Prisma.NotificationCreateWithoutSupplierInput[] | Prisma.NotificationUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSupplierInput | Prisma.NotificationCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.NotificationCreateManySupplierInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput> | Prisma.NotificationCreateWithoutSupplierInput[] | Prisma.NotificationUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSupplierInput | Prisma.NotificationCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutSupplierInput | Prisma.NotificationUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.NotificationCreateManySupplierInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutSupplierInput | Prisma.NotificationUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutSupplierInput | Prisma.NotificationUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput> | Prisma.NotificationCreateWithoutSupplierInput[] | Prisma.NotificationUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutSupplierInput | Prisma.NotificationCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutSupplierInput | Prisma.NotificationUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.NotificationCreateManySupplierInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutSupplierInput | Prisma.NotificationUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutSupplierInput | Prisma.NotificationUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput> | Prisma.NotificationCreateWithoutProductInput[] | Prisma.NotificationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutProductInput | Prisma.NotificationCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.NotificationCreateManyProductInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput> | Prisma.NotificationCreateWithoutProductInput[] | Prisma.NotificationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutProductInput | Prisma.NotificationCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.NotificationCreateManyProductInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput> | Prisma.NotificationCreateWithoutProductInput[] | Prisma.NotificationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutProductInput | Prisma.NotificationCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutProductInput | Prisma.NotificationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.NotificationCreateManyProductInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutProductInput | Prisma.NotificationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutProductInput | Prisma.NotificationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput> | Prisma.NotificationCreateWithoutProductInput[] | Prisma.NotificationUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutProductInput | Prisma.NotificationCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutProductInput | Prisma.NotificationUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.NotificationCreateManyProductInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutProductInput | Prisma.NotificationUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutProductInput | Prisma.NotificationUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput> | Prisma.NotificationCreateWithoutOrderInput[] | Prisma.NotificationUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutOrderInput | Prisma.NotificationCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.NotificationCreateManyOrderInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput> | Prisma.NotificationCreateWithoutOrderInput[] | Prisma.NotificationUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutOrderInput | Prisma.NotificationCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.NotificationCreateManyOrderInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput> | Prisma.NotificationCreateWithoutOrderInput[] | Prisma.NotificationUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutOrderInput | Prisma.NotificationCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutOrderInput | Prisma.NotificationUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.NotificationCreateManyOrderInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutOrderInput | Prisma.NotificationUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutOrderInput | Prisma.NotificationUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput> | Prisma.NotificationCreateWithoutOrderInput[] | Prisma.NotificationUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutOrderInput | Prisma.NotificationCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutOrderInput | Prisma.NotificationUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.NotificationCreateManyOrderInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutOrderInput | Prisma.NotificationUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutOrderInput | Prisma.NotificationUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationCreateNestedManyWithoutAdmin_orderInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput> | Prisma.NotificationCreateWithoutAdmin_orderInput[] | Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput | Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput[];
    createMany?: Prisma.NotificationCreateManyAdmin_orderInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUncheckedCreateNestedManyWithoutAdmin_orderInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput> | Prisma.NotificationCreateWithoutAdmin_orderInput[] | Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput | Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput[];
    createMany?: Prisma.NotificationCreateManyAdmin_orderInputEnvelope;
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
};
export type NotificationUpdateManyWithoutAdmin_orderNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput> | Prisma.NotificationCreateWithoutAdmin_orderInput[] | Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput | Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutAdmin_orderInput | Prisma.NotificationUpsertWithWhereUniqueWithoutAdmin_orderInput[];
    createMany?: Prisma.NotificationCreateManyAdmin_orderInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutAdmin_orderInput | Prisma.NotificationUpdateWithWhereUniqueWithoutAdmin_orderInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutAdmin_orderInput | Prisma.NotificationUpdateManyWithWhereWithoutAdmin_orderInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type NotificationUncheckedUpdateManyWithoutAdmin_orderNestedInput = {
    create?: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput> | Prisma.NotificationCreateWithoutAdmin_orderInput[] | Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput[];
    connectOrCreate?: Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput | Prisma.NotificationCreateOrConnectWithoutAdmin_orderInput[];
    upsert?: Prisma.NotificationUpsertWithWhereUniqueWithoutAdmin_orderInput | Prisma.NotificationUpsertWithWhereUniqueWithoutAdmin_orderInput[];
    createMany?: Prisma.NotificationCreateManyAdmin_orderInputEnvelope;
    set?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    disconnect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    delete?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    connect?: Prisma.NotificationWhereUniqueInput | Prisma.NotificationWhereUniqueInput[];
    update?: Prisma.NotificationUpdateWithWhereUniqueWithoutAdmin_orderInput | Prisma.NotificationUpdateWithWhereUniqueWithoutAdmin_orderInput[];
    updateMany?: Prisma.NotificationUpdateManyWithWhereWithoutAdmin_orderInput | Prisma.NotificationUpdateManyWithWhereWithoutAdmin_orderInput[];
    deleteMany?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
};
export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType;
};
export type EnumNotificationCategoryFieldUpdateOperationsInput = {
    set?: $Enums.NotificationCategory;
};
export type EnumNotificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.NotificationStatus;
};
export type NotificationCreateWithoutRecipientInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutRecipientInput = {
    notification_id?: number;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutRecipientInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput>;
};
export type NotificationCreateManyRecipientInputEnvelope = {
    data: Prisma.NotificationCreateManyRecipientInput | Prisma.NotificationCreateManyRecipientInput[];
    skipDuplicates?: boolean;
};
export type NotificationCreateWithoutRelated_userInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutRelated_userInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutRelated_userInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput>;
};
export type NotificationCreateManyRelated_userInputEnvelope = {
    data: Prisma.NotificationCreateManyRelated_userInput | Prisma.NotificationCreateManyRelated_userInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutRecipientInput, Prisma.NotificationUncheckedUpdateWithoutRecipientInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutRecipientInput, Prisma.NotificationUncheckedCreateWithoutRecipientInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutRecipientInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutRecipientInput, Prisma.NotificationUncheckedUpdateWithoutRecipientInput>;
};
export type NotificationUpdateManyWithWhereWithoutRecipientInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutRecipientInput>;
};
export type NotificationScalarWhereInput = {
    AND?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    OR?: Prisma.NotificationScalarWhereInput[];
    NOT?: Prisma.NotificationScalarWhereInput | Prisma.NotificationScalarWhereInput[];
    notification_id?: Prisma.IntFilter<"Notification"> | number;
    recipient_user_id?: Prisma.UuidFilter<"Notification"> | string;
    notification_type?: Prisma.EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFilter<"Notification"> | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFilter<"Notification"> | $Enums.NotificationStatus;
    title?: Prisma.StringFilter<"Notification"> | string;
    message?: Prisma.StringFilter<"Notification"> | string;
    supplier_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    product_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    admin_order_id?: Prisma.IntNullableFilter<"Notification"> | number | null;
    related_user_id?: Prisma.UuidNullableFilter<"Notification"> | string | null;
    quantity?: Prisma.IntNullableFilter<"Notification"> | number | null;
    status_before?: Prisma.StringNullableFilter<"Notification"> | string | null;
    status_after?: Prisma.StringNullableFilter<"Notification"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"Notification">;
    sent_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    read_at?: Prisma.DateTimeNullableFilter<"Notification"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"Notification"> | Date | string;
};
export type NotificationUpsertWithWhereUniqueWithoutRelated_userInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutRelated_userInput, Prisma.NotificationUncheckedUpdateWithoutRelated_userInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutRelated_userInput, Prisma.NotificationUncheckedCreateWithoutRelated_userInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutRelated_userInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutRelated_userInput, Prisma.NotificationUncheckedUpdateWithoutRelated_userInput>;
};
export type NotificationUpdateManyWithWhereWithoutRelated_userInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutRelated_userInput>;
};
export type NotificationCreateWithoutSupplierInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
};
export type NotificationUncheckedCreateWithoutSupplierInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutSupplierInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput>;
};
export type NotificationCreateManySupplierInputEnvelope = {
    data: Prisma.NotificationCreateManySupplierInput | Prisma.NotificationCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutSupplierInput, Prisma.NotificationUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutSupplierInput, Prisma.NotificationUncheckedCreateWithoutSupplierInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutSupplierInput, Prisma.NotificationUncheckedUpdateWithoutSupplierInput>;
};
export type NotificationUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutSupplierInput>;
};
export type NotificationCreateWithoutProductInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutProductInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutProductInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput>;
};
export type NotificationCreateManyProductInputEnvelope = {
    data: Prisma.NotificationCreateManyProductInput | Prisma.NotificationCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutProductInput, Prisma.NotificationUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutProductInput, Prisma.NotificationUncheckedCreateWithoutProductInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutProductInput, Prisma.NotificationUncheckedUpdateWithoutProductInput>;
};
export type NotificationUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutProductInput>;
};
export type NotificationCreateWithoutOrderInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    admin_order?: Prisma.AdminProductOrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutOrderInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutOrderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput>;
};
export type NotificationCreateManyOrderInputEnvelope = {
    data: Prisma.NotificationCreateManyOrderInput | Prisma.NotificationCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutOrderInput, Prisma.NotificationUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutOrderInput, Prisma.NotificationUncheckedCreateWithoutOrderInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutOrderInput, Prisma.NotificationUncheckedUpdateWithoutOrderInput>;
};
export type NotificationUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutOrderInput>;
};
export type NotificationCreateWithoutAdmin_orderInput = {
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
    order?: Prisma.OrderCreateNestedOneWithoutNotificationsInput;
    product?: Prisma.ProductCreateNestedOneWithoutNotificationsInput;
    recipient: Prisma.AuthUserCreateNestedOneWithoutNotificationsInput;
    related_user?: Prisma.AuthUserCreateNestedOneWithoutNotificationsRelatedInput;
    supplier?: Prisma.SupplierCreateNestedOneWithoutNotificationsInput;
};
export type NotificationUncheckedCreateWithoutAdmin_orderInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateOrConnectWithoutAdmin_orderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput>;
};
export type NotificationCreateManyAdmin_orderInputEnvelope = {
    data: Prisma.NotificationCreateManyAdmin_orderInput | Prisma.NotificationCreateManyAdmin_orderInput[];
    skipDuplicates?: boolean;
};
export type NotificationUpsertWithWhereUniqueWithoutAdmin_orderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    update: Prisma.XOR<Prisma.NotificationUpdateWithoutAdmin_orderInput, Prisma.NotificationUncheckedUpdateWithoutAdmin_orderInput>;
    create: Prisma.XOR<Prisma.NotificationCreateWithoutAdmin_orderInput, Prisma.NotificationUncheckedCreateWithoutAdmin_orderInput>;
};
export type NotificationUpdateWithWhereUniqueWithoutAdmin_orderInput = {
    where: Prisma.NotificationWhereUniqueInput;
    data: Prisma.XOR<Prisma.NotificationUpdateWithoutAdmin_orderInput, Prisma.NotificationUncheckedUpdateWithoutAdmin_orderInput>;
};
export type NotificationUpdateManyWithWhereWithoutAdmin_orderInput = {
    where: Prisma.NotificationScalarWhereInput;
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyWithoutAdmin_orderInput>;
};
export type NotificationCreateManyRecipientInput = {
    notification_id?: number;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationCreateManyRelated_userInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateWithoutRecipientInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutRecipientInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutRecipientInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUpdateWithoutRelated_userInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutRelated_userInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutRelated_userInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManySupplierInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    product_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateWithoutSupplierInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
};
export type NotificationUncheckedUpdateWithoutSupplierInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutSupplierInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyProductInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    order_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateWithoutProductInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutProductInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutProductInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyOrderInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    admin_order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateWithoutOrderInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    admin_order?: Prisma.AdminProductOrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutOrderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutOrderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    admin_order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationCreateManyAdmin_orderInput = {
    notification_id?: number;
    recipient_user_id: string;
    notification_type: $Enums.NotificationType;
    notification_category: $Enums.NotificationCategory;
    status?: $Enums.NotificationStatus;
    title: string;
    message: string;
    supplier_id?: number | null;
    product_id?: number | null;
    order_id?: number | null;
    related_user_id?: string | null;
    quantity?: number | null;
    status_before?: string | null;
    status_after?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Date | string | null;
    read_at?: Date | string | null;
    created_at?: Date | string;
};
export type NotificationUpdateWithoutAdmin_orderInput = {
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.OrderUpdateOneWithoutNotificationsNestedInput;
    product?: Prisma.ProductUpdateOneWithoutNotificationsNestedInput;
    recipient?: Prisma.AuthUserUpdateOneRequiredWithoutNotificationsNestedInput;
    related_user?: Prisma.AuthUserUpdateOneWithoutNotificationsRelatedNestedInput;
    supplier?: Prisma.SupplierUpdateOneWithoutNotificationsNestedInput;
};
export type NotificationUncheckedUpdateWithoutAdmin_orderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationUncheckedUpdateManyWithoutAdmin_orderInput = {
    notification_id?: Prisma.IntFieldUpdateOperationsInput | number;
    recipient_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    notification_type?: Prisma.EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType;
    notification_category?: Prisma.EnumNotificationCategoryFieldUpdateOperationsInput | $Enums.NotificationCategory;
    status?: Prisma.EnumNotificationStatusFieldUpdateOperationsInput | $Enums.NotificationStatus;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    product_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    order_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    related_user_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    quantity?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    status_before?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status_after?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    sent_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    read_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type NotificationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    recipient_user_id?: boolean;
    notification_type?: boolean;
    notification_category?: boolean;
    status?: boolean;
    title?: boolean;
    message?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    order_id?: boolean;
    admin_order_id?: boolean;
    related_user_id?: boolean;
    quantity?: boolean;
    status_before?: boolean;
    status_after?: boolean;
    metadata?: boolean;
    sent_at?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    recipient_user_id?: boolean;
    notification_type?: boolean;
    notification_category?: boolean;
    status?: boolean;
    title?: boolean;
    message?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    order_id?: boolean;
    admin_order_id?: boolean;
    related_user_id?: boolean;
    quantity?: boolean;
    status_before?: boolean;
    status_after?: boolean;
    metadata?: boolean;
    sent_at?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    notification_id?: boolean;
    recipient_user_id?: boolean;
    notification_type?: boolean;
    notification_category?: boolean;
    status?: boolean;
    title?: boolean;
    message?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    order_id?: boolean;
    admin_order_id?: boolean;
    related_user_id?: boolean;
    quantity?: boolean;
    status_before?: boolean;
    status_after?: boolean;
    metadata?: boolean;
    sent_at?: boolean;
    read_at?: boolean;
    created_at?: boolean;
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
}, ExtArgs["result"]["notification"]>;
export type NotificationSelectScalar = {
    notification_id?: boolean;
    recipient_user_id?: boolean;
    notification_type?: boolean;
    notification_category?: boolean;
    status?: boolean;
    title?: boolean;
    message?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    order_id?: boolean;
    admin_order_id?: boolean;
    related_user_id?: boolean;
    quantity?: boolean;
    status_before?: boolean;
    status_after?: boolean;
    metadata?: boolean;
    sent_at?: boolean;
    read_at?: boolean;
    created_at?: boolean;
};
export type NotificationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"notification_id" | "recipient_user_id" | "notification_type" | "notification_category" | "status" | "title" | "message" | "supplier_id" | "product_id" | "order_id" | "admin_order_id" | "related_user_id" | "quantity" | "status_before" | "status_after" | "metadata" | "sent_at" | "read_at" | "created_at", ExtArgs["result"]["notification"]>;
export type NotificationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
};
export type NotificationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
};
export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin_order?: boolean | Prisma.Notification$admin_orderArgs<ExtArgs>;
    order?: boolean | Prisma.Notification$orderArgs<ExtArgs>;
    product?: boolean | Prisma.Notification$productArgs<ExtArgs>;
    recipient?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    related_user?: boolean | Prisma.Notification$related_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.Notification$supplierArgs<ExtArgs>;
};
export type $NotificationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Notification";
    objects: {
        admin_order: Prisma.$AdminProductOrderPayload<ExtArgs> | null;
        order: Prisma.$OrderPayload<ExtArgs> | null;
        product: Prisma.$ProductPayload<ExtArgs> | null;
        recipient: Prisma.$AuthUserPayload<ExtArgs>;
        related_user: Prisma.$AuthUserPayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        notification_id: number;
        recipient_user_id: string;
        notification_type: $Enums.NotificationType;
        notification_category: $Enums.NotificationCategory;
        status: $Enums.NotificationStatus;
        title: string;
        message: string;
        supplier_id: number | null;
        product_id: number | null;
        order_id: number | null;
        admin_order_id: number | null;
        related_user_id: string | null;
        quantity: number | null;
        status_before: string | null;
        status_after: string | null;
        metadata: runtime.JsonValue | null;
        sent_at: Date | null;
        read_at: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["notification"]>;
    composites: {};
};
export type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$NotificationPayload, S>;
export type NotificationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: NotificationCountAggregateInputType | true;
};
export interface NotificationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Notification'];
        meta: {
            name: 'Notification';
        };
    };
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     *
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     *
     * // Only select the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.findMany({ select: { notification_id: true } })
     *
     */
    findMany<T extends NotificationFindManyArgs>(args?: Prisma.SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     *
     */
    create<T extends NotificationCreateArgs>(args: Prisma.SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends NotificationCreateManyArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     *
     */
    delete<T extends NotificationDeleteArgs>(args: Prisma.SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends NotificationUpdateArgs>(args: Prisma.SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: Prisma.SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.updateManyAndReturn({
     *   select: { notification_id: true },
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: Prisma.SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma.Prisma__NotificationClient<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(args?: Prisma.Subset<T, NotificationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], NotificationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Prisma.Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>;
    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
    groupBy<T extends NotificationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: NotificationGroupByArgs['orderBy'];
    } : {
        orderBy?: NotificationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Notification model
     */
    readonly fields: NotificationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Notification.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin_order<T extends Prisma.Notification$admin_orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$admin_orderArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.Notification$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.Notification$productArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$productArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    recipient<T extends Prisma.AuthUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    related_user<T extends Prisma.Notification$related_userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$related_userArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.Notification$supplierArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Notification$supplierArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Notification model
 */
export interface NotificationFieldRefs {
    readonly notification_id: Prisma.FieldRef<"Notification", 'Int'>;
    readonly recipient_user_id: Prisma.FieldRef<"Notification", 'String'>;
    readonly notification_type: Prisma.FieldRef<"Notification", 'NotificationType'>;
    readonly notification_category: Prisma.FieldRef<"Notification", 'NotificationCategory'>;
    readonly status: Prisma.FieldRef<"Notification", 'NotificationStatus'>;
    readonly title: Prisma.FieldRef<"Notification", 'String'>;
    readonly message: Prisma.FieldRef<"Notification", 'String'>;
    readonly supplier_id: Prisma.FieldRef<"Notification", 'Int'>;
    readonly product_id: Prisma.FieldRef<"Notification", 'Int'>;
    readonly order_id: Prisma.FieldRef<"Notification", 'Int'>;
    readonly admin_order_id: Prisma.FieldRef<"Notification", 'Int'>;
    readonly related_user_id: Prisma.FieldRef<"Notification", 'String'>;
    readonly quantity: Prisma.FieldRef<"Notification", 'Int'>;
    readonly status_before: Prisma.FieldRef<"Notification", 'String'>;
    readonly status_after: Prisma.FieldRef<"Notification", 'String'>;
    readonly metadata: Prisma.FieldRef<"Notification", 'Json'>;
    readonly sent_at: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly read_at: Prisma.FieldRef<"Notification", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"Notification", 'DateTime'>;
}
/**
 * Notification findUnique
 */
export type NotificationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Notification to fetch.
     */
    where: Prisma.NotificationWhereUniqueInput;
};
/**
 * Notification findUniqueOrThrow
 */
export type NotificationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Notification to fetch.
     */
    where: Prisma.NotificationWhereUniqueInput;
};
/**
 * Notification findFirst
 */
export type NotificationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Notification to fetch.
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: Prisma.NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * Notification findFirstOrThrow
 */
export type NotificationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Notification to fetch.
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Notifications.
     */
    cursor?: Prisma.NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Notifications.
     */
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * Notification findMany
 */
export type NotificationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Notifications to fetch.
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Notifications to fetch.
     */
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Notifications.
     */
    cursor?: Prisma.NotificationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Notifications.
     */
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * Notification create
 */
export type NotificationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Notification.
     */
    data: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
};
/**
 * Notification createMany
 */
export type NotificationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Notification createManyAndReturn
 */
export type NotificationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * The data used to create many Notifications.
     */
    data: Prisma.NotificationCreateManyInput | Prisma.NotificationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Notification update
 */
export type NotificationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Notification.
     */
    data: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
    /**
     * Choose, which Notification to update.
     */
    where: Prisma.NotificationWhereUniqueInput;
};
/**
 * Notification updateMany
 */
export type NotificationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    /**
     * Filter which Notifications to update
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
};
/**
 * Notification updateManyAndReturn
 */
export type NotificationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * The data used to update Notifications.
     */
    data: Prisma.XOR<Prisma.NotificationUpdateManyMutationInput, Prisma.NotificationUncheckedUpdateManyInput>;
    /**
     * Filter which Notifications to update
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * Limit how many Notifications to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Notification upsert
 */
export type NotificationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: Prisma.NotificationWhereUniqueInput;
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: Prisma.XOR<Prisma.NotificationCreateInput, Prisma.NotificationUncheckedCreateInput>;
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.NotificationUpdateInput, Prisma.NotificationUncheckedUpdateInput>;
};
/**
 * Notification delete
 */
export type NotificationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Notification to delete.
     */
    where: Prisma.NotificationWhereUniqueInput;
};
/**
 * Notification deleteMany
 */
export type NotificationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: Prisma.NotificationWhereInput;
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number;
};
/**
 * Notification.admin_order
 */
export type Notification$admin_orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Notification.order
 */
export type Notification$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
/**
 * Notification.product
 */
export type Notification$productArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
};
/**
 * Notification.related_user
 */
export type Notification$related_userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.AuthUserWhereInput;
};
/**
 * Notification.supplier
 */
export type Notification$supplierArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Notification without action
 */
export type NotificationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Notification.d.ts.map