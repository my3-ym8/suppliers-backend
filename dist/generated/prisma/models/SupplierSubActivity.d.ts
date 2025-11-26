import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierSubActivity
 *
 */
export type SupplierSubActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierSubActivityPayload>;
export type AggregateSupplierSubActivity = {
    _count: SupplierSubActivityCountAggregateOutputType | null;
    _avg: SupplierSubActivityAvgAggregateOutputType | null;
    _sum: SupplierSubActivitySumAggregateOutputType | null;
    _min: SupplierSubActivityMinAggregateOutputType | null;
    _max: SupplierSubActivityMaxAggregateOutputType | null;
};
export type SupplierSubActivityAvgAggregateOutputType = {
    id: number | null;
    supplier_main_activity_id: number | null;
};
export type SupplierSubActivitySumAggregateOutputType = {
    id: number | null;
    supplier_main_activity_id: number | null;
};
export type SupplierSubActivityMinAggregateOutputType = {
    id: number | null;
    supplier_main_activity_id: number | null;
    sub_category_name: string | null;
};
export type SupplierSubActivityMaxAggregateOutputType = {
    id: number | null;
    supplier_main_activity_id: number | null;
    sub_category_name: string | null;
};
export type SupplierSubActivityCountAggregateOutputType = {
    id: number;
    supplier_main_activity_id: number;
    sub_category_name: number;
    _all: number;
};
export type SupplierSubActivityAvgAggregateInputType = {
    id?: true;
    supplier_main_activity_id?: true;
};
export type SupplierSubActivitySumAggregateInputType = {
    id?: true;
    supplier_main_activity_id?: true;
};
export type SupplierSubActivityMinAggregateInputType = {
    id?: true;
    supplier_main_activity_id?: true;
    sub_category_name?: true;
};
export type SupplierSubActivityMaxAggregateInputType = {
    id?: true;
    supplier_main_activity_id?: true;
    sub_category_name?: true;
};
export type SupplierSubActivityCountAggregateInputType = {
    id?: true;
    supplier_main_activity_id?: true;
    sub_category_name?: true;
    _all?: true;
};
export type SupplierSubActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierSubActivity to aggregate.
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSubActivities to fetch.
     */
    orderBy?: Prisma.SupplierSubActivityOrderByWithRelationInput | Prisma.SupplierSubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierSubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierSubActivities
    **/
    _count?: true | SupplierSubActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierSubActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierSubActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierSubActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierSubActivityMaxAggregateInputType;
};
export type GetSupplierSubActivityAggregateType<T extends SupplierSubActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierSubActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierSubActivity[P]> : Prisma.GetScalarType<T[P], AggregateSupplierSubActivity[P]>;
};
export type SupplierSubActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierSubActivityWhereInput;
    orderBy?: Prisma.SupplierSubActivityOrderByWithAggregationInput | Prisma.SupplierSubActivityOrderByWithAggregationInput[];
    by: Prisma.SupplierSubActivityScalarFieldEnum[] | Prisma.SupplierSubActivityScalarFieldEnum;
    having?: Prisma.SupplierSubActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierSubActivityCountAggregateInputType | true;
    _avg?: SupplierSubActivityAvgAggregateInputType;
    _sum?: SupplierSubActivitySumAggregateInputType;
    _min?: SupplierSubActivityMinAggregateInputType;
    _max?: SupplierSubActivityMaxAggregateInputType;
};
export type SupplierSubActivityGroupByOutputType = {
    id: number;
    supplier_main_activity_id: number;
    sub_category_name: string;
    _count: SupplierSubActivityCountAggregateOutputType | null;
    _avg: SupplierSubActivityAvgAggregateOutputType | null;
    _sum: SupplierSubActivitySumAggregateOutputType | null;
    _min: SupplierSubActivityMinAggregateOutputType | null;
    _max: SupplierSubActivityMaxAggregateOutputType | null;
};
type GetSupplierSubActivityGroupByPayload<T extends SupplierSubActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierSubActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierSubActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierSubActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierSubActivityGroupByOutputType[P]>;
}>>;
export type SupplierSubActivityWhereInput = {
    AND?: Prisma.SupplierSubActivityWhereInput | Prisma.SupplierSubActivityWhereInput[];
    OR?: Prisma.SupplierSubActivityWhereInput[];
    NOT?: Prisma.SupplierSubActivityWhereInput | Prisma.SupplierSubActivityWhereInput[];
    id?: Prisma.IntFilter<"SupplierSubActivity"> | number;
    supplier_main_activity_id?: Prisma.IntFilter<"SupplierSubActivity"> | number;
    sub_category_name?: Prisma.StringFilter<"SupplierSubActivity"> | string;
    mainActivity?: Prisma.XOR<Prisma.SupplierMainActivityScalarRelationFilter, Prisma.SupplierMainActivityWhereInput>;
};
export type SupplierSubActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
    sub_category_name?: Prisma.SortOrder;
    mainActivity?: Prisma.SupplierMainActivityOrderByWithRelationInput;
};
export type SupplierSubActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SupplierSubActivityWhereInput | Prisma.SupplierSubActivityWhereInput[];
    OR?: Prisma.SupplierSubActivityWhereInput[];
    NOT?: Prisma.SupplierSubActivityWhereInput | Prisma.SupplierSubActivityWhereInput[];
    supplier_main_activity_id?: Prisma.IntFilter<"SupplierSubActivity"> | number;
    sub_category_name?: Prisma.StringFilter<"SupplierSubActivity"> | string;
    mainActivity?: Prisma.XOR<Prisma.SupplierMainActivityScalarRelationFilter, Prisma.SupplierMainActivityWhereInput>;
}, "id">;
export type SupplierSubActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
    sub_category_name?: Prisma.SortOrder;
    _count?: Prisma.SupplierSubActivityCountOrderByAggregateInput;
    _avg?: Prisma.SupplierSubActivityAvgOrderByAggregateInput;
    _max?: Prisma.SupplierSubActivityMaxOrderByAggregateInput;
    _min?: Prisma.SupplierSubActivityMinOrderByAggregateInput;
    _sum?: Prisma.SupplierSubActivitySumOrderByAggregateInput;
};
export type SupplierSubActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierSubActivityScalarWhereWithAggregatesInput | Prisma.SupplierSubActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierSubActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierSubActivityScalarWhereWithAggregatesInput | Prisma.SupplierSubActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SupplierSubActivity"> | number;
    supplier_main_activity_id?: Prisma.IntWithAggregatesFilter<"SupplierSubActivity"> | number;
    sub_category_name?: Prisma.StringWithAggregatesFilter<"SupplierSubActivity"> | string;
};
export type SupplierSubActivityCreateInput = {
    sub_category_name: string;
    mainActivity: Prisma.SupplierMainActivityCreateNestedOneWithoutSubActivitiesInput;
};
export type SupplierSubActivityUncheckedCreateInput = {
    id?: number;
    supplier_main_activity_id: number;
    sub_category_name: string;
};
export type SupplierSubActivityUpdateInput = {
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
    mainActivity?: Prisma.SupplierMainActivityUpdateOneRequiredWithoutSubActivitiesNestedInput;
};
export type SupplierSubActivityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_main_activity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivityCreateManyInput = {
    id?: number;
    supplier_main_activity_id: number;
    sub_category_name: string;
};
export type SupplierSubActivityUpdateManyMutationInput = {
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_main_activity_id?: Prisma.IntFieldUpdateOperationsInput | number;
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivityListRelationFilter = {
    every?: Prisma.SupplierSubActivityWhereInput;
    some?: Prisma.SupplierSubActivityWhereInput;
    none?: Prisma.SupplierSubActivityWhereInput;
};
export type SupplierSubActivityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierSubActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
    sub_category_name?: Prisma.SortOrder;
};
export type SupplierSubActivityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
};
export type SupplierSubActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
    sub_category_name?: Prisma.SortOrder;
};
export type SupplierSubActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
    sub_category_name?: Prisma.SortOrder;
};
export type SupplierSubActivitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_main_activity_id?: Prisma.SortOrder;
};
export type SupplierSubActivityCreateNestedManyWithoutMainActivityInput = {
    create?: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput> | Prisma.SupplierSubActivityCreateWithoutMainActivityInput[] | Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput[];
    connectOrCreate?: Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput | Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput[];
    createMany?: Prisma.SupplierSubActivityCreateManyMainActivityInputEnvelope;
    connect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
};
export type SupplierSubActivityUncheckedCreateNestedManyWithoutMainActivityInput = {
    create?: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput> | Prisma.SupplierSubActivityCreateWithoutMainActivityInput[] | Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput[];
    connectOrCreate?: Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput | Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput[];
    createMany?: Prisma.SupplierSubActivityCreateManyMainActivityInputEnvelope;
    connect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
};
export type SupplierSubActivityUpdateManyWithoutMainActivityNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput> | Prisma.SupplierSubActivityCreateWithoutMainActivityInput[] | Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput[];
    connectOrCreate?: Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput | Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput[];
    upsert?: Prisma.SupplierSubActivityUpsertWithWhereUniqueWithoutMainActivityInput | Prisma.SupplierSubActivityUpsertWithWhereUniqueWithoutMainActivityInput[];
    createMany?: Prisma.SupplierSubActivityCreateManyMainActivityInputEnvelope;
    set?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    update?: Prisma.SupplierSubActivityUpdateWithWhereUniqueWithoutMainActivityInput | Prisma.SupplierSubActivityUpdateWithWhereUniqueWithoutMainActivityInput[];
    updateMany?: Prisma.SupplierSubActivityUpdateManyWithWhereWithoutMainActivityInput | Prisma.SupplierSubActivityUpdateManyWithWhereWithoutMainActivityInput[];
    deleteMany?: Prisma.SupplierSubActivityScalarWhereInput | Prisma.SupplierSubActivityScalarWhereInput[];
};
export type SupplierSubActivityUncheckedUpdateManyWithoutMainActivityNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput> | Prisma.SupplierSubActivityCreateWithoutMainActivityInput[] | Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput[];
    connectOrCreate?: Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput | Prisma.SupplierSubActivityCreateOrConnectWithoutMainActivityInput[];
    upsert?: Prisma.SupplierSubActivityUpsertWithWhereUniqueWithoutMainActivityInput | Prisma.SupplierSubActivityUpsertWithWhereUniqueWithoutMainActivityInput[];
    createMany?: Prisma.SupplierSubActivityCreateManyMainActivityInputEnvelope;
    set?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSubActivityWhereUniqueInput | Prisma.SupplierSubActivityWhereUniqueInput[];
    update?: Prisma.SupplierSubActivityUpdateWithWhereUniqueWithoutMainActivityInput | Prisma.SupplierSubActivityUpdateWithWhereUniqueWithoutMainActivityInput[];
    updateMany?: Prisma.SupplierSubActivityUpdateManyWithWhereWithoutMainActivityInput | Prisma.SupplierSubActivityUpdateManyWithWhereWithoutMainActivityInput[];
    deleteMany?: Prisma.SupplierSubActivityScalarWhereInput | Prisma.SupplierSubActivityScalarWhereInput[];
};
export type SupplierSubActivityCreateWithoutMainActivityInput = {
    sub_category_name: string;
};
export type SupplierSubActivityUncheckedCreateWithoutMainActivityInput = {
    id?: number;
    sub_category_name: string;
};
export type SupplierSubActivityCreateOrConnectWithoutMainActivityInput = {
    where: Prisma.SupplierSubActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput>;
};
export type SupplierSubActivityCreateManyMainActivityInputEnvelope = {
    data: Prisma.SupplierSubActivityCreateManyMainActivityInput | Prisma.SupplierSubActivityCreateManyMainActivityInput[];
    skipDuplicates?: boolean;
};
export type SupplierSubActivityUpsertWithWhereUniqueWithoutMainActivityInput = {
    where: Prisma.SupplierSubActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierSubActivityUpdateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedUpdateWithoutMainActivityInput>;
    create: Prisma.XOR<Prisma.SupplierSubActivityCreateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedCreateWithoutMainActivityInput>;
};
export type SupplierSubActivityUpdateWithWhereUniqueWithoutMainActivityInput = {
    where: Prisma.SupplierSubActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierSubActivityUpdateWithoutMainActivityInput, Prisma.SupplierSubActivityUncheckedUpdateWithoutMainActivityInput>;
};
export type SupplierSubActivityUpdateManyWithWhereWithoutMainActivityInput = {
    where: Prisma.SupplierSubActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierSubActivityUpdateManyMutationInput, Prisma.SupplierSubActivityUncheckedUpdateManyWithoutMainActivityInput>;
};
export type SupplierSubActivityScalarWhereInput = {
    AND?: Prisma.SupplierSubActivityScalarWhereInput | Prisma.SupplierSubActivityScalarWhereInput[];
    OR?: Prisma.SupplierSubActivityScalarWhereInput[];
    NOT?: Prisma.SupplierSubActivityScalarWhereInput | Prisma.SupplierSubActivityScalarWhereInput[];
    id?: Prisma.IntFilter<"SupplierSubActivity"> | number;
    supplier_main_activity_id?: Prisma.IntFilter<"SupplierSubActivity"> | number;
    sub_category_name?: Prisma.StringFilter<"SupplierSubActivity"> | string;
};
export type SupplierSubActivityCreateManyMainActivityInput = {
    id?: number;
    sub_category_name: string;
};
export type SupplierSubActivityUpdateWithoutMainActivityInput = {
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivityUncheckedUpdateWithoutMainActivityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivityUncheckedUpdateManyWithoutMainActivityInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    sub_category_name?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type SupplierSubActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_main_activity_id?: boolean;
    sub_category_name?: boolean;
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSubActivity"]>;
export type SupplierSubActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_main_activity_id?: boolean;
    sub_category_name?: boolean;
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSubActivity"]>;
export type SupplierSubActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_main_activity_id?: boolean;
    sub_category_name?: boolean;
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSubActivity"]>;
export type SupplierSubActivitySelectScalar = {
    id?: boolean;
    supplier_main_activity_id?: boolean;
    sub_category_name?: boolean;
};
export type SupplierSubActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "supplier_main_activity_id" | "sub_category_name", ExtArgs["result"]["supplierSubActivity"]>;
export type SupplierSubActivityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
};
export type SupplierSubActivityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
};
export type SupplierSubActivityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mainActivity?: boolean | Prisma.SupplierMainActivityDefaultArgs<ExtArgs>;
};
export type $SupplierSubActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierSubActivity";
    objects: {
        mainActivity: Prisma.$SupplierMainActivityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        supplier_main_activity_id: number;
        sub_category_name: string;
    }, ExtArgs["result"]["supplierSubActivity"]>;
    composites: {};
};
export type SupplierSubActivityGetPayload<S extends boolean | null | undefined | SupplierSubActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload, S>;
export type SupplierSubActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierSubActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierSubActivityCountAggregateInputType | true;
};
export interface SupplierSubActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierSubActivity'];
        meta: {
            name: 'SupplierSubActivity';
        };
    };
    /**
     * Find zero or one SupplierSubActivity that matches the filter.
     * @param {SupplierSubActivityFindUniqueArgs} args - Arguments to find a SupplierSubActivity
     * @example
     * // Get one SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierSubActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierSubActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierSubActivityFindUniqueOrThrowArgs} args - Arguments to find a SupplierSubActivity
     * @example
     * // Get one SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierSubActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierSubActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityFindFirstArgs} args - Arguments to find a SupplierSubActivity
     * @example
     * // Get one SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierSubActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierSubActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityFindFirstOrThrowArgs} args - Arguments to find a SupplierSubActivity
     * @example
     * // Get one SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierSubActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierSubActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierSubActivities
     * const supplierSubActivities = await prisma.supplierSubActivity.findMany()
     *
     * // Get first 10 SupplierSubActivities
     * const supplierSubActivities = await prisma.supplierSubActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supplierSubActivityWithIdOnly = await prisma.supplierSubActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SupplierSubActivityFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierSubActivity.
     * @param {SupplierSubActivityCreateArgs} args - Arguments to create a SupplierSubActivity.
     * @example
     * // Create one SupplierSubActivity
     * const SupplierSubActivity = await prisma.supplierSubActivity.create({
     *   data: {
     *     // ... data to create a SupplierSubActivity
     *   }
     * })
     *
     */
    create<T extends SupplierSubActivityCreateArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierSubActivities.
     * @param {SupplierSubActivityCreateManyArgs} args - Arguments to create many SupplierSubActivities.
     * @example
     * // Create many SupplierSubActivities
     * const supplierSubActivity = await prisma.supplierSubActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierSubActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierSubActivities and returns the data saved in the database.
     * @param {SupplierSubActivityCreateManyAndReturnArgs} args - Arguments to create many SupplierSubActivities.
     * @example
     * // Create many SupplierSubActivities
     * const supplierSubActivity = await prisma.supplierSubActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierSubActivities and only return the `id`
     * const supplierSubActivityWithIdOnly = await prisma.supplierSubActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierSubActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierSubActivity.
     * @param {SupplierSubActivityDeleteArgs} args - Arguments to delete one SupplierSubActivity.
     * @example
     * // Delete one SupplierSubActivity
     * const SupplierSubActivity = await prisma.supplierSubActivity.delete({
     *   where: {
     *     // ... filter to delete one SupplierSubActivity
     *   }
     * })
     *
     */
    delete<T extends SupplierSubActivityDeleteArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierSubActivity.
     * @param {SupplierSubActivityUpdateArgs} args - Arguments to update one SupplierSubActivity.
     * @example
     * // Update one SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierSubActivityUpdateArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierSubActivities.
     * @param {SupplierSubActivityDeleteManyArgs} args - Arguments to filter SupplierSubActivities to delete.
     * @example
     * // Delete a few SupplierSubActivities
     * const { count } = await prisma.supplierSubActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierSubActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierSubActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierSubActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierSubActivities
     * const supplierSubActivity = await prisma.supplierSubActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierSubActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierSubActivities and returns the data updated in the database.
     * @param {SupplierSubActivityUpdateManyAndReturnArgs} args - Arguments to update many SupplierSubActivities.
     * @example
     * // Update many SupplierSubActivities
     * const supplierSubActivity = await prisma.supplierSubActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierSubActivities and only return the `id`
     * const supplierSubActivityWithIdOnly = await prisma.supplierSubActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierSubActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierSubActivity.
     * @param {SupplierSubActivityUpsertArgs} args - Arguments to update or create a SupplierSubActivity.
     * @example
     * // Update or create a SupplierSubActivity
     * const supplierSubActivity = await prisma.supplierSubActivity.upsert({
     *   create: {
     *     // ... data to create a SupplierSubActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierSubActivity we want to update
     *   }
     * })
     */
    upsert<T extends SupplierSubActivityUpsertArgs>(args: Prisma.SelectSubset<T, SupplierSubActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierSubActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierSubActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityCountArgs} args - Arguments to filter SupplierSubActivities to count.
     * @example
     * // Count the number of SupplierSubActivities
     * const count = await prisma.supplierSubActivity.count({
     *   where: {
     *     // ... the filter for the SupplierSubActivities we want to count
     *   }
     * })
    **/
    count<T extends SupplierSubActivityCountArgs>(args?: Prisma.Subset<T, SupplierSubActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierSubActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierSubActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierSubActivityAggregateArgs>(args: Prisma.Subset<T, SupplierSubActivityAggregateArgs>): Prisma.PrismaPromise<GetSupplierSubActivityAggregateType<T>>;
    /**
     * Group by SupplierSubActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSubActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierSubActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierSubActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierSubActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierSubActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierSubActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierSubActivity model
     */
    readonly fields: SupplierSubActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierSubActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierSubActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    mainActivity<T extends Prisma.SupplierMainActivityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierMainActivityDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierSubActivity model
 */
export interface SupplierSubActivityFieldRefs {
    readonly id: Prisma.FieldRef<"SupplierSubActivity", 'Int'>;
    readonly supplier_main_activity_id: Prisma.FieldRef<"SupplierSubActivity", 'Int'>;
    readonly sub_category_name: Prisma.FieldRef<"SupplierSubActivity", 'String'>;
}
/**
 * SupplierSubActivity findUnique
 */
export type SupplierSubActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSubActivity to fetch.
     */
    where: Prisma.SupplierSubActivityWhereUniqueInput;
};
/**
 * SupplierSubActivity findUniqueOrThrow
 */
export type SupplierSubActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSubActivity to fetch.
     */
    where: Prisma.SupplierSubActivityWhereUniqueInput;
};
/**
 * SupplierSubActivity findFirst
 */
export type SupplierSubActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSubActivity to fetch.
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSubActivities to fetch.
     */
    orderBy?: Prisma.SupplierSubActivityOrderByWithRelationInput | Prisma.SupplierSubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierSubActivities.
     */
    cursor?: Prisma.SupplierSubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierSubActivities.
     */
    distinct?: Prisma.SupplierSubActivityScalarFieldEnum | Prisma.SupplierSubActivityScalarFieldEnum[];
};
/**
 * SupplierSubActivity findFirstOrThrow
 */
export type SupplierSubActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSubActivity to fetch.
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSubActivities to fetch.
     */
    orderBy?: Prisma.SupplierSubActivityOrderByWithRelationInput | Prisma.SupplierSubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierSubActivities.
     */
    cursor?: Prisma.SupplierSubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSubActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierSubActivities.
     */
    distinct?: Prisma.SupplierSubActivityScalarFieldEnum | Prisma.SupplierSubActivityScalarFieldEnum[];
};
/**
 * SupplierSubActivity findMany
 */
export type SupplierSubActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSubActivities to fetch.
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSubActivities to fetch.
     */
    orderBy?: Prisma.SupplierSubActivityOrderByWithRelationInput | Prisma.SupplierSubActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierSubActivities.
     */
    cursor?: Prisma.SupplierSubActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSubActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSubActivities.
     */
    skip?: number;
    distinct?: Prisma.SupplierSubActivityScalarFieldEnum | Prisma.SupplierSubActivityScalarFieldEnum[];
};
/**
 * SupplierSubActivity create
 */
export type SupplierSubActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierSubActivity.
     */
    data: Prisma.XOR<Prisma.SupplierSubActivityCreateInput, Prisma.SupplierSubActivityUncheckedCreateInput>;
};
/**
 * SupplierSubActivity createMany
 */
export type SupplierSubActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierSubActivities.
     */
    data: Prisma.SupplierSubActivityCreateManyInput | Prisma.SupplierSubActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierSubActivity createManyAndReturn
 */
export type SupplierSubActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierSubActivities.
     */
    data: Prisma.SupplierSubActivityCreateManyInput | Prisma.SupplierSubActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierSubActivity update
 */
export type SupplierSubActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierSubActivity.
     */
    data: Prisma.XOR<Prisma.SupplierSubActivityUpdateInput, Prisma.SupplierSubActivityUncheckedUpdateInput>;
    /**
     * Choose, which SupplierSubActivity to update.
     */
    where: Prisma.SupplierSubActivityWhereUniqueInput;
};
/**
 * SupplierSubActivity updateMany
 */
export type SupplierSubActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierSubActivities.
     */
    data: Prisma.XOR<Prisma.SupplierSubActivityUpdateManyMutationInput, Prisma.SupplierSubActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierSubActivities to update
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * Limit how many SupplierSubActivities to update.
     */
    limit?: number;
};
/**
 * SupplierSubActivity updateManyAndReturn
 */
export type SupplierSubActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierSubActivities.
     */
    data: Prisma.XOR<Prisma.SupplierSubActivityUpdateManyMutationInput, Prisma.SupplierSubActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierSubActivities to update
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * Limit how many SupplierSubActivities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierSubActivity upsert
 */
export type SupplierSubActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierSubActivity to update in case it exists.
     */
    where: Prisma.SupplierSubActivityWhereUniqueInput;
    /**
     * In case the SupplierSubActivity found by the `where` argument doesn't exist, create a new SupplierSubActivity with this data.
     */
    create: Prisma.XOR<Prisma.SupplierSubActivityCreateInput, Prisma.SupplierSubActivityUncheckedCreateInput>;
    /**
     * In case the SupplierSubActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierSubActivityUpdateInput, Prisma.SupplierSubActivityUncheckedUpdateInput>;
};
/**
 * SupplierSubActivity delete
 */
export type SupplierSubActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
    /**
     * Filter which SupplierSubActivity to delete.
     */
    where: Prisma.SupplierSubActivityWhereUniqueInput;
};
/**
 * SupplierSubActivity deleteMany
 */
export type SupplierSubActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierSubActivities to delete
     */
    where?: Prisma.SupplierSubActivityWhereInput;
    /**
     * Limit how many SupplierSubActivities to delete.
     */
    limit?: number;
};
/**
 * SupplierSubActivity without action
 */
export type SupplierSubActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSubActivity
     */
    select?: Prisma.SupplierSubActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSubActivity
     */
    omit?: Prisma.SupplierSubActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSubActivityInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierSubActivity.d.ts.map