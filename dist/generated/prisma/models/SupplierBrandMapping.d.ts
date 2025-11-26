import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierBrandMapping
 *
 */
export type SupplierBrandMappingModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierBrandMappingPayload>;
export type AggregateSupplierBrandMapping = {
    _count: SupplierBrandMappingCountAggregateOutputType | null;
    _avg: SupplierBrandMappingAvgAggregateOutputType | null;
    _sum: SupplierBrandMappingSumAggregateOutputType | null;
    _min: SupplierBrandMappingMinAggregateOutputType | null;
    _max: SupplierBrandMappingMaxAggregateOutputType | null;
};
export type SupplierBrandMappingAvgAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
};
export type SupplierBrandMappingSumAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
};
export type SupplierBrandMappingMinAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    brand_name: string | null;
};
export type SupplierBrandMappingMaxAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    brand_name: string | null;
};
export type SupplierBrandMappingCountAggregateOutputType = {
    id: number;
    supplier_skills_id: number;
    brand_name: number;
    _all: number;
};
export type SupplierBrandMappingAvgAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
};
export type SupplierBrandMappingSumAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
};
export type SupplierBrandMappingMinAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    brand_name?: true;
};
export type SupplierBrandMappingMaxAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    brand_name?: true;
};
export type SupplierBrandMappingCountAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    brand_name?: true;
    _all?: true;
};
export type SupplierBrandMappingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBrandMapping to aggregate.
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBrandMappings to fetch.
     */
    orderBy?: Prisma.SupplierBrandMappingOrderByWithRelationInput | Prisma.SupplierBrandMappingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierBrandMappingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBrandMappings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBrandMappings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierBrandMappings
    **/
    _count?: true | SupplierBrandMappingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierBrandMappingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierBrandMappingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierBrandMappingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierBrandMappingMaxAggregateInputType;
};
export type GetSupplierBrandMappingAggregateType<T extends SupplierBrandMappingAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierBrandMapping]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierBrandMapping[P]> : Prisma.GetScalarType<T[P], AggregateSupplierBrandMapping[P]>;
};
export type SupplierBrandMappingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierBrandMappingWhereInput;
    orderBy?: Prisma.SupplierBrandMappingOrderByWithAggregationInput | Prisma.SupplierBrandMappingOrderByWithAggregationInput[];
    by: Prisma.SupplierBrandMappingScalarFieldEnum[] | Prisma.SupplierBrandMappingScalarFieldEnum;
    having?: Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierBrandMappingCountAggregateInputType | true;
    _avg?: SupplierBrandMappingAvgAggregateInputType;
    _sum?: SupplierBrandMappingSumAggregateInputType;
    _min?: SupplierBrandMappingMinAggregateInputType;
    _max?: SupplierBrandMappingMaxAggregateInputType;
};
export type SupplierBrandMappingGroupByOutputType = {
    id: number;
    supplier_skills_id: number;
    brand_name: string;
    _count: SupplierBrandMappingCountAggregateOutputType | null;
    _avg: SupplierBrandMappingAvgAggregateOutputType | null;
    _sum: SupplierBrandMappingSumAggregateOutputType | null;
    _min: SupplierBrandMappingMinAggregateOutputType | null;
    _max: SupplierBrandMappingMaxAggregateOutputType | null;
};
type GetSupplierBrandMappingGroupByPayload<T extends SupplierBrandMappingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierBrandMappingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierBrandMappingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierBrandMappingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierBrandMappingGroupByOutputType[P]>;
}>>;
export type SupplierBrandMappingWhereInput = {
    AND?: Prisma.SupplierBrandMappingWhereInput | Prisma.SupplierBrandMappingWhereInput[];
    OR?: Prisma.SupplierBrandMappingWhereInput[];
    NOT?: Prisma.SupplierBrandMappingWhereInput | Prisma.SupplierBrandMappingWhereInput[];
    id?: Prisma.IntFilter<"SupplierBrandMapping"> | number;
    supplier_skills_id?: Prisma.IntFilter<"SupplierBrandMapping"> | number;
    brand_name?: Prisma.StringFilter<"SupplierBrandMapping"> | string;
    skills?: Prisma.XOR<Prisma.SupplierSkillActivityScalarRelationFilter, Prisma.SupplierSkillActivityWhereInput>;
};
export type SupplierBrandMappingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
    skills?: Prisma.SupplierSkillActivityOrderByWithRelationInput;
};
export type SupplierBrandMappingWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SupplierBrandMappingWhereInput | Prisma.SupplierBrandMappingWhereInput[];
    OR?: Prisma.SupplierBrandMappingWhereInput[];
    NOT?: Prisma.SupplierBrandMappingWhereInput | Prisma.SupplierBrandMappingWhereInput[];
    supplier_skills_id?: Prisma.IntFilter<"SupplierBrandMapping"> | number;
    brand_name?: Prisma.StringFilter<"SupplierBrandMapping"> | string;
    skills?: Prisma.XOR<Prisma.SupplierSkillActivityScalarRelationFilter, Prisma.SupplierSkillActivityWhereInput>;
}, "id">;
export type SupplierBrandMappingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
    _count?: Prisma.SupplierBrandMappingCountOrderByAggregateInput;
    _avg?: Prisma.SupplierBrandMappingAvgOrderByAggregateInput;
    _max?: Prisma.SupplierBrandMappingMaxOrderByAggregateInput;
    _min?: Prisma.SupplierBrandMappingMinOrderByAggregateInput;
    _sum?: Prisma.SupplierBrandMappingSumOrderByAggregateInput;
};
export type SupplierBrandMappingScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput | Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput | Prisma.SupplierBrandMappingScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SupplierBrandMapping"> | number;
    supplier_skills_id?: Prisma.IntWithAggregatesFilter<"SupplierBrandMapping"> | number;
    brand_name?: Prisma.StringWithAggregatesFilter<"SupplierBrandMapping"> | string;
};
export type SupplierBrandMappingCreateInput = {
    brand_name: string;
    skills: Prisma.SupplierSkillActivityCreateNestedOneWithoutBrandsInput;
};
export type SupplierBrandMappingUncheckedCreateInput = {
    id?: number;
    supplier_skills_id: number;
    brand_name: string;
};
export type SupplierBrandMappingUpdateInput = {
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
    skills?: Prisma.SupplierSkillActivityUpdateOneRequiredWithoutBrandsNestedInput;
};
export type SupplierBrandMappingUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingCreateManyInput = {
    id?: number;
    supplier_skills_id: number;
    brand_name: string;
};
export type SupplierBrandMappingUpdateManyMutationInput = {
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingListRelationFilter = {
    every?: Prisma.SupplierBrandMappingWhereInput;
    some?: Prisma.SupplierBrandMappingWhereInput;
    none?: Prisma.SupplierBrandMappingWhereInput;
};
export type SupplierBrandMappingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierBrandMappingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type SupplierBrandMappingAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
};
export type SupplierBrandMappingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type SupplierBrandMappingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    brand_name?: Prisma.SortOrder;
};
export type SupplierBrandMappingSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
};
export type SupplierBrandMappingCreateNestedManyWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput> | Prisma.SupplierBrandMappingCreateWithoutSkillsInput[] | Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput | Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput[];
    createMany?: Prisma.SupplierBrandMappingCreateManySkillsInputEnvelope;
    connect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
};
export type SupplierBrandMappingUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput> | Prisma.SupplierBrandMappingCreateWithoutSkillsInput[] | Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput | Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput[];
    createMany?: Prisma.SupplierBrandMappingCreateManySkillsInputEnvelope;
    connect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
};
export type SupplierBrandMappingUpdateManyWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput> | Prisma.SupplierBrandMappingCreateWithoutSkillsInput[] | Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput | Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput[];
    upsert?: Prisma.SupplierBrandMappingUpsertWithWhereUniqueWithoutSkillsInput | Prisma.SupplierBrandMappingUpsertWithWhereUniqueWithoutSkillsInput[];
    createMany?: Prisma.SupplierBrandMappingCreateManySkillsInputEnvelope;
    set?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    disconnect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    delete?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    connect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    update?: Prisma.SupplierBrandMappingUpdateWithWhereUniqueWithoutSkillsInput | Prisma.SupplierBrandMappingUpdateWithWhereUniqueWithoutSkillsInput[];
    updateMany?: Prisma.SupplierBrandMappingUpdateManyWithWhereWithoutSkillsInput | Prisma.SupplierBrandMappingUpdateManyWithWhereWithoutSkillsInput[];
    deleteMany?: Prisma.SupplierBrandMappingScalarWhereInput | Prisma.SupplierBrandMappingScalarWhereInput[];
};
export type SupplierBrandMappingUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput> | Prisma.SupplierBrandMappingCreateWithoutSkillsInput[] | Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput | Prisma.SupplierBrandMappingCreateOrConnectWithoutSkillsInput[];
    upsert?: Prisma.SupplierBrandMappingUpsertWithWhereUniqueWithoutSkillsInput | Prisma.SupplierBrandMappingUpsertWithWhereUniqueWithoutSkillsInput[];
    createMany?: Prisma.SupplierBrandMappingCreateManySkillsInputEnvelope;
    set?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    disconnect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    delete?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    connect?: Prisma.SupplierBrandMappingWhereUniqueInput | Prisma.SupplierBrandMappingWhereUniqueInput[];
    update?: Prisma.SupplierBrandMappingUpdateWithWhereUniqueWithoutSkillsInput | Prisma.SupplierBrandMappingUpdateWithWhereUniqueWithoutSkillsInput[];
    updateMany?: Prisma.SupplierBrandMappingUpdateManyWithWhereWithoutSkillsInput | Prisma.SupplierBrandMappingUpdateManyWithWhereWithoutSkillsInput[];
    deleteMany?: Prisma.SupplierBrandMappingScalarWhereInput | Prisma.SupplierBrandMappingScalarWhereInput[];
};
export type SupplierBrandMappingCreateWithoutSkillsInput = {
    brand_name: string;
};
export type SupplierBrandMappingUncheckedCreateWithoutSkillsInput = {
    id?: number;
    brand_name: string;
};
export type SupplierBrandMappingCreateOrConnectWithoutSkillsInput = {
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput>;
};
export type SupplierBrandMappingCreateManySkillsInputEnvelope = {
    data: Prisma.SupplierBrandMappingCreateManySkillsInput | Prisma.SupplierBrandMappingCreateManySkillsInput[];
    skipDuplicates?: boolean;
};
export type SupplierBrandMappingUpsertWithWhereUniqueWithoutSkillsInput = {
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierBrandMappingUpdateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.SupplierBrandMappingCreateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedCreateWithoutSkillsInput>;
};
export type SupplierBrandMappingUpdateWithWhereUniqueWithoutSkillsInput = {
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierBrandMappingUpdateWithoutSkillsInput, Prisma.SupplierBrandMappingUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierBrandMappingUpdateManyWithWhereWithoutSkillsInput = {
    where: Prisma.SupplierBrandMappingScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierBrandMappingUpdateManyMutationInput, Prisma.SupplierBrandMappingUncheckedUpdateManyWithoutSkillsInput>;
};
export type SupplierBrandMappingScalarWhereInput = {
    AND?: Prisma.SupplierBrandMappingScalarWhereInput | Prisma.SupplierBrandMappingScalarWhereInput[];
    OR?: Prisma.SupplierBrandMappingScalarWhereInput[];
    NOT?: Prisma.SupplierBrandMappingScalarWhereInput | Prisma.SupplierBrandMappingScalarWhereInput[];
    id?: Prisma.IntFilter<"SupplierBrandMapping"> | number;
    supplier_skills_id?: Prisma.IntFilter<"SupplierBrandMapping"> | number;
    brand_name?: Prisma.StringFilter<"SupplierBrandMapping"> | string;
};
export type SupplierBrandMappingCreateManySkillsInput = {
    id?: number;
    brand_name: string;
};
export type SupplierBrandMappingUpdateWithoutSkillsInput = {
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingUncheckedUpdateManyWithoutSkillsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    brand_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierBrandMappingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    brand_name?: boolean;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBrandMapping"]>;
export type SupplierBrandMappingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    brand_name?: boolean;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBrandMapping"]>;
export type SupplierBrandMappingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    brand_name?: boolean;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBrandMapping"]>;
export type SupplierBrandMappingSelectScalar = {
    id?: boolean;
    supplier_skills_id?: boolean;
    brand_name?: boolean;
};
export type SupplierBrandMappingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "supplier_skills_id" | "brand_name", ExtArgs["result"]["supplierBrandMapping"]>;
export type SupplierBrandMappingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
};
export type SupplierBrandMappingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
};
export type SupplierBrandMappingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
};
export type $SupplierBrandMappingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierBrandMapping";
    objects: {
        skills: Prisma.$SupplierSkillActivityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        supplier_skills_id: number;
        brand_name: string;
    }, ExtArgs["result"]["supplierBrandMapping"]>;
    composites: {};
};
export type SupplierBrandMappingGetPayload<S extends boolean | null | undefined | SupplierBrandMappingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload, S>;
export type SupplierBrandMappingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierBrandMappingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierBrandMappingCountAggregateInputType | true;
};
export interface SupplierBrandMappingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierBrandMapping'];
        meta: {
            name: 'SupplierBrandMapping';
        };
    };
    /**
     * Find zero or one SupplierBrandMapping that matches the filter.
     * @param {SupplierBrandMappingFindUniqueArgs} args - Arguments to find a SupplierBrandMapping
     * @example
     * // Get one SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierBrandMappingFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierBrandMapping that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierBrandMappingFindUniqueOrThrowArgs} args - Arguments to find a SupplierBrandMapping
     * @example
     * // Get one SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierBrandMappingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierBrandMapping that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingFindFirstArgs} args - Arguments to find a SupplierBrandMapping
     * @example
     * // Get one SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierBrandMappingFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierBrandMapping that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingFindFirstOrThrowArgs} args - Arguments to find a SupplierBrandMapping
     * @example
     * // Get one SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierBrandMappingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierBrandMappings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierBrandMappings
     * const supplierBrandMappings = await prisma.supplierBrandMapping.findMany()
     *
     * // Get first 10 SupplierBrandMappings
     * const supplierBrandMappings = await prisma.supplierBrandMapping.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supplierBrandMappingWithIdOnly = await prisma.supplierBrandMapping.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SupplierBrandMappingFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierBrandMapping.
     * @param {SupplierBrandMappingCreateArgs} args - Arguments to create a SupplierBrandMapping.
     * @example
     * // Create one SupplierBrandMapping
     * const SupplierBrandMapping = await prisma.supplierBrandMapping.create({
     *   data: {
     *     // ... data to create a SupplierBrandMapping
     *   }
     * })
     *
     */
    create<T extends SupplierBrandMappingCreateArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierBrandMappings.
     * @param {SupplierBrandMappingCreateManyArgs} args - Arguments to create many SupplierBrandMappings.
     * @example
     * // Create many SupplierBrandMappings
     * const supplierBrandMapping = await prisma.supplierBrandMapping.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierBrandMappingCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierBrandMappings and returns the data saved in the database.
     * @param {SupplierBrandMappingCreateManyAndReturnArgs} args - Arguments to create many SupplierBrandMappings.
     * @example
     * // Create many SupplierBrandMappings
     * const supplierBrandMapping = await prisma.supplierBrandMapping.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierBrandMappings and only return the `id`
     * const supplierBrandMappingWithIdOnly = await prisma.supplierBrandMapping.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierBrandMappingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierBrandMapping.
     * @param {SupplierBrandMappingDeleteArgs} args - Arguments to delete one SupplierBrandMapping.
     * @example
     * // Delete one SupplierBrandMapping
     * const SupplierBrandMapping = await prisma.supplierBrandMapping.delete({
     *   where: {
     *     // ... filter to delete one SupplierBrandMapping
     *   }
     * })
     *
     */
    delete<T extends SupplierBrandMappingDeleteArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierBrandMapping.
     * @param {SupplierBrandMappingUpdateArgs} args - Arguments to update one SupplierBrandMapping.
     * @example
     * // Update one SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierBrandMappingUpdateArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierBrandMappings.
     * @param {SupplierBrandMappingDeleteManyArgs} args - Arguments to filter SupplierBrandMappings to delete.
     * @example
     * // Delete a few SupplierBrandMappings
     * const { count } = await prisma.supplierBrandMapping.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierBrandMappingDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierBrandMappingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierBrandMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierBrandMappings
     * const supplierBrandMapping = await prisma.supplierBrandMapping.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierBrandMappingUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierBrandMappings and returns the data updated in the database.
     * @param {SupplierBrandMappingUpdateManyAndReturnArgs} args - Arguments to update many SupplierBrandMappings.
     * @example
     * // Update many SupplierBrandMappings
     * const supplierBrandMapping = await prisma.supplierBrandMapping.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierBrandMappings and only return the `id`
     * const supplierBrandMappingWithIdOnly = await prisma.supplierBrandMapping.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SupplierBrandMappingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierBrandMapping.
     * @param {SupplierBrandMappingUpsertArgs} args - Arguments to update or create a SupplierBrandMapping.
     * @example
     * // Update or create a SupplierBrandMapping
     * const supplierBrandMapping = await prisma.supplierBrandMapping.upsert({
     *   create: {
     *     // ... data to create a SupplierBrandMapping
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierBrandMapping we want to update
     *   }
     * })
     */
    upsert<T extends SupplierBrandMappingUpsertArgs>(args: Prisma.SelectSubset<T, SupplierBrandMappingUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierBrandMappingClient<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierBrandMappings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingCountArgs} args - Arguments to filter SupplierBrandMappings to count.
     * @example
     * // Count the number of SupplierBrandMappings
     * const count = await prisma.supplierBrandMapping.count({
     *   where: {
     *     // ... the filter for the SupplierBrandMappings we want to count
     *   }
     * })
    **/
    count<T extends SupplierBrandMappingCountArgs>(args?: Prisma.Subset<T, SupplierBrandMappingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierBrandMappingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierBrandMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierBrandMappingAggregateArgs>(args: Prisma.Subset<T, SupplierBrandMappingAggregateArgs>): Prisma.PrismaPromise<GetSupplierBrandMappingAggregateType<T>>;
    /**
     * Group by SupplierBrandMapping.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBrandMappingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierBrandMappingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierBrandMappingGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierBrandMappingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierBrandMappingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierBrandMappingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierBrandMapping model
     */
    readonly fields: SupplierBrandMappingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierBrandMapping.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierBrandMappingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    skills<T extends Prisma.SupplierSkillActivityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierBrandMapping model
 */
export interface SupplierBrandMappingFieldRefs {
    readonly id: Prisma.FieldRef<"SupplierBrandMapping", 'Int'>;
    readonly supplier_skills_id: Prisma.FieldRef<"SupplierBrandMapping", 'Int'>;
    readonly brand_name: Prisma.FieldRef<"SupplierBrandMapping", 'String'>;
}
/**
 * SupplierBrandMapping findUnique
 */
export type SupplierBrandMappingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBrandMapping to fetch.
     */
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
};
/**
 * SupplierBrandMapping findUniqueOrThrow
 */
export type SupplierBrandMappingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBrandMapping to fetch.
     */
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
};
/**
 * SupplierBrandMapping findFirst
 */
export type SupplierBrandMappingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBrandMapping to fetch.
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBrandMappings to fetch.
     */
    orderBy?: Prisma.SupplierBrandMappingOrderByWithRelationInput | Prisma.SupplierBrandMappingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierBrandMappings.
     */
    cursor?: Prisma.SupplierBrandMappingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBrandMappings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBrandMappings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierBrandMappings.
     */
    distinct?: Prisma.SupplierBrandMappingScalarFieldEnum | Prisma.SupplierBrandMappingScalarFieldEnum[];
};
/**
 * SupplierBrandMapping findFirstOrThrow
 */
export type SupplierBrandMappingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBrandMapping to fetch.
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBrandMappings to fetch.
     */
    orderBy?: Prisma.SupplierBrandMappingOrderByWithRelationInput | Prisma.SupplierBrandMappingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierBrandMappings.
     */
    cursor?: Prisma.SupplierBrandMappingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBrandMappings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBrandMappings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierBrandMappings.
     */
    distinct?: Prisma.SupplierBrandMappingScalarFieldEnum | Prisma.SupplierBrandMappingScalarFieldEnum[];
};
/**
 * SupplierBrandMapping findMany
 */
export type SupplierBrandMappingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBrandMappings to fetch.
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBrandMappings to fetch.
     */
    orderBy?: Prisma.SupplierBrandMappingOrderByWithRelationInput | Prisma.SupplierBrandMappingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierBrandMappings.
     */
    cursor?: Prisma.SupplierBrandMappingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBrandMappings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBrandMappings.
     */
    skip?: number;
    distinct?: Prisma.SupplierBrandMappingScalarFieldEnum | Prisma.SupplierBrandMappingScalarFieldEnum[];
};
/**
 * SupplierBrandMapping create
 */
export type SupplierBrandMappingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierBrandMapping.
     */
    data: Prisma.XOR<Prisma.SupplierBrandMappingCreateInput, Prisma.SupplierBrandMappingUncheckedCreateInput>;
};
/**
 * SupplierBrandMapping createMany
 */
export type SupplierBrandMappingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierBrandMappings.
     */
    data: Prisma.SupplierBrandMappingCreateManyInput | Prisma.SupplierBrandMappingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierBrandMapping createManyAndReturn
 */
export type SupplierBrandMappingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierBrandMappings.
     */
    data: Prisma.SupplierBrandMappingCreateManyInput | Prisma.SupplierBrandMappingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierBrandMapping update
 */
export type SupplierBrandMappingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierBrandMapping.
     */
    data: Prisma.XOR<Prisma.SupplierBrandMappingUpdateInput, Prisma.SupplierBrandMappingUncheckedUpdateInput>;
    /**
     * Choose, which SupplierBrandMapping to update.
     */
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
};
/**
 * SupplierBrandMapping updateMany
 */
export type SupplierBrandMappingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierBrandMappings.
     */
    data: Prisma.XOR<Prisma.SupplierBrandMappingUpdateManyMutationInput, Prisma.SupplierBrandMappingUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierBrandMappings to update
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * Limit how many SupplierBrandMappings to update.
     */
    limit?: number;
};
/**
 * SupplierBrandMapping updateManyAndReturn
 */
export type SupplierBrandMappingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierBrandMappings.
     */
    data: Prisma.XOR<Prisma.SupplierBrandMappingUpdateManyMutationInput, Prisma.SupplierBrandMappingUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierBrandMappings to update
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * Limit how many SupplierBrandMappings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierBrandMapping upsert
 */
export type SupplierBrandMappingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierBrandMapping to update in case it exists.
     */
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
    /**
     * In case the SupplierBrandMapping found by the `where` argument doesn't exist, create a new SupplierBrandMapping with this data.
     */
    create: Prisma.XOR<Prisma.SupplierBrandMappingCreateInput, Prisma.SupplierBrandMappingUncheckedCreateInput>;
    /**
     * In case the SupplierBrandMapping was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierBrandMappingUpdateInput, Prisma.SupplierBrandMappingUncheckedUpdateInput>;
};
/**
 * SupplierBrandMapping delete
 */
export type SupplierBrandMappingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
    /**
     * Filter which SupplierBrandMapping to delete.
     */
    where: Prisma.SupplierBrandMappingWhereUniqueInput;
};
/**
 * SupplierBrandMapping deleteMany
 */
export type SupplierBrandMappingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBrandMappings to delete
     */
    where?: Prisma.SupplierBrandMappingWhereInput;
    /**
     * Limit how many SupplierBrandMappings to delete.
     */
    limit?: number;
};
/**
 * SupplierBrandMapping without action
 */
export type SupplierBrandMappingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBrandMapping
     */
    select?: Prisma.SupplierBrandMappingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBrandMapping
     */
    omit?: Prisma.SupplierBrandMappingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBrandMappingInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierBrandMapping.d.ts.map