import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model AdminProductOrder
 *
 */
export type AdminProductOrderModel = runtime.Types.Result.DefaultSelection<Prisma.$AdminProductOrderPayload>;
export type AggregateAdminProductOrder = {
    _count: AdminProductOrderCountAggregateOutputType | null;
    _avg: AdminProductOrderAvgAggregateOutputType | null;
    _sum: AdminProductOrderSumAggregateOutputType | null;
    _min: AdminProductOrderMinAggregateOutputType | null;
    _max: AdminProductOrderMaxAggregateOutputType | null;
};
export type AdminProductOrderAvgAggregateOutputType = {
    admin_order_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type AdminProductOrderSumAggregateOutputType = {
    admin_order_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    quantity: number | null;
};
export type AdminProductOrderMinAggregateOutputType = {
    admin_order_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    quantity: number | null;
    ordered_by: string | null;
    order_note: string | null;
    created_at: Date | null;
};
export type AdminProductOrderMaxAggregateOutputType = {
    admin_order_id: number | null;
    supplier_id: number | null;
    product_id: number | null;
    quantity: number | null;
    ordered_by: string | null;
    order_note: string | null;
    created_at: Date | null;
};
export type AdminProductOrderCountAggregateOutputType = {
    admin_order_id: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    ordered_by: number;
    order_note: number;
    created_at: number;
    _all: number;
};
export type AdminProductOrderAvgAggregateInputType = {
    admin_order_id?: true;
    supplier_id?: true;
    product_id?: true;
    quantity?: true;
};
export type AdminProductOrderSumAggregateInputType = {
    admin_order_id?: true;
    supplier_id?: true;
    product_id?: true;
    quantity?: true;
};
export type AdminProductOrderMinAggregateInputType = {
    admin_order_id?: true;
    supplier_id?: true;
    product_id?: true;
    quantity?: true;
    ordered_by?: true;
    order_note?: true;
    created_at?: true;
};
export type AdminProductOrderMaxAggregateInputType = {
    admin_order_id?: true;
    supplier_id?: true;
    product_id?: true;
    quantity?: true;
    ordered_by?: true;
    order_note?: true;
    created_at?: true;
};
export type AdminProductOrderCountAggregateInputType = {
    admin_order_id?: true;
    supplier_id?: true;
    product_id?: true;
    quantity?: true;
    ordered_by?: true;
    order_note?: true;
    created_at?: true;
    _all?: true;
};
export type AdminProductOrderAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProductOrder to aggregate.
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminProductOrders to fetch.
     */
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminProductOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminProductOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdminProductOrders
    **/
    _count?: true | AdminProductOrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AdminProductOrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AdminProductOrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AdminProductOrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AdminProductOrderMaxAggregateInputType;
};
export type GetAdminProductOrderAggregateType<T extends AdminProductOrderAggregateArgs> = {
    [P in keyof T & keyof AggregateAdminProductOrder]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdminProductOrder[P]> : Prisma.GetScalarType<T[P], AggregateAdminProductOrder[P]>;
};
export type AdminProductOrderGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminProductOrderWhereInput;
    orderBy?: Prisma.AdminProductOrderOrderByWithAggregationInput | Prisma.AdminProductOrderOrderByWithAggregationInput[];
    by: Prisma.AdminProductOrderScalarFieldEnum[] | Prisma.AdminProductOrderScalarFieldEnum;
    having?: Prisma.AdminProductOrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminProductOrderCountAggregateInputType | true;
    _avg?: AdminProductOrderAvgAggregateInputType;
    _sum?: AdminProductOrderSumAggregateInputType;
    _min?: AdminProductOrderMinAggregateInputType;
    _max?: AdminProductOrderMaxAggregateInputType;
};
export type AdminProductOrderGroupByOutputType = {
    admin_order_id: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note: string | null;
    created_at: Date;
    _count: AdminProductOrderCountAggregateOutputType | null;
    _avg: AdminProductOrderAvgAggregateOutputType | null;
    _sum: AdminProductOrderSumAggregateOutputType | null;
    _min: AdminProductOrderMinAggregateOutputType | null;
    _max: AdminProductOrderMaxAggregateOutputType | null;
};
type GetAdminProductOrderGroupByPayload<T extends AdminProductOrderGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminProductOrderGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminProductOrderGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminProductOrderGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminProductOrderGroupByOutputType[P]>;
}>>;
export type AdminProductOrderWhereInput = {
    AND?: Prisma.AdminProductOrderWhereInput | Prisma.AdminProductOrderWhereInput[];
    OR?: Prisma.AdminProductOrderWhereInput[];
    NOT?: Prisma.AdminProductOrderWhereInput | Prisma.AdminProductOrderWhereInput[];
    admin_order_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    supplier_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    product_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    quantity?: Prisma.IntFilter<"AdminProductOrder"> | number;
    ordered_by?: Prisma.UuidFilter<"AdminProductOrder"> | string;
    order_note?: Prisma.StringNullableFilter<"AdminProductOrder"> | string | null;
    created_at?: Prisma.DateTimeFilter<"AdminProductOrder"> | Date | string;
    ordered_by_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    notifications?: Prisma.NotificationListRelationFilter;
};
export type AdminProductOrderOrderByWithRelationInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    ordered_by?: Prisma.SortOrder;
    order_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    ordered_by_user?: Prisma.AuthUserOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
};
export type AdminProductOrderWhereUniqueInput = Prisma.AtLeast<{
    admin_order_id?: number;
    AND?: Prisma.AdminProductOrderWhereInput | Prisma.AdminProductOrderWhereInput[];
    OR?: Prisma.AdminProductOrderWhereInput[];
    NOT?: Prisma.AdminProductOrderWhereInput | Prisma.AdminProductOrderWhereInput[];
    supplier_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    product_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    quantity?: Prisma.IntFilter<"AdminProductOrder"> | number;
    ordered_by?: Prisma.UuidFilter<"AdminProductOrder"> | string;
    order_note?: Prisma.StringNullableFilter<"AdminProductOrder"> | string | null;
    created_at?: Prisma.DateTimeFilter<"AdminProductOrder"> | Date | string;
    ordered_by_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    notifications?: Prisma.NotificationListRelationFilter;
}, "admin_order_id">;
export type AdminProductOrderOrderByWithAggregationInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    ordered_by?: Prisma.SortOrder;
    order_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.AdminProductOrderCountOrderByAggregateInput;
    _avg?: Prisma.AdminProductOrderAvgOrderByAggregateInput;
    _max?: Prisma.AdminProductOrderMaxOrderByAggregateInput;
    _min?: Prisma.AdminProductOrderMinOrderByAggregateInput;
    _sum?: Prisma.AdminProductOrderSumOrderByAggregateInput;
};
export type AdminProductOrderScalarWhereWithAggregatesInput = {
    AND?: Prisma.AdminProductOrderScalarWhereWithAggregatesInput | Prisma.AdminProductOrderScalarWhereWithAggregatesInput[];
    OR?: Prisma.AdminProductOrderScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AdminProductOrderScalarWhereWithAggregatesInput | Prisma.AdminProductOrderScalarWhereWithAggregatesInput[];
    admin_order_id?: Prisma.IntWithAggregatesFilter<"AdminProductOrder"> | number;
    supplier_id?: Prisma.IntWithAggregatesFilter<"AdminProductOrder"> | number;
    product_id?: Prisma.IntWithAggregatesFilter<"AdminProductOrder"> | number;
    quantity?: Prisma.IntWithAggregatesFilter<"AdminProductOrder"> | number;
    ordered_by?: Prisma.UuidWithAggregatesFilter<"AdminProductOrder"> | string;
    order_note?: Prisma.StringNullableWithAggregatesFilter<"AdminProductOrder"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AdminProductOrder"> | Date | string;
};
export type AdminProductOrderCreateInput = {
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    ordered_by_user: Prisma.AuthUserCreateNestedOneWithoutAdminOrdersInput;
    product: Prisma.ProductCreateNestedOneWithoutAdminProductOrdersInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutAdminProductOrdersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderUncheckedCreateInput = {
    admin_order_id?: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderUpdateInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordered_by_user?: Prisma.AuthUserUpdateOneRequiredWithoutAdminOrdersNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderCreateManyInput = {
    admin_order_id?: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
};
export type AdminProductOrderUpdateManyMutationInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminProductOrderUncheckedUpdateManyInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminProductOrderListRelationFilter = {
    every?: Prisma.AdminProductOrderWhereInput;
    some?: Prisma.AdminProductOrderWhereInput;
    none?: Prisma.AdminProductOrderWhereInput;
};
export type AdminProductOrderOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AdminProductOrderCountOrderByAggregateInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    ordered_by?: Prisma.SortOrder;
    order_note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AdminProductOrderAvgOrderByAggregateInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type AdminProductOrderMaxOrderByAggregateInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    ordered_by?: Prisma.SortOrder;
    order_note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AdminProductOrderMinOrderByAggregateInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    ordered_by?: Prisma.SortOrder;
    order_note?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AdminProductOrderSumOrderByAggregateInput = {
    admin_order_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
};
export type AdminProductOrderNullableScalarRelationFilter = {
    is?: Prisma.AdminProductOrderWhereInput | null;
    isNot?: Prisma.AdminProductOrderWhereInput | null;
};
export type AdminProductOrderCreateNestedManyWithoutOrdered_by_userInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput> | Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput | Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput[];
    createMany?: Prisma.AdminProductOrderCreateManyOrdered_by_userInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUncheckedCreateNestedManyWithoutOrdered_by_userInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput> | Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput | Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput[];
    createMany?: Prisma.AdminProductOrderCreateManyOrdered_by_userInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUpdateManyWithoutOrdered_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput> | Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput | Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutOrdered_by_userInput[];
    createMany?: Prisma.AdminProductOrderCreateManyOrdered_by_userInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutOrdered_by_userInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutOrdered_by_userInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput> | Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput | Prisma.AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutOrdered_by_userInput[];
    createMany?: Prisma.AdminProductOrderCreateManyOrdered_by_userInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutOrdered_by_userInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutOrdered_by_userInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutOrdered_by_userInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput> | Prisma.AdminProductOrderCreateWithoutSupplierInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput | Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.AdminProductOrderCreateManySupplierInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput> | Prisma.AdminProductOrderCreateWithoutSupplierInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput | Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.AdminProductOrderCreateManySupplierInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput> | Prisma.AdminProductOrderCreateWithoutSupplierInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput | Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutSupplierInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.AdminProductOrderCreateManySupplierInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutSupplierInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutSupplierInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput> | Prisma.AdminProductOrderCreateWithoutSupplierInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput | Prisma.AdminProductOrderCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutSupplierInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.AdminProductOrderCreateManySupplierInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutSupplierInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutSupplierInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput> | Prisma.AdminProductOrderCreateWithoutProductInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutProductInput | Prisma.AdminProductOrderCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.AdminProductOrderCreateManyProductInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput> | Prisma.AdminProductOrderCreateWithoutProductInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutProductInput | Prisma.AdminProductOrderCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.AdminProductOrderCreateManyProductInputEnvelope;
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
};
export type AdminProductOrderUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput> | Prisma.AdminProductOrderCreateWithoutProductInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutProductInput | Prisma.AdminProductOrderCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutProductInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.AdminProductOrderCreateManyProductInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutProductInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutProductInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput> | Prisma.AdminProductOrderCreateWithoutProductInput[] | Prisma.AdminProductOrderUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutProductInput | Prisma.AdminProductOrderCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutProductInput | Prisma.AdminProductOrderUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.AdminProductOrderCreateManyProductInputEnvelope;
    set?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    disconnect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    delete?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    connect?: Prisma.AdminProductOrderWhereUniqueInput | Prisma.AdminProductOrderWhereUniqueInput[];
    update?: Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutProductInput | Prisma.AdminProductOrderUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.AdminProductOrderUpdateManyWithWhereWithoutProductInput | Prisma.AdminProductOrderUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
};
export type AdminProductOrderCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.AdminProductOrderWhereUniqueInput;
};
export type AdminProductOrderUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.AdminProductOrderCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.AdminProductOrderUpsertWithoutNotificationsInput;
    disconnect?: Prisma.AdminProductOrderWhereInput | boolean;
    delete?: Prisma.AdminProductOrderWhereInput | boolean;
    connect?: Prisma.AdminProductOrderWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AdminProductOrderUpdateToOneWithWhereWithoutNotificationsInput, Prisma.AdminProductOrderUpdateWithoutNotificationsInput>, Prisma.AdminProductOrderUncheckedUpdateWithoutNotificationsInput>;
};
export type AdminProductOrderCreateWithoutOrdered_by_userInput = {
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutAdminProductOrdersInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutAdminProductOrdersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput = {
    admin_order_id?: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderCreateOrConnectWithoutOrdered_by_userInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput>;
};
export type AdminProductOrderCreateManyOrdered_by_userInputEnvelope = {
    data: Prisma.AdminProductOrderCreateManyOrdered_by_userInput | Prisma.AdminProductOrderCreateManyOrdered_by_userInput[];
    skipDuplicates?: boolean;
};
export type AdminProductOrderUpsertWithWhereUniqueWithoutOrdered_by_userInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedUpdateWithoutOrdered_by_userInput>;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedCreateWithoutOrdered_by_userInput>;
};
export type AdminProductOrderUpdateWithWhereUniqueWithoutOrdered_by_userInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutOrdered_by_userInput, Prisma.AdminProductOrderUncheckedUpdateWithoutOrdered_by_userInput>;
};
export type AdminProductOrderUpdateManyWithWhereWithoutOrdered_by_userInput = {
    where: Prisma.AdminProductOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateManyMutationInput, Prisma.AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userInput>;
};
export type AdminProductOrderScalarWhereInput = {
    AND?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
    OR?: Prisma.AdminProductOrderScalarWhereInput[];
    NOT?: Prisma.AdminProductOrderScalarWhereInput | Prisma.AdminProductOrderScalarWhereInput[];
    admin_order_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    supplier_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    product_id?: Prisma.IntFilter<"AdminProductOrder"> | number;
    quantity?: Prisma.IntFilter<"AdminProductOrder"> | number;
    ordered_by?: Prisma.UuidFilter<"AdminProductOrder"> | string;
    order_note?: Prisma.StringNullableFilter<"AdminProductOrder"> | string | null;
    created_at?: Prisma.DateTimeFilter<"AdminProductOrder"> | Date | string;
};
export type AdminProductOrderCreateWithoutSupplierInput = {
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    ordered_by_user: Prisma.AuthUserCreateNestedOneWithoutAdminOrdersInput;
    product: Prisma.ProductCreateNestedOneWithoutAdminProductOrdersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderUncheckedCreateWithoutSupplierInput = {
    admin_order_id?: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderCreateOrConnectWithoutSupplierInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput>;
};
export type AdminProductOrderCreateManySupplierInputEnvelope = {
    data: Prisma.AdminProductOrderCreateManySupplierInput | Prisma.AdminProductOrderCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type AdminProductOrderUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedCreateWithoutSupplierInput>;
};
export type AdminProductOrderUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutSupplierInput, Prisma.AdminProductOrderUncheckedUpdateWithoutSupplierInput>;
};
export type AdminProductOrderUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.AdminProductOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateManyMutationInput, Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierInput>;
};
export type AdminProductOrderCreateWithoutProductInput = {
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    ordered_by_user: Prisma.AuthUserCreateNestedOneWithoutAdminOrdersInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutAdminProductOrdersInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderUncheckedCreateWithoutProductInput = {
    admin_order_id?: number;
    supplier_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutAdmin_orderInput;
};
export type AdminProductOrderCreateOrConnectWithoutProductInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput>;
};
export type AdminProductOrderCreateManyProductInputEnvelope = {
    data: Prisma.AdminProductOrderCreateManyProductInput | Prisma.AdminProductOrderCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type AdminProductOrderUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    update: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutProductInput, Prisma.AdminProductOrderUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutProductInput, Prisma.AdminProductOrderUncheckedCreateWithoutProductInput>;
};
export type AdminProductOrderUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutProductInput, Prisma.AdminProductOrderUncheckedUpdateWithoutProductInput>;
};
export type AdminProductOrderUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.AdminProductOrderScalarWhereInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateManyMutationInput, Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductInput>;
};
export type AdminProductOrderCreateWithoutNotificationsInput = {
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
    ordered_by_user: Prisma.AuthUserCreateNestedOneWithoutAdminOrdersInput;
    product: Prisma.ProductCreateNestedOneWithoutAdminProductOrdersInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutAdminProductOrdersInput;
};
export type AdminProductOrderUncheckedCreateWithoutNotificationsInput = {
    admin_order_id?: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
};
export type AdminProductOrderCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.AdminProductOrderWhereUniqueInput;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedCreateWithoutNotificationsInput>;
};
export type AdminProductOrderUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.AdminProductOrderCreateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.AdminProductOrderWhereInput;
};
export type AdminProductOrderUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.AdminProductOrderWhereInput;
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateWithoutNotificationsInput, Prisma.AdminProductOrderUncheckedUpdateWithoutNotificationsInput>;
};
export type AdminProductOrderUpdateWithoutNotificationsInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordered_by_user?: Prisma.AuthUserUpdateOneRequiredWithoutAdminOrdersNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
};
export type AdminProductOrderUncheckedUpdateWithoutNotificationsInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminProductOrderCreateManyOrdered_by_userInput = {
    admin_order_id?: number;
    supplier_id: number;
    product_id: number;
    quantity: number;
    order_note?: string | null;
    created_at?: Date | string;
};
export type AdminProductOrderUpdateWithoutOrdered_by_userInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateWithoutOrdered_by_userInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateManyWithoutOrdered_by_userInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminProductOrderCreateManySupplierInput = {
    admin_order_id?: number;
    product_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
};
export type AdminProductOrderUpdateWithoutSupplierInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordered_by_user?: Prisma.AuthUserUpdateOneRequiredWithoutAdminOrdersNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateWithoutSupplierInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateManyWithoutSupplierInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AdminProductOrderCreateManyProductInput = {
    admin_order_id?: number;
    supplier_id: number;
    quantity: number;
    ordered_by: string;
    order_note?: string | null;
    created_at?: Date | string;
};
export type AdminProductOrderUpdateWithoutProductInput = {
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ordered_by_user?: Prisma.AuthUserUpdateOneRequiredWithoutAdminOrdersNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutAdminProductOrdersNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateWithoutProductInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutAdmin_orderNestedInput;
};
export type AdminProductOrderUncheckedUpdateManyWithoutProductInput = {
    admin_order_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    ordered_by?: Prisma.StringFieldUpdateOperationsInput | string;
    order_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type AdminProductOrderCountOutputType
 */
export type AdminProductOrderCountOutputType = {
    notifications: number;
};
export type AdminProductOrderCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notifications?: boolean | AdminProductOrderCountOutputTypeCountNotificationsArgs;
};
/**
 * AdminProductOrderCountOutputType without action
 */
export type AdminProductOrderCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProductOrderCountOutputType
     */
    select?: Prisma.AdminProductOrderCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AdminProductOrderCountOutputType without action
 */
export type AdminProductOrderCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
export type AdminProductOrderSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_order_id?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    ordered_by?: boolean;
    order_note?: boolean;
    created_at?: boolean;
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    notifications?: boolean | Prisma.AdminProductOrder$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminProductOrderCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminProductOrder"]>;
export type AdminProductOrderSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_order_id?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    ordered_by?: boolean;
    order_note?: boolean;
    created_at?: boolean;
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminProductOrder"]>;
export type AdminProductOrderSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    admin_order_id?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    ordered_by?: boolean;
    order_note?: boolean;
    created_at?: boolean;
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["adminProductOrder"]>;
export type AdminProductOrderSelectScalar = {
    admin_order_id?: boolean;
    supplier_id?: boolean;
    product_id?: boolean;
    quantity?: boolean;
    ordered_by?: boolean;
    order_note?: boolean;
    created_at?: boolean;
};
export type AdminProductOrderOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"admin_order_id" | "supplier_id" | "product_id" | "quantity" | "ordered_by" | "order_note" | "created_at", ExtArgs["result"]["adminProductOrder"]>;
export type AdminProductOrderInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    notifications?: boolean | Prisma.AdminProductOrder$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminProductOrderCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AdminProductOrderIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type AdminProductOrderIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordered_by_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type $AdminProductOrderPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AdminProductOrder";
    objects: {
        ordered_by_user: Prisma.$AuthUserPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
        supplier: Prisma.$SupplierPayload<ExtArgs>;
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        admin_order_id: number;
        supplier_id: number;
        product_id: number;
        quantity: number;
        ordered_by: string;
        order_note: string | null;
        created_at: Date;
    }, ExtArgs["result"]["adminProductOrder"]>;
    composites: {};
};
export type AdminProductOrderGetPayload<S extends boolean | null | undefined | AdminProductOrderDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload, S>;
export type AdminProductOrderCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AdminProductOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminProductOrderCountAggregateInputType | true;
};
export interface AdminProductOrderDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AdminProductOrder'];
        meta: {
            name: 'AdminProductOrder';
        };
    };
    /**
     * Find zero or one AdminProductOrder that matches the filter.
     * @param {AdminProductOrderFindUniqueArgs} args - Arguments to find a AdminProductOrder
     * @example
     * // Get one AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminProductOrderFindUniqueArgs>(args: Prisma.SelectSubset<T, AdminProductOrderFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AdminProductOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminProductOrderFindUniqueOrThrowArgs} args - Arguments to find a AdminProductOrder
     * @example
     * // Get one AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminProductOrderFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AdminProductOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminProductOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderFindFirstArgs} args - Arguments to find a AdminProductOrder
     * @example
     * // Get one AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminProductOrderFindFirstArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderFindFirstArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AdminProductOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderFindFirstOrThrowArgs} args - Arguments to find a AdminProductOrder
     * @example
     * // Get one AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminProductOrderFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AdminProductOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdminProductOrders
     * const adminProductOrders = await prisma.adminProductOrder.findMany()
     *
     * // Get first 10 AdminProductOrders
     * const adminProductOrders = await prisma.adminProductOrder.findMany({ take: 10 })
     *
     * // Only select the `admin_order_id`
     * const adminProductOrderWithAdmin_order_idOnly = await prisma.adminProductOrder.findMany({ select: { admin_order_id: true } })
     *
     */
    findMany<T extends AdminProductOrderFindManyArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AdminProductOrder.
     * @param {AdminProductOrderCreateArgs} args - Arguments to create a AdminProductOrder.
     * @example
     * // Create one AdminProductOrder
     * const AdminProductOrder = await prisma.adminProductOrder.create({
     *   data: {
     *     // ... data to create a AdminProductOrder
     *   }
     * })
     *
     */
    create<T extends AdminProductOrderCreateArgs>(args: Prisma.SelectSubset<T, AdminProductOrderCreateArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AdminProductOrders.
     * @param {AdminProductOrderCreateManyArgs} args - Arguments to create many AdminProductOrders.
     * @example
     * // Create many AdminProductOrders
     * const adminProductOrder = await prisma.adminProductOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AdminProductOrderCreateManyArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AdminProductOrders and returns the data saved in the database.
     * @param {AdminProductOrderCreateManyAndReturnArgs} args - Arguments to create many AdminProductOrders.
     * @example
     * // Create many AdminProductOrders
     * const adminProductOrder = await prisma.adminProductOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AdminProductOrders and only return the `admin_order_id`
     * const adminProductOrderWithAdmin_order_idOnly = await prisma.adminProductOrder.createManyAndReturn({
     *   select: { admin_order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AdminProductOrderCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AdminProductOrder.
     * @param {AdminProductOrderDeleteArgs} args - Arguments to delete one AdminProductOrder.
     * @example
     * // Delete one AdminProductOrder
     * const AdminProductOrder = await prisma.adminProductOrder.delete({
     *   where: {
     *     // ... filter to delete one AdminProductOrder
     *   }
     * })
     *
     */
    delete<T extends AdminProductOrderDeleteArgs>(args: Prisma.SelectSubset<T, AdminProductOrderDeleteArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AdminProductOrder.
     * @param {AdminProductOrderUpdateArgs} args - Arguments to update one AdminProductOrder.
     * @example
     * // Update one AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AdminProductOrderUpdateArgs>(args: Prisma.SelectSubset<T, AdminProductOrderUpdateArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AdminProductOrders.
     * @param {AdminProductOrderDeleteManyArgs} args - Arguments to filter AdminProductOrders to delete.
     * @example
     * // Delete a few AdminProductOrders
     * const { count } = await prisma.adminProductOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AdminProductOrderDeleteManyArgs>(args?: Prisma.SelectSubset<T, AdminProductOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdminProductOrders
     * const adminProductOrder = await prisma.adminProductOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AdminProductOrderUpdateManyArgs>(args: Prisma.SelectSubset<T, AdminProductOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AdminProductOrders and returns the data updated in the database.
     * @param {AdminProductOrderUpdateManyAndReturnArgs} args - Arguments to update many AdminProductOrders.
     * @example
     * // Update many AdminProductOrders
     * const adminProductOrder = await prisma.adminProductOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AdminProductOrders and only return the `admin_order_id`
     * const adminProductOrderWithAdmin_order_idOnly = await prisma.adminProductOrder.updateManyAndReturn({
     *   select: { admin_order_id: true },
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
    updateManyAndReturn<T extends AdminProductOrderUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AdminProductOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AdminProductOrder.
     * @param {AdminProductOrderUpsertArgs} args - Arguments to update or create a AdminProductOrder.
     * @example
     * // Update or create a AdminProductOrder
     * const adminProductOrder = await prisma.adminProductOrder.upsert({
     *   create: {
     *     // ... data to create a AdminProductOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdminProductOrder we want to update
     *   }
     * })
     */
    upsert<T extends AdminProductOrderUpsertArgs>(args: Prisma.SelectSubset<T, AdminProductOrderUpsertArgs<ExtArgs>>): Prisma.Prisma__AdminProductOrderClient<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AdminProductOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderCountArgs} args - Arguments to filter AdminProductOrders to count.
     * @example
     * // Count the number of AdminProductOrders
     * const count = await prisma.adminProductOrder.count({
     *   where: {
     *     // ... the filter for the AdminProductOrders we want to count
     *   }
     * })
    **/
    count<T extends AdminProductOrderCountArgs>(args?: Prisma.Subset<T, AdminProductOrderCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminProductOrderCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AdminProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminProductOrderAggregateArgs>(args: Prisma.Subset<T, AdminProductOrderAggregateArgs>): Prisma.PrismaPromise<GetAdminProductOrderAggregateType<T>>;
    /**
     * Group by AdminProductOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminProductOrderGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AdminProductOrderGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AdminProductOrderGroupByArgs['orderBy'];
    } : {
        orderBy?: AdminProductOrderGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AdminProductOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminProductOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdminProductOrder model
     */
    readonly fields: AdminProductOrderFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AdminProductOrder.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AdminProductOrderClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordered_by_user<T extends Prisma.AuthUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    notifications<T extends Prisma.AdminProductOrder$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AdminProductOrder$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the AdminProductOrder model
 */
export interface AdminProductOrderFieldRefs {
    readonly admin_order_id: Prisma.FieldRef<"AdminProductOrder", 'Int'>;
    readonly supplier_id: Prisma.FieldRef<"AdminProductOrder", 'Int'>;
    readonly product_id: Prisma.FieldRef<"AdminProductOrder", 'Int'>;
    readonly quantity: Prisma.FieldRef<"AdminProductOrder", 'Int'>;
    readonly ordered_by: Prisma.FieldRef<"AdminProductOrder", 'String'>;
    readonly order_note: Prisma.FieldRef<"AdminProductOrder", 'String'>;
    readonly created_at: Prisma.FieldRef<"AdminProductOrder", 'DateTime'>;
}
/**
 * AdminProductOrder findUnique
 */
export type AdminProductOrderFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdminProductOrder to fetch.
     */
    where: Prisma.AdminProductOrderWhereUniqueInput;
};
/**
 * AdminProductOrder findUniqueOrThrow
 */
export type AdminProductOrderFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdminProductOrder to fetch.
     */
    where: Prisma.AdminProductOrderWhereUniqueInput;
};
/**
 * AdminProductOrder findFirst
 */
export type AdminProductOrderFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdminProductOrder to fetch.
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminProductOrders to fetch.
     */
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminProductOrders.
     */
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminProductOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminProductOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminProductOrders.
     */
    distinct?: Prisma.AdminProductOrderScalarFieldEnum | Prisma.AdminProductOrderScalarFieldEnum[];
};
/**
 * AdminProductOrder findFirstOrThrow
 */
export type AdminProductOrderFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdminProductOrder to fetch.
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminProductOrders to fetch.
     */
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdminProductOrders.
     */
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminProductOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminProductOrders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdminProductOrders.
     */
    distinct?: Prisma.AdminProductOrderScalarFieldEnum | Prisma.AdminProductOrderScalarFieldEnum[];
};
/**
 * AdminProductOrder findMany
 */
export type AdminProductOrderFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which AdminProductOrders to fetch.
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdminProductOrders to fetch.
     */
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdminProductOrders.
     */
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdminProductOrders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdminProductOrders.
     */
    skip?: number;
    distinct?: Prisma.AdminProductOrderScalarFieldEnum | Prisma.AdminProductOrderScalarFieldEnum[];
};
/**
 * AdminProductOrder create
 */
export type AdminProductOrderCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a AdminProductOrder.
     */
    data: Prisma.XOR<Prisma.AdminProductOrderCreateInput, Prisma.AdminProductOrderUncheckedCreateInput>;
};
/**
 * AdminProductOrder createMany
 */
export type AdminProductOrderCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdminProductOrders.
     */
    data: Prisma.AdminProductOrderCreateManyInput | Prisma.AdminProductOrderCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AdminProductOrder createManyAndReturn
 */
export type AdminProductOrderCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProductOrder
     */
    select?: Prisma.AdminProductOrderSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminProductOrder
     */
    omit?: Prisma.AdminProductOrderOmit<ExtArgs> | null;
    /**
     * The data used to create many AdminProductOrders.
     */
    data: Prisma.AdminProductOrderCreateManyInput | Prisma.AdminProductOrderCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminProductOrderIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AdminProductOrder update
 */
export type AdminProductOrderUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a AdminProductOrder.
     */
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateInput, Prisma.AdminProductOrderUncheckedUpdateInput>;
    /**
     * Choose, which AdminProductOrder to update.
     */
    where: Prisma.AdminProductOrderWhereUniqueInput;
};
/**
 * AdminProductOrder updateMany
 */
export type AdminProductOrderUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AdminProductOrders.
     */
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateManyMutationInput, Prisma.AdminProductOrderUncheckedUpdateManyInput>;
    /**
     * Filter which AdminProductOrders to update
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * Limit how many AdminProductOrders to update.
     */
    limit?: number;
};
/**
 * AdminProductOrder updateManyAndReturn
 */
export type AdminProductOrderUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProductOrder
     */
    select?: Prisma.AdminProductOrderSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminProductOrder
     */
    omit?: Prisma.AdminProductOrderOmit<ExtArgs> | null;
    /**
     * The data used to update AdminProductOrders.
     */
    data: Prisma.XOR<Prisma.AdminProductOrderUpdateManyMutationInput, Prisma.AdminProductOrderUncheckedUpdateManyInput>;
    /**
     * Filter which AdminProductOrders to update
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * Limit how many AdminProductOrders to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminProductOrderIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AdminProductOrder upsert
 */
export type AdminProductOrderUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the AdminProductOrder to update in case it exists.
     */
    where: Prisma.AdminProductOrderWhereUniqueInput;
    /**
     * In case the AdminProductOrder found by the `where` argument doesn't exist, create a new AdminProductOrder with this data.
     */
    create: Prisma.XOR<Prisma.AdminProductOrderCreateInput, Prisma.AdminProductOrderUncheckedCreateInput>;
    /**
     * In case the AdminProductOrder was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AdminProductOrderUpdateInput, Prisma.AdminProductOrderUncheckedUpdateInput>;
};
/**
 * AdminProductOrder delete
 */
export type AdminProductOrderDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which AdminProductOrder to delete.
     */
    where: Prisma.AdminProductOrderWhereUniqueInput;
};
/**
 * AdminProductOrder deleteMany
 */
export type AdminProductOrderDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AdminProductOrders to delete
     */
    where?: Prisma.AdminProductOrderWhereInput;
    /**
     * Limit how many AdminProductOrders to delete.
     */
    limit?: number;
};
/**
 * AdminProductOrder.notifications
 */
export type AdminProductOrder$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * AdminProductOrder without action
 */
export type AdminProductOrderDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=AdminProductOrder.d.ts.map