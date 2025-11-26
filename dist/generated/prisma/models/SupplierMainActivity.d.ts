import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierMainActivity
 *
 */
export type SupplierMainActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierMainActivityPayload>;
export type AggregateSupplierMainActivity = {
    _count: SupplierMainActivityCountAggregateOutputType | null;
    _avg: SupplierMainActivityAvgAggregateOutputType | null;
    _sum: SupplierMainActivitySumAggregateOutputType | null;
    _min: SupplierMainActivityMinAggregateOutputType | null;
    _max: SupplierMainActivityMaxAggregateOutputType | null;
};
export type SupplierMainActivityAvgAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    activity_category_id: number | null;
};
export type SupplierMainActivitySumAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    activity_category_id: number | null;
};
export type SupplierMainActivityMinAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    activity_category_id: number | null;
};
export type SupplierMainActivityMaxAggregateOutputType = {
    id: number | null;
    supplier_skills_id: number | null;
    activity_category_id: number | null;
};
export type SupplierMainActivityCountAggregateOutputType = {
    id: number;
    supplier_skills_id: number;
    activity_category_id: number;
    _all: number;
};
export type SupplierMainActivityAvgAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    activity_category_id?: true;
};
export type SupplierMainActivitySumAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    activity_category_id?: true;
};
export type SupplierMainActivityMinAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    activity_category_id?: true;
};
export type SupplierMainActivityMaxAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    activity_category_id?: true;
};
export type SupplierMainActivityCountAggregateInputType = {
    id?: true;
    supplier_skills_id?: true;
    activity_category_id?: true;
    _all?: true;
};
export type SupplierMainActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierMainActivity to aggregate.
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierMainActivities to fetch.
     */
    orderBy?: Prisma.SupplierMainActivityOrderByWithRelationInput | Prisma.SupplierMainActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierMainActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierMainActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierMainActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierMainActivities
    **/
    _count?: true | SupplierMainActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierMainActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierMainActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMainActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMainActivityMaxAggregateInputType;
};
export type GetSupplierMainActivityAggregateType<T extends SupplierMainActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierMainActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierMainActivity[P]> : Prisma.GetScalarType<T[P], AggregateSupplierMainActivity[P]>;
};
export type SupplierMainActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierMainActivityWhereInput;
    orderBy?: Prisma.SupplierMainActivityOrderByWithAggregationInput | Prisma.SupplierMainActivityOrderByWithAggregationInput[];
    by: Prisma.SupplierMainActivityScalarFieldEnum[] | Prisma.SupplierMainActivityScalarFieldEnum;
    having?: Prisma.SupplierMainActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierMainActivityCountAggregateInputType | true;
    _avg?: SupplierMainActivityAvgAggregateInputType;
    _sum?: SupplierMainActivitySumAggregateInputType;
    _min?: SupplierMainActivityMinAggregateInputType;
    _max?: SupplierMainActivityMaxAggregateInputType;
};
export type SupplierMainActivityGroupByOutputType = {
    id: number;
    supplier_skills_id: number;
    activity_category_id: number;
    _count: SupplierMainActivityCountAggregateOutputType | null;
    _avg: SupplierMainActivityAvgAggregateOutputType | null;
    _sum: SupplierMainActivitySumAggregateOutputType | null;
    _min: SupplierMainActivityMinAggregateOutputType | null;
    _max: SupplierMainActivityMaxAggregateOutputType | null;
};
type GetSupplierMainActivityGroupByPayload<T extends SupplierMainActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierMainActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierMainActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierMainActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierMainActivityGroupByOutputType[P]>;
}>>;
export type SupplierMainActivityWhereInput = {
    AND?: Prisma.SupplierMainActivityWhereInput | Prisma.SupplierMainActivityWhereInput[];
    OR?: Prisma.SupplierMainActivityWhereInput[];
    NOT?: Prisma.SupplierMainActivityWhereInput | Prisma.SupplierMainActivityWhereInput[];
    id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    supplier_skills_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    activity_category_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    category?: Prisma.XOR<Prisma.ActivityCategoryScalarRelationFilter, Prisma.ActivityCategoryWhereInput>;
    skills?: Prisma.XOR<Prisma.SupplierSkillActivityScalarRelationFilter, Prisma.SupplierSkillActivityWhereInput>;
    subActivities?: Prisma.SupplierSubActivityListRelationFilter;
};
export type SupplierMainActivityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
    category?: Prisma.ActivityCategoryOrderByWithRelationInput;
    skills?: Prisma.SupplierSkillActivityOrderByWithRelationInput;
    subActivities?: Prisma.SupplierSubActivityOrderByRelationAggregateInput;
};
export type SupplierMainActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    supplier_skills_id_activity_category_id?: Prisma.SupplierMainActivitySupplier_skills_idActivity_category_idCompoundUniqueInput;
    AND?: Prisma.SupplierMainActivityWhereInput | Prisma.SupplierMainActivityWhereInput[];
    OR?: Prisma.SupplierMainActivityWhereInput[];
    NOT?: Prisma.SupplierMainActivityWhereInput | Prisma.SupplierMainActivityWhereInput[];
    supplier_skills_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    activity_category_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    category?: Prisma.XOR<Prisma.ActivityCategoryScalarRelationFilter, Prisma.ActivityCategoryWhereInput>;
    skills?: Prisma.XOR<Prisma.SupplierSkillActivityScalarRelationFilter, Prisma.SupplierSkillActivityWhereInput>;
    subActivities?: Prisma.SupplierSubActivityListRelationFilter;
}, "id" | "supplier_skills_id_activity_category_id">;
export type SupplierMainActivityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
    _count?: Prisma.SupplierMainActivityCountOrderByAggregateInput;
    _avg?: Prisma.SupplierMainActivityAvgOrderByAggregateInput;
    _max?: Prisma.SupplierMainActivityMaxOrderByAggregateInput;
    _min?: Prisma.SupplierMainActivityMinOrderByAggregateInput;
    _sum?: Prisma.SupplierMainActivitySumOrderByAggregateInput;
};
export type SupplierMainActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierMainActivityScalarWhereWithAggregatesInput | Prisma.SupplierMainActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierMainActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierMainActivityScalarWhereWithAggregatesInput | Prisma.SupplierMainActivityScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SupplierMainActivity"> | number;
    supplier_skills_id?: Prisma.IntWithAggregatesFilter<"SupplierMainActivity"> | number;
    activity_category_id?: Prisma.IntWithAggregatesFilter<"SupplierMainActivity"> | number;
};
export type SupplierMainActivityCreateInput = {
    category: Prisma.ActivityCategoryCreateNestedOneWithoutSupplierMainActivitiesInput;
    skills: Prisma.SupplierSkillActivityCreateNestedOneWithoutMainActivitiesInput;
    subActivities?: Prisma.SupplierSubActivityCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityUncheckedCreateInput = {
    id?: number;
    supplier_skills_id: number;
    activity_category_id: number;
    subActivities?: Prisma.SupplierSubActivityUncheckedCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityUpdateInput = {
    category?: Prisma.ActivityCategoryUpdateOneRequiredWithoutSupplierMainActivitiesNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateOneRequiredWithoutMainActivitiesNestedInput;
    subActivities?: Prisma.SupplierSubActivityUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subActivities?: Prisma.SupplierSubActivityUncheckedUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityCreateManyInput = {
    id?: number;
    supplier_skills_id: number;
    activity_category_id: number;
};
export type SupplierMainActivityUpdateManyMutationInput = {};
export type SupplierMainActivityUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SupplierMainActivityListRelationFilter = {
    every?: Prisma.SupplierMainActivityWhereInput;
    some?: Prisma.SupplierMainActivityWhereInput;
    none?: Prisma.SupplierMainActivityWhereInput;
};
export type SupplierMainActivityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierMainActivitySupplier_skills_idActivity_category_idCompoundUniqueInput = {
    supplier_skills_id: number;
    activity_category_id: number;
};
export type SupplierMainActivityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
};
export type SupplierMainActivityAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
};
export type SupplierMainActivityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
};
export type SupplierMainActivityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
};
export type SupplierMainActivitySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_skills_id?: Prisma.SortOrder;
    activity_category_id?: Prisma.SortOrder;
};
export type SupplierMainActivityScalarRelationFilter = {
    is?: Prisma.SupplierMainActivityWhereInput;
    isNot?: Prisma.SupplierMainActivityWhereInput;
};
export type SupplierMainActivityCreateNestedManyWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput> | Prisma.SupplierMainActivityCreateWithoutSkillsInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput | Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput[];
    createMany?: Prisma.SupplierMainActivityCreateManySkillsInputEnvelope;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
};
export type SupplierMainActivityUncheckedCreateNestedManyWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput> | Prisma.SupplierMainActivityCreateWithoutSkillsInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput | Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput[];
    createMany?: Prisma.SupplierMainActivityCreateManySkillsInputEnvelope;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
};
export type SupplierMainActivityUpdateManyWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput> | Prisma.SupplierMainActivityCreateWithoutSkillsInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput | Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput[];
    upsert?: Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutSkillsInput | Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutSkillsInput[];
    createMany?: Prisma.SupplierMainActivityCreateManySkillsInputEnvelope;
    set?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    delete?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    update?: Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutSkillsInput | Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutSkillsInput[];
    updateMany?: Prisma.SupplierMainActivityUpdateManyWithWhereWithoutSkillsInput | Prisma.SupplierMainActivityUpdateManyWithWhereWithoutSkillsInput[];
    deleteMany?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
};
export type SupplierMainActivityUncheckedUpdateManyWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput> | Prisma.SupplierMainActivityCreateWithoutSkillsInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput | Prisma.SupplierMainActivityCreateOrConnectWithoutSkillsInput[];
    upsert?: Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutSkillsInput | Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutSkillsInput[];
    createMany?: Prisma.SupplierMainActivityCreateManySkillsInputEnvelope;
    set?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    delete?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    update?: Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutSkillsInput | Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutSkillsInput[];
    updateMany?: Prisma.SupplierMainActivityUpdateManyWithWhereWithoutSkillsInput | Prisma.SupplierMainActivityUpdateManyWithWhereWithoutSkillsInput[];
    deleteMany?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
};
export type SupplierMainActivityCreateNestedOneWithoutSubActivitiesInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSubActivitiesInput>;
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSubActivitiesInput;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput;
};
export type SupplierMainActivityUpdateOneRequiredWithoutSubActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSubActivitiesInput>;
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutSubActivitiesInput;
    upsert?: Prisma.SupplierMainActivityUpsertWithoutSubActivitiesInput;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierMainActivityUpdateToOneWithWhereWithoutSubActivitiesInput, Prisma.SupplierMainActivityUpdateWithoutSubActivitiesInput>, Prisma.SupplierMainActivityUncheckedUpdateWithoutSubActivitiesInput>;
};
export type SupplierMainActivityCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput> | Prisma.SupplierMainActivityCreateWithoutCategoryInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput | Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.SupplierMainActivityCreateManyCategoryInputEnvelope;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
};
export type SupplierMainActivityUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput> | Prisma.SupplierMainActivityCreateWithoutCategoryInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput | Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.SupplierMainActivityCreateManyCategoryInputEnvelope;
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
};
export type SupplierMainActivityUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput> | Prisma.SupplierMainActivityCreateWithoutCategoryInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput | Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutCategoryInput | Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.SupplierMainActivityCreateManyCategoryInputEnvelope;
    set?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    delete?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    update?: Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutCategoryInput | Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.SupplierMainActivityUpdateManyWithWhereWithoutCategoryInput | Prisma.SupplierMainActivityUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
};
export type SupplierMainActivityUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput> | Prisma.SupplierMainActivityCreateWithoutCategoryInput[] | Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput | Prisma.SupplierMainActivityCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutCategoryInput | Prisma.SupplierMainActivityUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.SupplierMainActivityCreateManyCategoryInputEnvelope;
    set?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    delete?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    connect?: Prisma.SupplierMainActivityWhereUniqueInput | Prisma.SupplierMainActivityWhereUniqueInput[];
    update?: Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutCategoryInput | Prisma.SupplierMainActivityUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.SupplierMainActivityUpdateManyWithWhereWithoutCategoryInput | Prisma.SupplierMainActivityUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
};
export type SupplierMainActivityCreateWithoutSkillsInput = {
    category: Prisma.ActivityCategoryCreateNestedOneWithoutSupplierMainActivitiesInput;
    subActivities?: Prisma.SupplierSubActivityCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityUncheckedCreateWithoutSkillsInput = {
    id?: number;
    activity_category_id: number;
    subActivities?: Prisma.SupplierSubActivityUncheckedCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityCreateOrConnectWithoutSkillsInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput>;
};
export type SupplierMainActivityCreateManySkillsInputEnvelope = {
    data: Prisma.SupplierMainActivityCreateManySkillsInput | Prisma.SupplierMainActivityCreateManySkillsInput[];
    skipDuplicates?: boolean;
};
export type SupplierMainActivityUpsertWithWhereUniqueWithoutSkillsInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSkillsInput>;
};
export type SupplierMainActivityUpdateWithWhereUniqueWithoutSkillsInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutSkillsInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierMainActivityUpdateManyWithWhereWithoutSkillsInput = {
    where: Prisma.SupplierMainActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateManyMutationInput, Prisma.SupplierMainActivityUncheckedUpdateManyWithoutSkillsInput>;
};
export type SupplierMainActivityScalarWhereInput = {
    AND?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
    OR?: Prisma.SupplierMainActivityScalarWhereInput[];
    NOT?: Prisma.SupplierMainActivityScalarWhereInput | Prisma.SupplierMainActivityScalarWhereInput[];
    id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    supplier_skills_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
    activity_category_id?: Prisma.IntFilter<"SupplierMainActivity"> | number;
};
export type SupplierMainActivityCreateWithoutSubActivitiesInput = {
    category: Prisma.ActivityCategoryCreateNestedOneWithoutSupplierMainActivitiesInput;
    skills: Prisma.SupplierSkillActivityCreateNestedOneWithoutMainActivitiesInput;
};
export type SupplierMainActivityUncheckedCreateWithoutSubActivitiesInput = {
    id?: number;
    supplier_skills_id: number;
    activity_category_id: number;
};
export type SupplierMainActivityCreateOrConnectWithoutSubActivitiesInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSubActivitiesInput>;
};
export type SupplierMainActivityUpsertWithoutSubActivitiesInput = {
    update: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutSubActivitiesInput>;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedCreateWithoutSubActivitiesInput>;
    where?: Prisma.SupplierMainActivityWhereInput;
};
export type SupplierMainActivityUpdateToOneWithWhereWithoutSubActivitiesInput = {
    where?: Prisma.SupplierMainActivityWhereInput;
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutSubActivitiesInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutSubActivitiesInput>;
};
export type SupplierMainActivityUpdateWithoutSubActivitiesInput = {
    category?: Prisma.ActivityCategoryUpdateOneRequiredWithoutSupplierMainActivitiesNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateOneRequiredWithoutMainActivitiesNestedInput;
};
export type SupplierMainActivityUncheckedUpdateWithoutSubActivitiesInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SupplierMainActivityCreateWithoutCategoryInput = {
    skills: Prisma.SupplierSkillActivityCreateNestedOneWithoutMainActivitiesInput;
    subActivities?: Prisma.SupplierSubActivityCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityUncheckedCreateWithoutCategoryInput = {
    id?: number;
    supplier_skills_id: number;
    subActivities?: Prisma.SupplierSubActivityUncheckedCreateNestedManyWithoutMainActivityInput;
};
export type SupplierMainActivityCreateOrConnectWithoutCategoryInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput>;
};
export type SupplierMainActivityCreateManyCategoryInputEnvelope = {
    data: Prisma.SupplierMainActivityCreateManyCategoryInput | Prisma.SupplierMainActivityCreateManyCategoryInput[];
    skipDuplicates?: boolean;
};
export type SupplierMainActivityUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedCreateWithoutCategoryInput>;
};
export type SupplierMainActivityUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateWithoutCategoryInput, Prisma.SupplierMainActivityUncheckedUpdateWithoutCategoryInput>;
};
export type SupplierMainActivityUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.SupplierMainActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateManyMutationInput, Prisma.SupplierMainActivityUncheckedUpdateManyWithoutCategoryInput>;
};
export type SupplierMainActivityCreateManySkillsInput = {
    id?: number;
    activity_category_id: number;
};
export type SupplierMainActivityUpdateWithoutSkillsInput = {
    category?: Prisma.ActivityCategoryUpdateOneRequiredWithoutSupplierMainActivitiesNestedInput;
    subActivities?: Prisma.SupplierSubActivityUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityUncheckedUpdateWithoutSkillsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subActivities?: Prisma.SupplierSubActivityUncheckedUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityUncheckedUpdateManyWithoutSkillsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type SupplierMainActivityCreateManyCategoryInput = {
    id?: number;
    supplier_skills_id: number;
};
export type SupplierMainActivityUpdateWithoutCategoryInput = {
    skills?: Prisma.SupplierSkillActivityUpdateOneRequiredWithoutMainActivitiesNestedInput;
    subActivities?: Prisma.SupplierSubActivityUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityUncheckedUpdateWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    subActivities?: Prisma.SupplierSubActivityUncheckedUpdateManyWithoutMainActivityNestedInput;
};
export type SupplierMainActivityUncheckedUpdateManyWithoutCategoryInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
};
/**
 * Count Type SupplierMainActivityCountOutputType
 */
export type SupplierMainActivityCountOutputType = {
    subActivities: number;
};
export type SupplierMainActivityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    subActivities?: boolean | SupplierMainActivityCountOutputTypeCountSubActivitiesArgs;
};
/**
 * SupplierMainActivityCountOutputType without action
 */
export type SupplierMainActivityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivityCountOutputType
     */
    select?: Prisma.SupplierMainActivityCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SupplierMainActivityCountOutputType without action
 */
export type SupplierMainActivityCountOutputTypeCountSubActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierSubActivityWhereInput;
};
export type SupplierMainActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    activity_category_id?: boolean;
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
    subActivities?: boolean | Prisma.SupplierMainActivity$subActivitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierMainActivityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierMainActivity"]>;
export type SupplierMainActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    activity_category_id?: boolean;
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierMainActivity"]>;
export type SupplierMainActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_skills_id?: boolean;
    activity_category_id?: boolean;
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierMainActivity"]>;
export type SupplierMainActivitySelectScalar = {
    id?: boolean;
    supplier_skills_id?: boolean;
    activity_category_id?: boolean;
};
export type SupplierMainActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "supplier_skills_id" | "activity_category_id", ExtArgs["result"]["supplierMainActivity"]>;
export type SupplierMainActivityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
    subActivities?: boolean | Prisma.SupplierMainActivity$subActivitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierMainActivityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupplierMainActivityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
};
export type SupplierMainActivityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    category?: boolean | Prisma.ActivityCategoryDefaultArgs<ExtArgs>;
    skills?: boolean | Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>;
};
export type $SupplierMainActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierMainActivity";
    objects: {
        category: Prisma.$ActivityCategoryPayload<ExtArgs>;
        skills: Prisma.$SupplierSkillActivityPayload<ExtArgs>;
        subActivities: Prisma.$SupplierSubActivityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        supplier_skills_id: number;
        activity_category_id: number;
    }, ExtArgs["result"]["supplierMainActivity"]>;
    composites: {};
};
export type SupplierMainActivityGetPayload<S extends boolean | null | undefined | SupplierMainActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload, S>;
export type SupplierMainActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierMainActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierMainActivityCountAggregateInputType | true;
};
export interface SupplierMainActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierMainActivity'];
        meta: {
            name: 'SupplierMainActivity';
        };
    };
    /**
     * Find zero or one SupplierMainActivity that matches the filter.
     * @param {SupplierMainActivityFindUniqueArgs} args - Arguments to find a SupplierMainActivity
     * @example
     * // Get one SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierMainActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierMainActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierMainActivityFindUniqueOrThrowArgs} args - Arguments to find a SupplierMainActivity
     * @example
     * // Get one SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierMainActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierMainActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityFindFirstArgs} args - Arguments to find a SupplierMainActivity
     * @example
     * // Get one SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierMainActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierMainActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityFindFirstOrThrowArgs} args - Arguments to find a SupplierMainActivity
     * @example
     * // Get one SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierMainActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierMainActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierMainActivities
     * const supplierMainActivities = await prisma.supplierMainActivity.findMany()
     *
     * // Get first 10 SupplierMainActivities
     * const supplierMainActivities = await prisma.supplierMainActivity.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supplierMainActivityWithIdOnly = await prisma.supplierMainActivity.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SupplierMainActivityFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierMainActivity.
     * @param {SupplierMainActivityCreateArgs} args - Arguments to create a SupplierMainActivity.
     * @example
     * // Create one SupplierMainActivity
     * const SupplierMainActivity = await prisma.supplierMainActivity.create({
     *   data: {
     *     // ... data to create a SupplierMainActivity
     *   }
     * })
     *
     */
    create<T extends SupplierMainActivityCreateArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierMainActivities.
     * @param {SupplierMainActivityCreateManyArgs} args - Arguments to create many SupplierMainActivities.
     * @example
     * // Create many SupplierMainActivities
     * const supplierMainActivity = await prisma.supplierMainActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierMainActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierMainActivities and returns the data saved in the database.
     * @param {SupplierMainActivityCreateManyAndReturnArgs} args - Arguments to create many SupplierMainActivities.
     * @example
     * // Create many SupplierMainActivities
     * const supplierMainActivity = await prisma.supplierMainActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierMainActivities and only return the `id`
     * const supplierMainActivityWithIdOnly = await prisma.supplierMainActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierMainActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierMainActivity.
     * @param {SupplierMainActivityDeleteArgs} args - Arguments to delete one SupplierMainActivity.
     * @example
     * // Delete one SupplierMainActivity
     * const SupplierMainActivity = await prisma.supplierMainActivity.delete({
     *   where: {
     *     // ... filter to delete one SupplierMainActivity
     *   }
     * })
     *
     */
    delete<T extends SupplierMainActivityDeleteArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierMainActivity.
     * @param {SupplierMainActivityUpdateArgs} args - Arguments to update one SupplierMainActivity.
     * @example
     * // Update one SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierMainActivityUpdateArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierMainActivities.
     * @param {SupplierMainActivityDeleteManyArgs} args - Arguments to filter SupplierMainActivities to delete.
     * @example
     * // Delete a few SupplierMainActivities
     * const { count } = await prisma.supplierMainActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierMainActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierMainActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierMainActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierMainActivities
     * const supplierMainActivity = await prisma.supplierMainActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierMainActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierMainActivities and returns the data updated in the database.
     * @param {SupplierMainActivityUpdateManyAndReturnArgs} args - Arguments to update many SupplierMainActivities.
     * @example
     * // Update many SupplierMainActivities
     * const supplierMainActivity = await prisma.supplierMainActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierMainActivities and only return the `id`
     * const supplierMainActivityWithIdOnly = await prisma.supplierMainActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierMainActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierMainActivity.
     * @param {SupplierMainActivityUpsertArgs} args - Arguments to update or create a SupplierMainActivity.
     * @example
     * // Update or create a SupplierMainActivity
     * const supplierMainActivity = await prisma.supplierMainActivity.upsert({
     *   create: {
     *     // ... data to create a SupplierMainActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierMainActivity we want to update
     *   }
     * })
     */
    upsert<T extends SupplierMainActivityUpsertArgs>(args: Prisma.SelectSubset<T, SupplierMainActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierMainActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierMainActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityCountArgs} args - Arguments to filter SupplierMainActivities to count.
     * @example
     * // Count the number of SupplierMainActivities
     * const count = await prisma.supplierMainActivity.count({
     *   where: {
     *     // ... the filter for the SupplierMainActivities we want to count
     *   }
     * })
    **/
    count<T extends SupplierMainActivityCountArgs>(args?: Prisma.Subset<T, SupplierMainActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierMainActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierMainActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierMainActivityAggregateArgs>(args: Prisma.Subset<T, SupplierMainActivityAggregateArgs>): Prisma.PrismaPromise<GetSupplierMainActivityAggregateType<T>>;
    /**
     * Group by SupplierMainActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierMainActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierMainActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierMainActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierMainActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierMainActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierMainActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierMainActivity model
     */
    readonly fields: SupplierMainActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierMainActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierMainActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    category<T extends Prisma.ActivityCategoryDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityCategoryDefaultArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.SupplierSkillActivityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierSkillActivityDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    subActivities<T extends Prisma.SupplierMainActivity$subActivitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierMainActivity$subActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSubActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the SupplierMainActivity model
 */
export interface SupplierMainActivityFieldRefs {
    readonly id: Prisma.FieldRef<"SupplierMainActivity", 'Int'>;
    readonly supplier_skills_id: Prisma.FieldRef<"SupplierMainActivity", 'Int'>;
    readonly activity_category_id: Prisma.FieldRef<"SupplierMainActivity", 'Int'>;
}
/**
 * SupplierMainActivity findUnique
 */
export type SupplierMainActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierMainActivity to fetch.
     */
    where: Prisma.SupplierMainActivityWhereUniqueInput;
};
/**
 * SupplierMainActivity findUniqueOrThrow
 */
export type SupplierMainActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierMainActivity to fetch.
     */
    where: Prisma.SupplierMainActivityWhereUniqueInput;
};
/**
 * SupplierMainActivity findFirst
 */
export type SupplierMainActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierMainActivity to fetch.
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierMainActivities to fetch.
     */
    orderBy?: Prisma.SupplierMainActivityOrderByWithRelationInput | Prisma.SupplierMainActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierMainActivities.
     */
    cursor?: Prisma.SupplierMainActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierMainActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierMainActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierMainActivities.
     */
    distinct?: Prisma.SupplierMainActivityScalarFieldEnum | Prisma.SupplierMainActivityScalarFieldEnum[];
};
/**
 * SupplierMainActivity findFirstOrThrow
 */
export type SupplierMainActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierMainActivity to fetch.
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierMainActivities to fetch.
     */
    orderBy?: Prisma.SupplierMainActivityOrderByWithRelationInput | Prisma.SupplierMainActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierMainActivities.
     */
    cursor?: Prisma.SupplierMainActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierMainActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierMainActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierMainActivities.
     */
    distinct?: Prisma.SupplierMainActivityScalarFieldEnum | Prisma.SupplierMainActivityScalarFieldEnum[];
};
/**
 * SupplierMainActivity findMany
 */
export type SupplierMainActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierMainActivities to fetch.
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierMainActivities to fetch.
     */
    orderBy?: Prisma.SupplierMainActivityOrderByWithRelationInput | Prisma.SupplierMainActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierMainActivities.
     */
    cursor?: Prisma.SupplierMainActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierMainActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierMainActivities.
     */
    skip?: number;
    distinct?: Prisma.SupplierMainActivityScalarFieldEnum | Prisma.SupplierMainActivityScalarFieldEnum[];
};
/**
 * SupplierMainActivity create
 */
export type SupplierMainActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierMainActivity.
     */
    data: Prisma.XOR<Prisma.SupplierMainActivityCreateInput, Prisma.SupplierMainActivityUncheckedCreateInput>;
};
/**
 * SupplierMainActivity createMany
 */
export type SupplierMainActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierMainActivities.
     */
    data: Prisma.SupplierMainActivityCreateManyInput | Prisma.SupplierMainActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierMainActivity createManyAndReturn
 */
export type SupplierMainActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierMainActivities.
     */
    data: Prisma.SupplierMainActivityCreateManyInput | Prisma.SupplierMainActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierMainActivity update
 */
export type SupplierMainActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierMainActivity.
     */
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateInput, Prisma.SupplierMainActivityUncheckedUpdateInput>;
    /**
     * Choose, which SupplierMainActivity to update.
     */
    where: Prisma.SupplierMainActivityWhereUniqueInput;
};
/**
 * SupplierMainActivity updateMany
 */
export type SupplierMainActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierMainActivities.
     */
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateManyMutationInput, Prisma.SupplierMainActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierMainActivities to update
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * Limit how many SupplierMainActivities to update.
     */
    limit?: number;
};
/**
 * SupplierMainActivity updateManyAndReturn
 */
export type SupplierMainActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierMainActivities.
     */
    data: Prisma.XOR<Prisma.SupplierMainActivityUpdateManyMutationInput, Prisma.SupplierMainActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierMainActivities to update
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * Limit how many SupplierMainActivities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierMainActivity upsert
 */
export type SupplierMainActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierMainActivity to update in case it exists.
     */
    where: Prisma.SupplierMainActivityWhereUniqueInput;
    /**
     * In case the SupplierMainActivity found by the `where` argument doesn't exist, create a new SupplierMainActivity with this data.
     */
    create: Prisma.XOR<Prisma.SupplierMainActivityCreateInput, Prisma.SupplierMainActivityUncheckedCreateInput>;
    /**
     * In case the SupplierMainActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierMainActivityUpdateInput, Prisma.SupplierMainActivityUncheckedUpdateInput>;
};
/**
 * SupplierMainActivity delete
 */
export type SupplierMainActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
    /**
     * Filter which SupplierMainActivity to delete.
     */
    where: Prisma.SupplierMainActivityWhereUniqueInput;
};
/**
 * SupplierMainActivity deleteMany
 */
export type SupplierMainActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierMainActivities to delete
     */
    where?: Prisma.SupplierMainActivityWhereInput;
    /**
     * Limit how many SupplierMainActivities to delete.
     */
    limit?: number;
};
/**
 * SupplierMainActivity.subActivities
 */
export type SupplierMainActivity$subActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierSubActivityWhereInput;
    orderBy?: Prisma.SupplierSubActivityOrderByWithRelationInput | Prisma.SupplierSubActivityOrderByWithRelationInput[];
    cursor?: Prisma.SupplierSubActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierSubActivityScalarFieldEnum | Prisma.SupplierSubActivityScalarFieldEnum[];
};
/**
 * SupplierMainActivity without action
 */
export type SupplierMainActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierMainActivity
     */
    select?: Prisma.SupplierMainActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierMainActivity
     */
    omit?: Prisma.SupplierMainActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierMainActivityInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierMainActivity.d.ts.map