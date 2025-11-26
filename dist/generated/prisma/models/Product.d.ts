import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Product
 *
 */
export type ProductModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductPayload>;
export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
export type ProductAvgAggregateOutputType = {
    product_id: number | null;
    supplier_id: number | null;
    main_image_file_id: number | null;
    price: runtime.Decimal | null;
    stock: number | null;
};
export type ProductSumAggregateOutputType = {
    product_id: number | null;
    supplier_id: number | null;
    main_image_file_id: number | null;
    price: runtime.Decimal | null;
    stock: number | null;
};
export type ProductMinAggregateOutputType = {
    product_id: number | null;
    product_code: string | null;
    supplier_id: number | null;
    name: string | null;
    slug: string | null;
    short_description: string | null;
    full_description: string | null;
    main_image_file_id: number | null;
    price: runtime.Decimal | null;
    currency: string | null;
    stock: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProductMaxAggregateOutputType = {
    product_id: number | null;
    product_code: string | null;
    supplier_id: number | null;
    name: string | null;
    slug: string | null;
    short_description: string | null;
    full_description: string | null;
    main_image_file_id: number | null;
    price: runtime.Decimal | null;
    currency: string | null;
    stock: number | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ProductCountAggregateOutputType = {
    product_id: number;
    product_code: number;
    supplier_id: number;
    name: number;
    slug: number;
    short_description: number;
    full_description: number;
    main_image_file_id: number;
    price: number;
    currency: number;
    stock: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ProductAvgAggregateInputType = {
    product_id?: true;
    supplier_id?: true;
    main_image_file_id?: true;
    price?: true;
    stock?: true;
};
export type ProductSumAggregateInputType = {
    product_id?: true;
    supplier_id?: true;
    main_image_file_id?: true;
    price?: true;
    stock?: true;
};
export type ProductMinAggregateInputType = {
    product_id?: true;
    product_code?: true;
    supplier_id?: true;
    name?: true;
    slug?: true;
    short_description?: true;
    full_description?: true;
    main_image_file_id?: true;
    price?: true;
    currency?: true;
    stock?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProductMaxAggregateInputType = {
    product_id?: true;
    product_code?: true;
    supplier_id?: true;
    name?: true;
    slug?: true;
    short_description?: true;
    full_description?: true;
    main_image_file_id?: true;
    price?: true;
    currency?: true;
    stock?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type ProductCountAggregateInputType = {
    product_id?: true;
    product_code?: true;
    supplier_id?: true;
    name?: true;
    slug?: true;
    short_description?: true;
    full_description?: true;
    main_image_file_id?: true;
    price?: true;
    currency?: true;
    stock?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ProductAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType;
};
export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProduct[P]> : Prisma.GetScalarType<T[P], AggregateProduct[P]>;
};
export type ProductGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithAggregationInput | Prisma.ProductOrderByWithAggregationInput[];
    by: Prisma.ProductScalarFieldEnum[] | Prisma.ProductScalarFieldEnum;
    having?: Prisma.ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
};
export type ProductGroupByOutputType = {
    product_id: number;
    product_code: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description: string | null;
    full_description: string | null;
    main_image_file_id: number | null;
    price: runtime.Decimal;
    currency: string;
    stock: number;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
};
type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductGroupByOutputType[P]>;
}>>;
export type ProductWhereInput = {
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    product_id?: Prisma.IntFilter<"Product"> | number;
    product_code?: Prisma.StringFilter<"Product"> | string;
    supplier_id?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    slug?: Prisma.StringFilter<"Product"> | string;
    short_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    full_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    main_image_file_id?: Prisma.IntNullableFilter<"Product"> | number | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Product"> | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    is_active?: Prisma.BoolFilter<"Product"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    main_image_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    likes?: Prisma.ProductLikeListRelationFilter;
    media?: Prisma.ProductMediaListRelationFilter;
    status?: Prisma.XOR<Prisma.ProductStatusNullableScalarRelationFilter, Prisma.ProductStatusWhereInput> | null;
};
export type ProductOrderByWithRelationInput = {
    product_id?: Prisma.SortOrder;
    product_code?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    short_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    adminProductOrders?: Prisma.AdminProductOrderOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    orderItems?: Prisma.OrderItemOrderByRelationAggregateInput;
    main_image_file?: Prisma.FileOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    likes?: Prisma.ProductLikeOrderByRelationAggregateInput;
    media?: Prisma.ProductMediaOrderByRelationAggregateInput;
    status?: Prisma.ProductStatusOrderByWithRelationInput;
};
export type ProductWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number;
    product_code?: string;
    slug?: string;
    AND?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    OR?: Prisma.ProductWhereInput[];
    NOT?: Prisma.ProductWhereInput | Prisma.ProductWhereInput[];
    supplier_id?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    short_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    full_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    main_image_file_id?: Prisma.IntNullableFilter<"Product"> | number | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Product"> | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    is_active?: Prisma.BoolFilter<"Product"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    orderItems?: Prisma.OrderItemListRelationFilter;
    main_image_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    likes?: Prisma.ProductLikeListRelationFilter;
    media?: Prisma.ProductMediaListRelationFilter;
    status?: Prisma.XOR<Prisma.ProductStatusNullableScalarRelationFilter, Prisma.ProductStatusWhereInput> | null;
}, "product_id" | "product_code" | "slug">;
export type ProductOrderByWithAggregationInput = {
    product_id?: Prisma.SortOrder;
    product_code?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    short_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    full_description?: Prisma.SortOrderInput | Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ProductCountOrderByAggregateInput;
    _avg?: Prisma.ProductAvgOrderByAggregateInput;
    _max?: Prisma.ProductMaxOrderByAggregateInput;
    _min?: Prisma.ProductMinOrderByAggregateInput;
    _sum?: Prisma.ProductSumOrderByAggregateInput;
};
export type ProductScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductScalarWhereWithAggregatesInput | Prisma.ProductScalarWhereWithAggregatesInput[];
    product_id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    product_code?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    supplier_id?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    name?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    short_description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    full_description?: Prisma.StringNullableWithAggregatesFilter<"Product"> | string | null;
    main_image_file_id?: Prisma.IntNullableWithAggregatesFilter<"Product"> | number | null;
    price?: Prisma.DecimalWithAggregatesFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Product"> | string;
    stock?: Prisma.IntWithAggregatesFilter<"Product"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"Product"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Product"> | Date | string;
};
export type ProductCreateInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductUpdateInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateManyInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProductUpdateManyMutationInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductUncheckedUpdateManyInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductListRelationFilter = {
    every?: Prisma.ProductWhereInput;
    some?: Prisma.ProductWhereInput;
    none?: Prisma.ProductWhereInput;
};
export type ProductOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductCountOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    product_code?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    short_description?: Prisma.SortOrder;
    full_description?: Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProductAvgOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductMaxOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    product_code?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    short_description?: Prisma.SortOrder;
    full_description?: Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProductMinOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    product_code?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    short_description?: Prisma.SortOrder;
    full_description?: Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ProductSumOrderByAggregateInput = {
    product_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    main_image_file_id?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type ProductScalarRelationFilter = {
    is?: Prisma.ProductWhereInput;
    isNot?: Prisma.ProductWhereInput;
};
export type ProductNullableScalarRelationFilter = {
    is?: Prisma.ProductWhereInput | null;
    isNot?: Prisma.ProductWhereInput | null;
};
export type ProductCreateNestedManyWithoutMain_image_fileInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput> | Prisma.ProductCreateWithoutMain_image_fileInput[] | Prisma.ProductUncheckedCreateWithoutMain_image_fileInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMain_image_fileInput | Prisma.ProductCreateOrConnectWithoutMain_image_fileInput[];
    createMany?: Prisma.ProductCreateManyMain_image_fileInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutMain_image_fileInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput> | Prisma.ProductCreateWithoutMain_image_fileInput[] | Prisma.ProductUncheckedCreateWithoutMain_image_fileInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMain_image_fileInput | Prisma.ProductCreateOrConnectWithoutMain_image_fileInput[];
    createMany?: Prisma.ProductCreateManyMain_image_fileInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutMain_image_fileNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput> | Prisma.ProductCreateWithoutMain_image_fileInput[] | Prisma.ProductUncheckedCreateWithoutMain_image_fileInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMain_image_fileInput | Prisma.ProductCreateOrConnectWithoutMain_image_fileInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutMain_image_fileInput | Prisma.ProductUpsertWithWhereUniqueWithoutMain_image_fileInput[];
    createMany?: Prisma.ProductCreateManyMain_image_fileInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutMain_image_fileInput | Prisma.ProductUpdateWithWhereUniqueWithoutMain_image_fileInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutMain_image_fileInput | Prisma.ProductUpdateManyWithWhereWithoutMain_image_fileInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput> | Prisma.ProductCreateWithoutMain_image_fileInput[] | Prisma.ProductUncheckedCreateWithoutMain_image_fileInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMain_image_fileInput | Prisma.ProductCreateOrConnectWithoutMain_image_fileInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutMain_image_fileInput | Prisma.ProductUpsertWithWhereUniqueWithoutMain_image_fileInput[];
    createMany?: Prisma.ProductCreateManyMain_image_fileInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutMain_image_fileInput | Prisma.ProductUpdateWithWhereUniqueWithoutMain_image_fileInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutMain_image_fileInput | Prisma.ProductUpdateManyWithWhereWithoutMain_image_fileInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
};
export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSupplierInput | Prisma.ProductUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput> | Prisma.ProductCreateWithoutSupplierInput[] | Prisma.ProductUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutSupplierInput | Prisma.ProductCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.ProductCreateManySupplierInputEnvelope;
    set?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    disconnect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    delete?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    connect?: Prisma.ProductWhereUniqueInput | Prisma.ProductWhereUniqueInput[];
    update?: Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput | Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.ProductUpdateManyWithWhereWithoutSupplierInput | Prisma.ProductUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type ProductCreateNestedOneWithoutLikesInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLikesInput, Prisma.ProductUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLikesInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutLikesNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutLikesInput, Prisma.ProductUncheckedCreateWithoutLikesInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutLikesInput;
    upsert?: Prisma.ProductUpsertWithoutLikesInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutLikesInput, Prisma.ProductUpdateWithoutLikesInput>, Prisma.ProductUncheckedUpdateWithoutLikesInput>;
};
export type ProductCreateNestedOneWithoutStatusInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStatusInput, Prisma.ProductUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStatusInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutStatusNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutStatusInput, Prisma.ProductUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutStatusInput;
    upsert?: Prisma.ProductUpsertWithoutStatusInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutStatusInput, Prisma.ProductUpdateWithoutStatusInput>, Prisma.ProductUncheckedUpdateWithoutStatusInput>;
};
export type ProductCreateNestedOneWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutMediaInput;
    upsert?: Prisma.ProductUpsertWithoutMediaInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutMediaInput, Prisma.ProductUpdateWithoutMediaInput>, Prisma.ProductUncheckedUpdateWithoutMediaInput>;
};
export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutOrderItemsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutOrderItemsInput;
    upsert?: Prisma.ProductUpsertWithoutOrderItemsInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutOrderItemsInput, Prisma.ProductUpdateWithoutOrderItemsInput>, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductCreateNestedOneWithoutAdminProductOrdersInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedCreateWithoutAdminProductOrdersInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAdminProductOrdersInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneRequiredWithoutAdminProductOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedCreateWithoutAdminProductOrdersInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutAdminProductOrdersInput;
    upsert?: Prisma.ProductUpsertWithoutAdminProductOrdersInput;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutAdminProductOrdersInput, Prisma.ProductUpdateWithoutAdminProductOrdersInput>, Prisma.ProductUncheckedUpdateWithoutAdminProductOrdersInput>;
};
export type ProductCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutNotificationsInput, Prisma.ProductUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.ProductWhereUniqueInput;
};
export type ProductUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.ProductCreateWithoutNotificationsInput, Prisma.ProductUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.ProductCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.ProductUpsertWithoutNotificationsInput;
    disconnect?: Prisma.ProductWhereInput | boolean;
    delete?: Prisma.ProductWhereInput | boolean;
    connect?: Prisma.ProductWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProductUpdateToOneWithWhereWithoutNotificationsInput, Prisma.ProductUpdateWithoutNotificationsInput>, Prisma.ProductUncheckedUpdateWithoutNotificationsInput>;
};
export type ProductCreateWithoutMain_image_fileInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutMain_image_fileInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutMain_image_fileInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput>;
};
export type ProductCreateManyMain_image_fileInputEnvelope = {
    data: Prisma.ProductCreateManyMain_image_fileInput | Prisma.ProductCreateManyMain_image_fileInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutMain_image_fileInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutMain_image_fileInput, Prisma.ProductUncheckedUpdateWithoutMain_image_fileInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMain_image_fileInput, Prisma.ProductUncheckedCreateWithoutMain_image_fileInput>;
};
export type ProductUpdateWithWhereUniqueWithoutMain_image_fileInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutMain_image_fileInput, Prisma.ProductUncheckedUpdateWithoutMain_image_fileInput>;
};
export type ProductUpdateManyWithWhereWithoutMain_image_fileInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileInput>;
};
export type ProductScalarWhereInput = {
    AND?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    OR?: Prisma.ProductScalarWhereInput[];
    NOT?: Prisma.ProductScalarWhereInput | Prisma.ProductScalarWhereInput[];
    product_id?: Prisma.IntFilter<"Product"> | number;
    product_code?: Prisma.StringFilter<"Product"> | string;
    supplier_id?: Prisma.IntFilter<"Product"> | number;
    name?: Prisma.StringFilter<"Product"> | string;
    slug?: Prisma.StringFilter<"Product"> | string;
    short_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    full_description?: Prisma.StringNullableFilter<"Product"> | string | null;
    main_image_file_id?: Prisma.IntNullableFilter<"Product"> | number | null;
    price?: Prisma.DecimalFilter<"Product"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Product"> | string;
    stock?: Prisma.IntFilter<"Product"> | number;
    is_active?: Prisma.BoolFilter<"Product"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Product"> | Date | string;
};
export type ProductCreateWithoutSupplierInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutSupplierInput = {
    product_id?: number;
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput>;
};
export type ProductCreateManySupplierInputEnvelope = {
    data: Prisma.ProductCreateManySupplierInput | Prisma.ProductCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductUpdateWithoutSupplierInput, Prisma.ProductUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutSupplierInput, Prisma.ProductUncheckedCreateWithoutSupplierInput>;
};
export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.ProductWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutSupplierInput, Prisma.ProductUncheckedUpdateWithoutSupplierInput>;
};
export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.ProductScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyWithoutSupplierInput>;
};
export type ProductCreateWithoutLikesInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutLikesInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutLikesInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLikesInput, Prisma.ProductUncheckedCreateWithoutLikesInput>;
};
export type ProductUpsertWithoutLikesInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutLikesInput, Prisma.ProductUncheckedUpdateWithoutLikesInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutLikesInput, Prisma.ProductUncheckedCreateWithoutLikesInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutLikesInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutLikesInput, Prisma.ProductUncheckedUpdateWithoutLikesInput>;
};
export type ProductUpdateWithoutLikesInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutLikesInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateWithoutStatusInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
};
export type ProductUncheckedCreateWithoutStatusInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
};
export type ProductCreateOrConnectWithoutStatusInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStatusInput, Prisma.ProductUncheckedCreateWithoutStatusInput>;
};
export type ProductUpsertWithoutStatusInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutStatusInput, Prisma.ProductUncheckedUpdateWithoutStatusInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutStatusInput, Prisma.ProductUncheckedCreateWithoutStatusInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutStatusInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutStatusInput, Prisma.ProductUncheckedUpdateWithoutStatusInput>;
};
export type ProductUpdateWithoutStatusInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutStatusInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
};
export type ProductCreateWithoutMediaInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutMediaInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutMediaInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
};
export type ProductUpsertWithoutMediaInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutMediaInput, Prisma.ProductUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutMediaInput, Prisma.ProductUncheckedCreateWithoutMediaInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutMediaInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutMediaInput, Prisma.ProductUncheckedUpdateWithoutMediaInput>;
};
export type ProductUpdateWithoutMediaInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutMediaInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateWithoutOrderItemsInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutOrderItemsInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
};
export type ProductUpsertWithoutOrderItemsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutOrderItemsInput, Prisma.ProductUncheckedCreateWithoutOrderItemsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutOrderItemsInput, Prisma.ProductUncheckedUpdateWithoutOrderItemsInput>;
};
export type ProductUpdateWithoutOrderItemsInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateWithoutAdminProductOrdersInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    notifications?: Prisma.NotificationCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutAdminProductOrdersInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutAdminProductOrdersInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedCreateWithoutAdminProductOrdersInput>;
};
export type ProductUpsertWithoutAdminProductOrdersInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedUpdateWithoutAdminProductOrdersInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedCreateWithoutAdminProductOrdersInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutAdminProductOrdersInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutAdminProductOrdersInput, Prisma.ProductUncheckedUpdateWithoutAdminProductOrdersInput>;
};
export type ProductUpdateWithoutAdminProductOrdersInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutAdminProductOrdersInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateWithoutNotificationsInput = {
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemCreateNestedManyWithoutProductInput;
    main_image_file?: Prisma.FileCreateNestedOneWithoutProductsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutProductsInput;
    likes?: Prisma.ProductLikeCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusCreateNestedOneWithoutProductInput;
};
export type ProductUncheckedCreateWithoutNotificationsInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutProductInput;
    orderItems?: Prisma.OrderItemUncheckedCreateNestedManyWithoutProductInput;
    likes?: Prisma.ProductLikeUncheckedCreateNestedManyWithoutProductInput;
    media?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutProductInput;
    status?: Prisma.ProductStatusUncheckedCreateNestedOneWithoutProductInput;
};
export type ProductCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.ProductWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductCreateWithoutNotificationsInput, Prisma.ProductUncheckedCreateWithoutNotificationsInput>;
};
export type ProductUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.ProductUpdateWithoutNotificationsInput, Prisma.ProductUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.ProductCreateWithoutNotificationsInput, Prisma.ProductUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.ProductWhereInput;
};
export type ProductUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.ProductWhereInput;
    data: Prisma.XOR<Prisma.ProductUpdateWithoutNotificationsInput, Prisma.ProductUncheckedUpdateWithoutNotificationsInput>;
};
export type ProductUpdateWithoutNotificationsInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutNotificationsInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductCreateManyMain_image_fileInput = {
    product_id?: number;
    product_code?: string;
    supplier_id: number;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProductUpdateWithoutMain_image_fileInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutMain_image_fileInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutMain_image_fileInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductCreateManySupplierInput = {
    product_id?: number;
    product_code?: string;
    name: string;
    slug: string;
    short_description?: string | null;
    full_description?: string | null;
    main_image_file_id?: number | null;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    stock?: number;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ProductUpdateWithoutSupplierInput = {
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUpdateManyWithoutProductNestedInput;
    main_image_file?: Prisma.FileUpdateOneWithoutProductsNestedInput;
    likes?: Prisma.ProductLikeUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateWithoutSupplierInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutProductNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutProductNestedInput;
    orderItems?: Prisma.OrderItemUncheckedUpdateManyWithoutProductNestedInput;
    likes?: Prisma.ProductLikeUncheckedUpdateManyWithoutProductNestedInput;
    media?: Prisma.ProductMediaUncheckedUpdateManyWithoutProductNestedInput;
    status?: Prisma.ProductStatusUncheckedUpdateOneWithoutProductNestedInput;
};
export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_code?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    short_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    full_description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    main_image_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    stock?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ProductCountOutputType
 */
export type ProductCountOutputType = {
    adminProductOrders: number;
    notifications: number;
    orderItems: number;
    likes: number;
    media: number;
};
export type ProductCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminProductOrders?: boolean | ProductCountOutputTypeCountAdminProductOrdersArgs;
    notifications?: boolean | ProductCountOutputTypeCountNotificationsArgs;
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs;
    likes?: boolean | ProductCountOutputTypeCountLikesArgs;
    media?: boolean | ProductCountOutputTypeCountMediaArgs;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: Prisma.ProductCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountAdminProductOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminProductOrderWhereInput;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderItemWhereInput;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductLikeWhereInput;
};
/**
 * ProductCountOutputType without action
 */
export type ProductCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductMediaWhereInput;
};
export type ProductSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    product_code?: boolean;
    supplier_id?: boolean;
    name?: boolean;
    slug?: boolean;
    short_description?: boolean;
    full_description?: boolean;
    main_image_file_id?: boolean;
    price?: boolean;
    currency?: boolean;
    stock?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    adminProductOrders?: boolean | Prisma.Product$adminProductOrdersArgs<ExtArgs>;
    notifications?: boolean | Prisma.Product$notificationsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    likes?: boolean | Prisma.Product$likesArgs<ExtArgs>;
    media?: boolean | Prisma.Product$mediaArgs<ExtArgs>;
    status?: boolean | Prisma.Product$statusArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    product_code?: boolean;
    supplier_id?: boolean;
    name?: boolean;
    slug?: boolean;
    short_description?: boolean;
    full_description?: boolean;
    main_image_file_id?: boolean;
    price?: boolean;
    currency?: boolean;
    stock?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    product_id?: boolean;
    product_code?: boolean;
    supplier_id?: boolean;
    name?: boolean;
    slug?: boolean;
    short_description?: boolean;
    full_description?: boolean;
    main_image_file_id?: boolean;
    price?: boolean;
    currency?: boolean;
    stock?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["product"]>;
export type ProductSelectScalar = {
    product_id?: boolean;
    product_code?: boolean;
    supplier_id?: boolean;
    name?: boolean;
    slug?: boolean;
    short_description?: boolean;
    full_description?: boolean;
    main_image_file_id?: boolean;
    price?: boolean;
    currency?: boolean;
    stock?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ProductOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"product_id" | "product_code" | "supplier_id" | "name" | "slug" | "short_description" | "full_description" | "main_image_file_id" | "price" | "currency" | "stock" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["product"]>;
export type ProductInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminProductOrders?: boolean | Prisma.Product$adminProductOrdersArgs<ExtArgs>;
    notifications?: boolean | Prisma.Product$notificationsArgs<ExtArgs>;
    orderItems?: boolean | Prisma.Product$orderItemsArgs<ExtArgs>;
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    likes?: boolean | Prisma.Product$likesArgs<ExtArgs>;
    media?: boolean | Prisma.Product$mediaArgs<ExtArgs>;
    status?: boolean | Prisma.Product$statusArgs<ExtArgs>;
    _count?: boolean | Prisma.ProductCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProductIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type ProductIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    main_image_file?: boolean | Prisma.Product$main_image_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type $ProductPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Product";
    objects: {
        adminProductOrders: Prisma.$AdminProductOrderPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        orderItems: Prisma.$OrderItemPayload<ExtArgs>[];
        main_image_file: Prisma.$FilePayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs>;
        likes: Prisma.$ProductLikePayload<ExtArgs>[];
        media: Prisma.$ProductMediaPayload<ExtArgs>[];
        status: Prisma.$ProductStatusPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        product_id: number;
        product_code: string;
        supplier_id: number;
        name: string;
        slug: string;
        short_description: string | null;
        full_description: string | null;
        main_image_file_id: number | null;
        price: runtime.Decimal;
        currency: string;
        stock: number;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["product"]>;
    composites: {};
};
export type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductPayload, S>;
export type ProductCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductCountAggregateInputType | true;
};
export interface ProductDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Product'];
        meta: {
            name: 'Product';
        };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `product_id`
     * const productWithProduct_idOnly = await prisma.product.findMany({ select: { product_id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(args?: Prisma.SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(args: Prisma.SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(args: Prisma.SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(args: Prisma.SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Products and only return the `product_id`
     * const productWithProduct_idOnly = await prisma.product.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: Prisma.SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(args?: Prisma.Subset<T, ProductCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Prisma.Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>;
    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Product.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adminProductOrders<T extends Prisma.Product$adminProductOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$adminProductOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Product$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    orderItems<T extends Prisma.Product$orderItemsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    main_image_file<T extends Prisma.Product$main_image_fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$main_image_fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    likes<T extends Prisma.Product$likesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    media<T extends Prisma.Product$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    status<T extends Prisma.Product$statusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Product$statusArgs<ExtArgs>>): Prisma.Prisma__ProductStatusClient<runtime.Types.Result.GetResult<Prisma.$ProductStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Product model
 */
export interface ProductFieldRefs {
    readonly product_id: Prisma.FieldRef<"Product", 'Int'>;
    readonly product_code: Prisma.FieldRef<"Product", 'String'>;
    readonly supplier_id: Prisma.FieldRef<"Product", 'Int'>;
    readonly name: Prisma.FieldRef<"Product", 'String'>;
    readonly slug: Prisma.FieldRef<"Product", 'String'>;
    readonly short_description: Prisma.FieldRef<"Product", 'String'>;
    readonly full_description: Prisma.FieldRef<"Product", 'String'>;
    readonly main_image_file_id: Prisma.FieldRef<"Product", 'Int'>;
    readonly price: Prisma.FieldRef<"Product", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Product", 'String'>;
    readonly stock: Prisma.FieldRef<"Product", 'Int'>;
    readonly is_active: Prisma.FieldRef<"Product", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Product", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Product", 'DateTime'>;
}
/**
 * Product findUnique
 */
export type ProductFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product findUniqueOrThrow
 */
export type ProductFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product findFirst
 */
export type ProductFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product findFirstOrThrow
 */
export type ProductFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Product to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product findMany
 */
export type ProductFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Products to fetch.
     */
    where?: Prisma.ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: Prisma.ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * Product create
 */
export type ProductCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Product.
     */
    data: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
};
/**
 * Product createMany
 */
export type ProductCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Product createManyAndReturn
 */
export type ProductCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * The data used to create many Products.
     */
    data: Prisma.ProductCreateManyInput | Prisma.ProductCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Product update
 */
export type ProductUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Product.
     */
    data: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product updateMany
 */
export type ProductUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: Prisma.ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
};
/**
 * Product updateManyAndReturn
 */
export type ProductUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * The data used to update Products.
     */
    data: Prisma.XOR<Prisma.ProductUpdateManyMutationInput, Prisma.ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: Prisma.ProductWhereInput;
    /**
     * Limit how many Products to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Product upsert
 */
export type ProductUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: Prisma.ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: Prisma.XOR<Prisma.ProductCreateInput, Prisma.ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductUpdateInput, Prisma.ProductUncheckedUpdateInput>;
};
/**
 * Product delete
 */
export type ProductDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Product to delete.
     */
    where: Prisma.ProductWhereUniqueInput;
};
/**
 * Product deleteMany
 */
export type ProductDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: Prisma.ProductWhereInput;
    /**
     * Limit how many Products to delete.
     */
    limit?: number;
};
/**
 * Product.adminProductOrders
 */
export type Product$adminProductOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Product.notifications
 */
export type Product$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Product.orderItems
 */
export type Product$orderItemsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: Prisma.OrderItemSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: Prisma.OrderItemOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderItemInclude<ExtArgs> | null;
    where?: Prisma.OrderItemWhereInput;
    orderBy?: Prisma.OrderItemOrderByWithRelationInput | Prisma.OrderItemOrderByWithRelationInput[];
    cursor?: Prisma.OrderItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderItemScalarFieldEnum | Prisma.OrderItemScalarFieldEnum[];
};
/**
 * Product.main_image_file
 */
export type Product$main_image_fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Product.likes
 */
export type Product$likesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductLike
     */
    select?: Prisma.ProductLikeSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductLike
     */
    omit?: Prisma.ProductLikeOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductLikeInclude<ExtArgs> | null;
    where?: Prisma.ProductLikeWhereInput;
    orderBy?: Prisma.ProductLikeOrderByWithRelationInput | Prisma.ProductLikeOrderByWithRelationInput[];
    cursor?: Prisma.ProductLikeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductLikeScalarFieldEnum | Prisma.ProductLikeScalarFieldEnum[];
};
/**
 * Product.media
 */
export type Product$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMedia
     */
    select?: Prisma.ProductMediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductMedia
     */
    omit?: Prisma.ProductMediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductMediaInclude<ExtArgs> | null;
    where?: Prisma.ProductMediaWhereInput;
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductMediaScalarFieldEnum | Prisma.ProductMediaScalarFieldEnum[];
};
/**
 * Product.status
 */
export type Product$statusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Product without action
 */
export type ProductDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Product.d.ts.map