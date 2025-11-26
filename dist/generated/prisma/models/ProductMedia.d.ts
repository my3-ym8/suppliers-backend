import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model ProductMedia
 *
 */
export type ProductMediaModel = runtime.Types.Result.DefaultSelection<Prisma.$ProductMediaPayload>;
export type AggregateProductMedia = {
    _count: ProductMediaCountAggregateOutputType | null;
    _avg: ProductMediaAvgAggregateOutputType | null;
    _sum: ProductMediaSumAggregateOutputType | null;
    _min: ProductMediaMinAggregateOutputType | null;
    _max: ProductMediaMaxAggregateOutputType | null;
};
export type ProductMediaAvgAggregateOutputType = {
    media_id: number | null;
    product_id: number | null;
    file_id: number | null;
    sort_order: number | null;
};
export type ProductMediaSumAggregateOutputType = {
    media_id: number | null;
    product_id: number | null;
    file_id: number | null;
    sort_order: number | null;
};
export type ProductMediaMinAggregateOutputType = {
    media_id: number | null;
    product_id: number | null;
    file_id: number | null;
    media_type: string | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type ProductMediaMaxAggregateOutputType = {
    media_id: number | null;
    product_id: number | null;
    file_id: number | null;
    media_type: string | null;
    sort_order: number | null;
    created_at: Date | null;
};
export type ProductMediaCountAggregateOutputType = {
    media_id: number;
    product_id: number;
    file_id: number;
    media_type: number;
    sort_order: number;
    created_at: number;
    _all: number;
};
export type ProductMediaAvgAggregateInputType = {
    media_id?: true;
    product_id?: true;
    file_id?: true;
    sort_order?: true;
};
export type ProductMediaSumAggregateInputType = {
    media_id?: true;
    product_id?: true;
    file_id?: true;
    sort_order?: true;
};
export type ProductMediaMinAggregateInputType = {
    media_id?: true;
    product_id?: true;
    file_id?: true;
    media_type?: true;
    sort_order?: true;
    created_at?: true;
};
export type ProductMediaMaxAggregateInputType = {
    media_id?: true;
    product_id?: true;
    file_id?: true;
    media_type?: true;
    sort_order?: true;
    created_at?: true;
};
export type ProductMediaCountAggregateInputType = {
    media_id?: true;
    product_id?: true;
    file_id?: true;
    media_type?: true;
    sort_order?: true;
    created_at?: true;
    _all?: true;
};
export type ProductMediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMedia to aggregate.
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductMedias to fetch.
     */
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductMedias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductMedias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ProductMedias
    **/
    _count?: true | ProductMediaCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ProductMediaAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ProductMediaSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ProductMediaMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ProductMediaMaxAggregateInputType;
};
export type GetProductMediaAggregateType<T extends ProductMediaAggregateArgs> = {
    [P in keyof T & keyof AggregateProductMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProductMedia[P]> : Prisma.GetScalarType<T[P], AggregateProductMedia[P]>;
};
export type ProductMediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductMediaWhereInput;
    orderBy?: Prisma.ProductMediaOrderByWithAggregationInput | Prisma.ProductMediaOrderByWithAggregationInput[];
    by: Prisma.ProductMediaScalarFieldEnum[] | Prisma.ProductMediaScalarFieldEnum;
    having?: Prisma.ProductMediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductMediaCountAggregateInputType | true;
    _avg?: ProductMediaAvgAggregateInputType;
    _sum?: ProductMediaSumAggregateInputType;
    _min?: ProductMediaMinAggregateInputType;
    _max?: ProductMediaMaxAggregateInputType;
};
export type ProductMediaGroupByOutputType = {
    media_id: number;
    product_id: number;
    file_id: number;
    media_type: string | null;
    sort_order: number;
    created_at: Date;
    _count: ProductMediaCountAggregateOutputType | null;
    _avg: ProductMediaAvgAggregateOutputType | null;
    _sum: ProductMediaSumAggregateOutputType | null;
    _min: ProductMediaMinAggregateOutputType | null;
    _max: ProductMediaMaxAggregateOutputType | null;
};
type GetProductMediaGroupByPayload<T extends ProductMediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProductMediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProductMediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProductMediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProductMediaGroupByOutputType[P]>;
}>>;
export type ProductMediaWhereInput = {
    AND?: Prisma.ProductMediaWhereInput | Prisma.ProductMediaWhereInput[];
    OR?: Prisma.ProductMediaWhereInput[];
    NOT?: Prisma.ProductMediaWhereInput | Prisma.ProductMediaWhereInput[];
    media_id?: Prisma.IntFilter<"ProductMedia"> | number;
    product_id?: Prisma.IntFilter<"ProductMedia"> | number;
    file_id?: Prisma.IntFilter<"ProductMedia"> | number;
    media_type?: Prisma.StringNullableFilter<"ProductMedia"> | string | null;
    sort_order?: Prisma.IntFilter<"ProductMedia"> | number;
    created_at?: Prisma.DateTimeFilter<"ProductMedia"> | Date | string;
    file?: Prisma.XOR<Prisma.FileScalarRelationFilter, Prisma.FileWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type ProductMediaOrderByWithRelationInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    file?: Prisma.FileOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type ProductMediaWhereUniqueInput = Prisma.AtLeast<{
    media_id?: number;
    AND?: Prisma.ProductMediaWhereInput | Prisma.ProductMediaWhereInput[];
    OR?: Prisma.ProductMediaWhereInput[];
    NOT?: Prisma.ProductMediaWhereInput | Prisma.ProductMediaWhereInput[];
    product_id?: Prisma.IntFilter<"ProductMedia"> | number;
    file_id?: Prisma.IntFilter<"ProductMedia"> | number;
    media_type?: Prisma.StringNullableFilter<"ProductMedia"> | string | null;
    sort_order?: Prisma.IntFilter<"ProductMedia"> | number;
    created_at?: Prisma.DateTimeFilter<"ProductMedia"> | Date | string;
    file?: Prisma.XOR<Prisma.FileScalarRelationFilter, Prisma.FileWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "media_id">;
export type ProductMediaOrderByWithAggregationInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ProductMediaCountOrderByAggregateInput;
    _avg?: Prisma.ProductMediaAvgOrderByAggregateInput;
    _max?: Prisma.ProductMediaMaxOrderByAggregateInput;
    _min?: Prisma.ProductMediaMinOrderByAggregateInput;
    _sum?: Prisma.ProductMediaSumOrderByAggregateInput;
};
export type ProductMediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProductMediaScalarWhereWithAggregatesInput | Prisma.ProductMediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProductMediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProductMediaScalarWhereWithAggregatesInput | Prisma.ProductMediaScalarWhereWithAggregatesInput[];
    media_id?: Prisma.IntWithAggregatesFilter<"ProductMedia"> | number;
    product_id?: Prisma.IntWithAggregatesFilter<"ProductMedia"> | number;
    file_id?: Prisma.IntWithAggregatesFilter<"ProductMedia"> | number;
    media_type?: Prisma.StringNullableWithAggregatesFilter<"ProductMedia"> | string | null;
    sort_order?: Prisma.IntWithAggregatesFilter<"ProductMedia"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ProductMedia"> | Date | string;
};
export type ProductMediaCreateInput = {
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
    file: Prisma.FileCreateNestedOneWithoutProductMediaInput;
    product: Prisma.ProductCreateNestedOneWithoutMediaInput;
};
export type ProductMediaUncheckedCreateInput = {
    media_id?: number;
    product_id: number;
    file_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaUpdateInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    file?: Prisma.FileUpdateOneRequiredWithoutProductMediaNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutMediaNestedInput;
};
export type ProductMediaUncheckedUpdateInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaCreateManyInput = {
    media_id?: number;
    product_id: number;
    file_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaUpdateManyMutationInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaUncheckedUpdateManyInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaListRelationFilter = {
    every?: Prisma.ProductMediaWhereInput;
    some?: Prisma.ProductMediaWhereInput;
    none?: Prisma.ProductMediaWhereInput;
};
export type ProductMediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ProductMediaCountOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ProductMediaAvgOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type ProductMediaMaxOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ProductMediaMinOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ProductMediaSumOrderByAggregateInput = {
    media_id?: Prisma.SortOrder;
    product_id?: Prisma.SortOrder;
    file_id?: Prisma.SortOrder;
    sort_order?: Prisma.SortOrder;
};
export type ProductMediaCreateNestedManyWithoutFileInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput> | Prisma.ProductMediaCreateWithoutFileInput[] | Prisma.ProductMediaUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutFileInput | Prisma.ProductMediaCreateOrConnectWithoutFileInput[];
    createMany?: Prisma.ProductMediaCreateManyFileInputEnvelope;
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
};
export type ProductMediaUncheckedCreateNestedManyWithoutFileInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput> | Prisma.ProductMediaCreateWithoutFileInput[] | Prisma.ProductMediaUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutFileInput | Prisma.ProductMediaCreateOrConnectWithoutFileInput[];
    createMany?: Prisma.ProductMediaCreateManyFileInputEnvelope;
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
};
export type ProductMediaUpdateManyWithoutFileNestedInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput> | Prisma.ProductMediaCreateWithoutFileInput[] | Prisma.ProductMediaUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutFileInput | Prisma.ProductMediaCreateOrConnectWithoutFileInput[];
    upsert?: Prisma.ProductMediaUpsertWithWhereUniqueWithoutFileInput | Prisma.ProductMediaUpsertWithWhereUniqueWithoutFileInput[];
    createMany?: Prisma.ProductMediaCreateManyFileInputEnvelope;
    set?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    disconnect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    delete?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    update?: Prisma.ProductMediaUpdateWithWhereUniqueWithoutFileInput | Prisma.ProductMediaUpdateWithWhereUniqueWithoutFileInput[];
    updateMany?: Prisma.ProductMediaUpdateManyWithWhereWithoutFileInput | Prisma.ProductMediaUpdateManyWithWhereWithoutFileInput[];
    deleteMany?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
};
export type ProductMediaUncheckedUpdateManyWithoutFileNestedInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput> | Prisma.ProductMediaCreateWithoutFileInput[] | Prisma.ProductMediaUncheckedCreateWithoutFileInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutFileInput | Prisma.ProductMediaCreateOrConnectWithoutFileInput[];
    upsert?: Prisma.ProductMediaUpsertWithWhereUniqueWithoutFileInput | Prisma.ProductMediaUpsertWithWhereUniqueWithoutFileInput[];
    createMany?: Prisma.ProductMediaCreateManyFileInputEnvelope;
    set?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    disconnect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    delete?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    update?: Prisma.ProductMediaUpdateWithWhereUniqueWithoutFileInput | Prisma.ProductMediaUpdateWithWhereUniqueWithoutFileInput[];
    updateMany?: Prisma.ProductMediaUpdateManyWithWhereWithoutFileInput | Prisma.ProductMediaUpdateManyWithWhereWithoutFileInput[];
    deleteMany?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
};
export type ProductMediaCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput> | Prisma.ProductMediaCreateWithoutProductInput[] | Prisma.ProductMediaUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutProductInput | Prisma.ProductMediaCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductMediaCreateManyProductInputEnvelope;
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
};
export type ProductMediaUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput> | Prisma.ProductMediaCreateWithoutProductInput[] | Prisma.ProductMediaUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutProductInput | Prisma.ProductMediaCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.ProductMediaCreateManyProductInputEnvelope;
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
};
export type ProductMediaUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput> | Prisma.ProductMediaCreateWithoutProductInput[] | Prisma.ProductMediaUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutProductInput | Prisma.ProductMediaCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductMediaUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductMediaUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductMediaCreateManyProductInputEnvelope;
    set?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    disconnect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    delete?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    update?: Prisma.ProductMediaUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductMediaUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductMediaUpdateManyWithWhereWithoutProductInput | Prisma.ProductMediaUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
};
export type ProductMediaUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput> | Prisma.ProductMediaCreateWithoutProductInput[] | Prisma.ProductMediaUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.ProductMediaCreateOrConnectWithoutProductInput | Prisma.ProductMediaCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.ProductMediaUpsertWithWhereUniqueWithoutProductInput | Prisma.ProductMediaUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.ProductMediaCreateManyProductInputEnvelope;
    set?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    disconnect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    delete?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    connect?: Prisma.ProductMediaWhereUniqueInput | Prisma.ProductMediaWhereUniqueInput[];
    update?: Prisma.ProductMediaUpdateWithWhereUniqueWithoutProductInput | Prisma.ProductMediaUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.ProductMediaUpdateManyWithWhereWithoutProductInput | Prisma.ProductMediaUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
};
export type ProductMediaCreateWithoutFileInput = {
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutMediaInput;
};
export type ProductMediaUncheckedCreateWithoutFileInput = {
    media_id?: number;
    product_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaCreateOrConnectWithoutFileInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput>;
};
export type ProductMediaCreateManyFileInputEnvelope = {
    data: Prisma.ProductMediaCreateManyFileInput | Prisma.ProductMediaCreateManyFileInput[];
    skipDuplicates?: boolean;
};
export type ProductMediaUpsertWithWhereUniqueWithoutFileInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductMediaUpdateWithoutFileInput, Prisma.ProductMediaUncheckedUpdateWithoutFileInput>;
    create: Prisma.XOR<Prisma.ProductMediaCreateWithoutFileInput, Prisma.ProductMediaUncheckedCreateWithoutFileInput>;
};
export type ProductMediaUpdateWithWhereUniqueWithoutFileInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductMediaUpdateWithoutFileInput, Prisma.ProductMediaUncheckedUpdateWithoutFileInput>;
};
export type ProductMediaUpdateManyWithWhereWithoutFileInput = {
    where: Prisma.ProductMediaScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductMediaUpdateManyMutationInput, Prisma.ProductMediaUncheckedUpdateManyWithoutFileInput>;
};
export type ProductMediaScalarWhereInput = {
    AND?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
    OR?: Prisma.ProductMediaScalarWhereInput[];
    NOT?: Prisma.ProductMediaScalarWhereInput | Prisma.ProductMediaScalarWhereInput[];
    media_id?: Prisma.IntFilter<"ProductMedia"> | number;
    product_id?: Prisma.IntFilter<"ProductMedia"> | number;
    file_id?: Prisma.IntFilter<"ProductMedia"> | number;
    media_type?: Prisma.StringNullableFilter<"ProductMedia"> | string | null;
    sort_order?: Prisma.IntFilter<"ProductMedia"> | number;
    created_at?: Prisma.DateTimeFilter<"ProductMedia"> | Date | string;
};
export type ProductMediaCreateWithoutProductInput = {
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
    file: Prisma.FileCreateNestedOneWithoutProductMediaInput;
};
export type ProductMediaUncheckedCreateWithoutProductInput = {
    media_id?: number;
    file_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaCreateOrConnectWithoutProductInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput>;
};
export type ProductMediaCreateManyProductInputEnvelope = {
    data: Prisma.ProductMediaCreateManyProductInput | Prisma.ProductMediaCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type ProductMediaUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.ProductMediaUpdateWithoutProductInput, Prisma.ProductMediaUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.ProductMediaCreateWithoutProductInput, Prisma.ProductMediaUncheckedCreateWithoutProductInput>;
};
export type ProductMediaUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.ProductMediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.ProductMediaUpdateWithoutProductInput, Prisma.ProductMediaUncheckedUpdateWithoutProductInput>;
};
export type ProductMediaUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.ProductMediaScalarWhereInput;
    data: Prisma.XOR<Prisma.ProductMediaUpdateManyMutationInput, Prisma.ProductMediaUncheckedUpdateManyWithoutProductInput>;
};
export type ProductMediaCreateManyFileInput = {
    media_id?: number;
    product_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaUpdateWithoutFileInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutMediaNestedInput;
};
export type ProductMediaUncheckedUpdateWithoutFileInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaUncheckedUpdateManyWithoutFileInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    product_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaCreateManyProductInput = {
    media_id?: number;
    file_id: number;
    media_type?: string | null;
    sort_order?: number;
    created_at?: Date | string;
};
export type ProductMediaUpdateWithoutProductInput = {
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    file?: Prisma.FileUpdateOneRequiredWithoutProductMediaNestedInput;
};
export type ProductMediaUncheckedUpdateWithoutProductInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaUncheckedUpdateManyWithoutProductInput = {
    media_id?: Prisma.IntFieldUpdateOperationsInput | number;
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    media_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sort_order?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProductMediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    product_id?: boolean;
    file_id?: boolean;
    media_type?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productMedia"]>;
export type ProductMediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    product_id?: boolean;
    file_id?: boolean;
    media_type?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productMedia"]>;
export type ProductMediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    media_id?: boolean;
    product_id?: boolean;
    file_id?: boolean;
    media_type?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["productMedia"]>;
export type ProductMediaSelectScalar = {
    media_id?: boolean;
    product_id?: boolean;
    file_id?: boolean;
    media_type?: boolean;
    sort_order?: boolean;
    created_at?: boolean;
};
export type ProductMediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"media_id" | "product_id" | "file_id" | "media_type" | "sort_order" | "created_at", ExtArgs["result"]["productMedia"]>;
export type ProductMediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductMediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type ProductMediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    file?: boolean | Prisma.FileDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $ProductMediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ProductMedia";
    objects: {
        file: Prisma.$FilePayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        media_id: number;
        product_id: number;
        file_id: number;
        media_type: string | null;
        sort_order: number;
        created_at: Date;
    }, ExtArgs["result"]["productMedia"]>;
    composites: {};
};
export type ProductMediaGetPayload<S extends boolean | null | undefined | ProductMediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload, S>;
export type ProductMediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProductMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProductMediaCountAggregateInputType | true;
};
export interface ProductMediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ProductMedia'];
        meta: {
            name: 'ProductMedia';
        };
    };
    /**
     * Find zero or one ProductMedia that matches the filter.
     * @param {ProductMediaFindUniqueArgs} args - Arguments to find a ProductMedia
     * @example
     * // Get one ProductMedia
     * const productMedia = await prisma.productMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductMediaFindUniqueArgs>(args: Prisma.SelectSubset<T, ProductMediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ProductMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductMediaFindUniqueOrThrowArgs} args - Arguments to find a ProductMedia
     * @example
     * // Get one ProductMedia
     * const productMedia = await prisma.productMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductMediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProductMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaFindFirstArgs} args - Arguments to find a ProductMedia
     * @example
     * // Get one ProductMedia
     * const productMedia = await prisma.productMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductMediaFindFirstArgs>(args?: Prisma.SelectSubset<T, ProductMediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ProductMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaFindFirstOrThrowArgs} args - Arguments to find a ProductMedia
     * @example
     * // Get one ProductMedia
     * const productMedia = await prisma.productMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductMediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProductMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ProductMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductMedias
     * const productMedias = await prisma.productMedia.findMany()
     *
     * // Get first 10 ProductMedias
     * const productMedias = await prisma.productMedia.findMany({ take: 10 })
     *
     * // Only select the `media_id`
     * const productMediaWithMedia_idOnly = await prisma.productMedia.findMany({ select: { media_id: true } })
     *
     */
    findMany<T extends ProductMediaFindManyArgs>(args?: Prisma.SelectSubset<T, ProductMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ProductMedia.
     * @param {ProductMediaCreateArgs} args - Arguments to create a ProductMedia.
     * @example
     * // Create one ProductMedia
     * const ProductMedia = await prisma.productMedia.create({
     *   data: {
     *     // ... data to create a ProductMedia
     *   }
     * })
     *
     */
    create<T extends ProductMediaCreateArgs>(args: Prisma.SelectSubset<T, ProductMediaCreateArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ProductMedias.
     * @param {ProductMediaCreateManyArgs} args - Arguments to create many ProductMedias.
     * @example
     * // Create many ProductMedias
     * const productMedia = await prisma.productMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductMediaCreateManyArgs>(args?: Prisma.SelectSubset<T, ProductMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ProductMedias and returns the data saved in the database.
     * @param {ProductMediaCreateManyAndReturnArgs} args - Arguments to create many ProductMedias.
     * @example
     * // Create many ProductMedias
     * const productMedia = await prisma.productMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ProductMedias and only return the `media_id`
     * const productMediaWithMedia_idOnly = await prisma.productMedia.createManyAndReturn({
     *   select: { media_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ProductMediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProductMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ProductMedia.
     * @param {ProductMediaDeleteArgs} args - Arguments to delete one ProductMedia.
     * @example
     * // Delete one ProductMedia
     * const ProductMedia = await prisma.productMedia.delete({
     *   where: {
     *     // ... filter to delete one ProductMedia
     *   }
     * })
     *
     */
    delete<T extends ProductMediaDeleteArgs>(args: Prisma.SelectSubset<T, ProductMediaDeleteArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ProductMedia.
     * @param {ProductMediaUpdateArgs} args - Arguments to update one ProductMedia.
     * @example
     * // Update one ProductMedia
     * const productMedia = await prisma.productMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductMediaUpdateArgs>(args: Prisma.SelectSubset<T, ProductMediaUpdateArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ProductMedias.
     * @param {ProductMediaDeleteManyArgs} args - Arguments to filter ProductMedias to delete.
     * @example
     * // Delete a few ProductMedias
     * const { count } = await prisma.productMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductMediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProductMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductMedias
     * const productMedia = await prisma.productMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductMediaUpdateManyArgs>(args: Prisma.SelectSubset<T, ProductMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ProductMedias and returns the data updated in the database.
     * @param {ProductMediaUpdateManyAndReturnArgs} args - Arguments to update many ProductMedias.
     * @example
     * // Update many ProductMedias
     * const productMedia = await prisma.productMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ProductMedias and only return the `media_id`
     * const productMediaWithMedia_idOnly = await prisma.productMedia.updateManyAndReturn({
     *   select: { media_id: true },
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
    updateManyAndReturn<T extends ProductMediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProductMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ProductMedia.
     * @param {ProductMediaUpsertArgs} args - Arguments to update or create a ProductMedia.
     * @example
     * // Update or create a ProductMedia
     * const productMedia = await prisma.productMedia.upsert({
     *   create: {
     *     // ... data to create a ProductMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductMedia we want to update
     *   }
     * })
     */
    upsert<T extends ProductMediaUpsertArgs>(args: Prisma.SelectSubset<T, ProductMediaUpsertArgs<ExtArgs>>): Prisma.Prisma__ProductMediaClient<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ProductMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaCountArgs} args - Arguments to filter ProductMedias to count.
     * @example
     * // Count the number of ProductMedias
     * const count = await prisma.productMedia.count({
     *   where: {
     *     // ... the filter for the ProductMedias we want to count
     *   }
     * })
    **/
    count<T extends ProductMediaCountArgs>(args?: Prisma.Subset<T, ProductMediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProductMediaCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ProductMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductMediaAggregateArgs>(args: Prisma.Subset<T, ProductMediaAggregateArgs>): Prisma.PrismaPromise<GetProductMediaAggregateType<T>>;
    /**
     * Group by ProductMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductMediaGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ProductMediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProductMediaGroupByArgs['orderBy'];
    } : {
        orderBy?: ProductMediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProductMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ProductMedia model
     */
    readonly fields: ProductMediaFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ProductMedia.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ProductMediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    file<T extends Prisma.FileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FileDefaultArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the ProductMedia model
 */
export interface ProductMediaFieldRefs {
    readonly media_id: Prisma.FieldRef<"ProductMedia", 'Int'>;
    readonly product_id: Prisma.FieldRef<"ProductMedia", 'Int'>;
    readonly file_id: Prisma.FieldRef<"ProductMedia", 'Int'>;
    readonly media_type: Prisma.FieldRef<"ProductMedia", 'String'>;
    readonly sort_order: Prisma.FieldRef<"ProductMedia", 'Int'>;
    readonly created_at: Prisma.FieldRef<"ProductMedia", 'DateTime'>;
}
/**
 * ProductMedia findUnique
 */
export type ProductMediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductMedia to fetch.
     */
    where: Prisma.ProductMediaWhereUniqueInput;
};
/**
 * ProductMedia findUniqueOrThrow
 */
export type ProductMediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductMedia to fetch.
     */
    where: Prisma.ProductMediaWhereUniqueInput;
};
/**
 * ProductMedia findFirst
 */
export type ProductMediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductMedia to fetch.
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductMedias to fetch.
     */
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductMedias.
     */
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductMedias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductMedias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductMedias.
     */
    distinct?: Prisma.ProductMediaScalarFieldEnum | Prisma.ProductMediaScalarFieldEnum[];
};
/**
 * ProductMedia findFirstOrThrow
 */
export type ProductMediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductMedia to fetch.
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductMedias to fetch.
     */
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ProductMedias.
     */
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductMedias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductMedias.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ProductMedias.
     */
    distinct?: Prisma.ProductMediaScalarFieldEnum | Prisma.ProductMediaScalarFieldEnum[];
};
/**
 * ProductMedia findMany
 */
export type ProductMediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ProductMedias to fetch.
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ProductMedias to fetch.
     */
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ProductMedias.
     */
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ProductMedias from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ProductMedias.
     */
    skip?: number;
    distinct?: Prisma.ProductMediaScalarFieldEnum | Prisma.ProductMediaScalarFieldEnum[];
};
/**
 * ProductMedia create
 */
export type ProductMediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ProductMedia.
     */
    data: Prisma.XOR<Prisma.ProductMediaCreateInput, Prisma.ProductMediaUncheckedCreateInput>;
};
/**
 * ProductMedia createMany
 */
export type ProductMediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductMedias.
     */
    data: Prisma.ProductMediaCreateManyInput | Prisma.ProductMediaCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ProductMedia createManyAndReturn
 */
export type ProductMediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMedia
     */
    select?: Prisma.ProductMediaSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductMedia
     */
    omit?: Prisma.ProductMediaOmit<ExtArgs> | null;
    /**
     * The data used to create many ProductMedias.
     */
    data: Prisma.ProductMediaCreateManyInput | Prisma.ProductMediaCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductMediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductMedia update
 */
export type ProductMediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ProductMedia.
     */
    data: Prisma.XOR<Prisma.ProductMediaUpdateInput, Prisma.ProductMediaUncheckedUpdateInput>;
    /**
     * Choose, which ProductMedia to update.
     */
    where: Prisma.ProductMediaWhereUniqueInput;
};
/**
 * ProductMedia updateMany
 */
export type ProductMediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductMedias.
     */
    data: Prisma.XOR<Prisma.ProductMediaUpdateManyMutationInput, Prisma.ProductMediaUncheckedUpdateManyInput>;
    /**
     * Filter which ProductMedias to update
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * Limit how many ProductMedias to update.
     */
    limit?: number;
};
/**
 * ProductMedia updateManyAndReturn
 */
export type ProductMediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMedia
     */
    select?: Prisma.ProductMediaSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductMedia
     */
    omit?: Prisma.ProductMediaOmit<ExtArgs> | null;
    /**
     * The data used to update ProductMedias.
     */
    data: Prisma.XOR<Prisma.ProductMediaUpdateManyMutationInput, Prisma.ProductMediaUncheckedUpdateManyInput>;
    /**
     * Filter which ProductMedias to update
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * Limit how many ProductMedias to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductMediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ProductMedia upsert
 */
export type ProductMediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ProductMedia to update in case it exists.
     */
    where: Prisma.ProductMediaWhereUniqueInput;
    /**
     * In case the ProductMedia found by the `where` argument doesn't exist, create a new ProductMedia with this data.
     */
    create: Prisma.XOR<Prisma.ProductMediaCreateInput, Prisma.ProductMediaUncheckedCreateInput>;
    /**
     * In case the ProductMedia was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ProductMediaUpdateInput, Prisma.ProductMediaUncheckedUpdateInput>;
};
/**
 * ProductMedia delete
 */
export type ProductMediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ProductMedia to delete.
     */
    where: Prisma.ProductMediaWhereUniqueInput;
};
/**
 * ProductMedia deleteMany
 */
export type ProductMediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ProductMedias to delete
     */
    where?: Prisma.ProductMediaWhereInput;
    /**
     * Limit how many ProductMedias to delete.
     */
    limit?: number;
};
/**
 * ProductMedia without action
 */
export type ProductMediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ProductMedia.d.ts.map