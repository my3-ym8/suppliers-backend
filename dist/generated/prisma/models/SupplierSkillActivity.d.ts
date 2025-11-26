import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierSkillActivity
 *
 */
export type SupplierSkillActivityModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierSkillActivityPayload>;
export type AggregateSupplierSkillActivity = {
    _count: SupplierSkillActivityCountAggregateOutputType | null;
    _avg: SupplierSkillActivityAvgAggregateOutputType | null;
    _sum: SupplierSkillActivitySumAggregateOutputType | null;
    _min: SupplierSkillActivityMinAggregateOutputType | null;
    _max: SupplierSkillActivityMaxAggregateOutputType | null;
};
export type SupplierSkillActivityAvgAggregateOutputType = {
    supplier_skills_id: number | null;
    supplier_id: number | null;
    supplier_type_id: number | null;
};
export type SupplierSkillActivitySumAggregateOutputType = {
    supplier_skills_id: number | null;
    supplier_id: number | null;
    supplier_type_id: number | null;
};
export type SupplierSkillActivityMinAggregateOutputType = {
    supplier_skills_id: number | null;
    supplier_id: number | null;
    supplier_type_id: number | null;
    expertise_level: string | null;
    why_choose_us: string | null;
    is_featured: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierSkillActivityMaxAggregateOutputType = {
    supplier_skills_id: number | null;
    supplier_id: number | null;
    supplier_type_id: number | null;
    expertise_level: string | null;
    why_choose_us: string | null;
    is_featured: boolean | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierSkillActivityCountAggregateOutputType = {
    supplier_skills_id: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level: number;
    why_choose_us: number;
    is_featured: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SupplierSkillActivityAvgAggregateInputType = {
    supplier_skills_id?: true;
    supplier_id?: true;
    supplier_type_id?: true;
};
export type SupplierSkillActivitySumAggregateInputType = {
    supplier_skills_id?: true;
    supplier_id?: true;
    supplier_type_id?: true;
};
export type SupplierSkillActivityMinAggregateInputType = {
    supplier_skills_id?: true;
    supplier_id?: true;
    supplier_type_id?: true;
    expertise_level?: true;
    why_choose_us?: true;
    is_featured?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierSkillActivityMaxAggregateInputType = {
    supplier_skills_id?: true;
    supplier_id?: true;
    supplier_type_id?: true;
    expertise_level?: true;
    why_choose_us?: true;
    is_featured?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierSkillActivityCountAggregateInputType = {
    supplier_skills_id?: true;
    supplier_id?: true;
    supplier_type_id?: true;
    expertise_level?: true;
    why_choose_us?: true;
    is_featured?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SupplierSkillActivityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierSkillActivity to aggregate.
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSkillActivities to fetch.
     */
    orderBy?: Prisma.SupplierSkillActivityOrderByWithRelationInput | Prisma.SupplierSkillActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierSkillActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSkillActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSkillActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierSkillActivities
    **/
    _count?: true | SupplierSkillActivityCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierSkillActivityAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierSkillActivitySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierSkillActivityMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierSkillActivityMaxAggregateInputType;
};
export type GetSupplierSkillActivityAggregateType<T extends SupplierSkillActivityAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierSkillActivity]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierSkillActivity[P]> : Prisma.GetScalarType<T[P], AggregateSupplierSkillActivity[P]>;
};
export type SupplierSkillActivityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierSkillActivityWhereInput;
    orderBy?: Prisma.SupplierSkillActivityOrderByWithAggregationInput | Prisma.SupplierSkillActivityOrderByWithAggregationInput[];
    by: Prisma.SupplierSkillActivityScalarFieldEnum[] | Prisma.SupplierSkillActivityScalarFieldEnum;
    having?: Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierSkillActivityCountAggregateInputType | true;
    _avg?: SupplierSkillActivityAvgAggregateInputType;
    _sum?: SupplierSkillActivitySumAggregateInputType;
    _min?: SupplierSkillActivityMinAggregateInputType;
    _max?: SupplierSkillActivityMaxAggregateInputType;
};
export type SupplierSkillActivityGroupByOutputType = {
    supplier_skills_id: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level: string | null;
    why_choose_us: string | null;
    is_featured: boolean;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: SupplierSkillActivityCountAggregateOutputType | null;
    _avg: SupplierSkillActivityAvgAggregateOutputType | null;
    _sum: SupplierSkillActivitySumAggregateOutputType | null;
    _min: SupplierSkillActivityMinAggregateOutputType | null;
    _max: SupplierSkillActivityMaxAggregateOutputType | null;
};
type GetSupplierSkillActivityGroupByPayload<T extends SupplierSkillActivityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierSkillActivityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierSkillActivityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierSkillActivityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierSkillActivityGroupByOutputType[P]>;
}>>;
export type SupplierSkillActivityWhereInput = {
    AND?: Prisma.SupplierSkillActivityWhereInput | Prisma.SupplierSkillActivityWhereInput[];
    OR?: Prisma.SupplierSkillActivityWhereInput[];
    NOT?: Prisma.SupplierSkillActivityWhereInput | Prisma.SupplierSkillActivityWhereInput[];
    supplier_skills_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    supplier_type_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    expertise_level?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    why_choose_us?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    is_featured?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    is_active?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
    brands?: Prisma.SupplierBrandMappingListRelationFilter;
    mainActivities?: Prisma.SupplierMainActivityListRelationFilter;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    supplier_type?: Prisma.XOR<Prisma.SupplierTypeScalarRelationFilter, Prisma.SupplierTypeWhereInput>;
};
export type SupplierSkillActivityOrderByWithRelationInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
    expertise_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    why_choose_us?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_featured?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    brands?: Prisma.SupplierBrandMappingOrderByRelationAggregateInput;
    mainActivities?: Prisma.SupplierMainActivityOrderByRelationAggregateInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    supplier_type?: Prisma.SupplierTypeOrderByWithRelationInput;
};
export type SupplierSkillActivityWhereUniqueInput = Prisma.AtLeast<{
    supplier_skills_id?: number;
    AND?: Prisma.SupplierSkillActivityWhereInput | Prisma.SupplierSkillActivityWhereInput[];
    OR?: Prisma.SupplierSkillActivityWhereInput[];
    NOT?: Prisma.SupplierSkillActivityWhereInput | Prisma.SupplierSkillActivityWhereInput[];
    supplier_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    supplier_type_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    expertise_level?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    why_choose_us?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    is_featured?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    is_active?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
    brands?: Prisma.SupplierBrandMappingListRelationFilter;
    mainActivities?: Prisma.SupplierMainActivityListRelationFilter;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    supplier_type?: Prisma.XOR<Prisma.SupplierTypeScalarRelationFilter, Prisma.SupplierTypeWhereInput>;
}, "supplier_skills_id">;
export type SupplierSkillActivityOrderByWithAggregationInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
    expertise_level?: Prisma.SortOrderInput | Prisma.SortOrder;
    why_choose_us?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_featured?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierSkillActivityCountOrderByAggregateInput;
    _avg?: Prisma.SupplierSkillActivityAvgOrderByAggregateInput;
    _max?: Prisma.SupplierSkillActivityMaxOrderByAggregateInput;
    _min?: Prisma.SupplierSkillActivityMinOrderByAggregateInput;
    _sum?: Prisma.SupplierSkillActivitySumOrderByAggregateInput;
};
export type SupplierSkillActivityScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput | Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput | Prisma.SupplierSkillActivityScalarWhereWithAggregatesInput[];
    supplier_skills_id?: Prisma.IntWithAggregatesFilter<"SupplierSkillActivity"> | number;
    supplier_id?: Prisma.IntWithAggregatesFilter<"SupplierSkillActivity"> | number;
    supplier_type_id?: Prisma.IntWithAggregatesFilter<"SupplierSkillActivity"> | number;
    expertise_level?: Prisma.StringNullableWithAggregatesFilter<"SupplierSkillActivity"> | string | null;
    why_choose_us?: Prisma.StringNullableWithAggregatesFilter<"SupplierSkillActivity"> | string | null;
    is_featured?: Prisma.BoolWithAggregatesFilter<"SupplierSkillActivity"> | boolean;
    is_active?: Prisma.BoolWithAggregatesFilter<"SupplierSkillActivity"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierSkillActivity"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierSkillActivity"> | Date | string;
};
export type SupplierSkillActivityCreateInput = {
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutSkillsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutSkillsInput;
    supplier_type: Prisma.SupplierTypeCreateNestedOneWithoutSkillsInput;
};
export type SupplierSkillActivityUncheckedCreateInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutSkillsInput;
};
export type SupplierSkillActivityUpdateInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutSkillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutSkillsNestedInput;
    supplier_type?: Prisma.SupplierTypeUpdateOneRequiredWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutSkillsNestedInput;
};
export type SupplierSkillActivityCreateManyInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierSkillActivityUpdateManyMutationInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierSkillActivityUncheckedUpdateManyInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierSkillActivityListRelationFilter = {
    every?: Prisma.SupplierSkillActivityWhereInput;
    some?: Prisma.SupplierSkillActivityWhereInput;
    none?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierSkillActivityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierSkillActivityCountOrderByAggregateInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
    expertise_level?: Prisma.SortOrder;
    why_choose_us?: Prisma.SortOrder;
    is_featured?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierSkillActivityAvgOrderByAggregateInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
};
export type SupplierSkillActivityMaxOrderByAggregateInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
    expertise_level?: Prisma.SortOrder;
    why_choose_us?: Prisma.SortOrder;
    is_featured?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierSkillActivityMinOrderByAggregateInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
    expertise_level?: Prisma.SortOrder;
    why_choose_us?: Prisma.SortOrder;
    is_featured?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierSkillActivitySumOrderByAggregateInput = {
    supplier_skills_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    supplier_type_id?: Prisma.SortOrder;
};
export type SupplierSkillActivityScalarRelationFilter = {
    is?: Prisma.SupplierSkillActivityWhereInput;
    isNot?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierSkillActivityCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput> | Prisma.SupplierSkillActivityCreateWithoutSupplierInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
};
export type SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput> | Prisma.SupplierSkillActivityCreateWithoutSupplierInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
};
export type SupplierSkillActivityUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput> | Prisma.SupplierSkillActivityCreateWithoutSupplierInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    update?: Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
};
export type SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput> | Prisma.SupplierSkillActivityCreateWithoutSupplierInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    update?: Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
};
export type SupplierSkillActivityCreateNestedOneWithoutMainActivitiesInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutMainActivitiesInput>;
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutMainActivitiesInput;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput;
};
export type SupplierSkillActivityUpdateOneRequiredWithoutMainActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutMainActivitiesInput>;
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutMainActivitiesInput;
    upsert?: Prisma.SupplierSkillActivityUpsertWithoutMainActivitiesInput;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierSkillActivityUpdateToOneWithWhereWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUpdateWithoutMainActivitiesInput>, Prisma.SupplierSkillActivityUncheckedUpdateWithoutMainActivitiesInput>;
};
export type SupplierSkillActivityCreateNestedOneWithoutBrandsInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutBrandsInput;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput;
};
export type SupplierSkillActivityUpdateOneRequiredWithoutBrandsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutBrandsInput>;
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutBrandsInput;
    upsert?: Prisma.SupplierSkillActivityUpsertWithoutBrandsInput;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierSkillActivityUpdateToOneWithWhereWithoutBrandsInput, Prisma.SupplierSkillActivityUpdateWithoutBrandsInput>, Prisma.SupplierSkillActivityUncheckedUpdateWithoutBrandsInput>;
};
export type SupplierSkillActivityCreateNestedManyWithoutSupplier_typeInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput> | Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplier_typeInputEnvelope;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
};
export type SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplier_typeInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput> | Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplier_typeInputEnvelope;
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
};
export type SupplierSkillActivityUpdateManyWithoutSupplier_typeNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput> | Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput[];
    upsert?: Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplier_typeInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplier_typeInputEnvelope;
    set?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    update?: Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplier_typeInput[];
    updateMany?: Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplier_typeInput[];
    deleteMany?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
};
export type SupplierSkillActivityUncheckedUpdateManyWithoutSupplier_typeNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput> | Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput[] | Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput[];
    connectOrCreate?: Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput | Prisma.SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput[];
    upsert?: Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplier_typeInput[];
    createMany?: Prisma.SupplierSkillActivityCreateManySupplier_typeInputEnvelope;
    set?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    disconnect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    delete?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    connect?: Prisma.SupplierSkillActivityWhereUniqueInput | Prisma.SupplierSkillActivityWhereUniqueInput[];
    update?: Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplier_typeInput[];
    updateMany?: Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplier_typeInput | Prisma.SupplierSkillActivityUpdateManyWithWhereWithoutSupplier_typeInput[];
    deleteMany?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
};
export type SupplierSkillActivityCreateWithoutSupplierInput = {
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutSkillsInput;
    supplier_type: Prisma.SupplierTypeCreateNestedOneWithoutSkillsInput;
};
export type SupplierSkillActivityUncheckedCreateWithoutSupplierInput = {
    supplier_skills_id?: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutSkillsInput;
};
export type SupplierSkillActivityCreateOrConnectWithoutSupplierInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput>;
};
export type SupplierSkillActivityCreateManySupplierInputEnvelope = {
    data: Prisma.SupplierSkillActivityCreateManySupplierInput | Prisma.SupplierSkillActivityCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplierInput>;
};
export type SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutSupplierInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierSkillActivityUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.SupplierSkillActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateManyMutationInput, Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierInput>;
};
export type SupplierSkillActivityScalarWhereInput = {
    AND?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
    OR?: Prisma.SupplierSkillActivityScalarWhereInput[];
    NOT?: Prisma.SupplierSkillActivityScalarWhereInput | Prisma.SupplierSkillActivityScalarWhereInput[];
    supplier_skills_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    supplier_type_id?: Prisma.IntFilter<"SupplierSkillActivity"> | number;
    expertise_level?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    why_choose_us?: Prisma.StringNullableFilter<"SupplierSkillActivity"> | string | null;
    is_featured?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    is_active?: Prisma.BoolFilter<"SupplierSkillActivity"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierSkillActivity"> | Date | string;
};
export type SupplierSkillActivityCreateWithoutMainActivitiesInput = {
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingCreateNestedManyWithoutSkillsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutSkillsInput;
    supplier_type: Prisma.SupplierTypeCreateNestedOneWithoutSkillsInput;
};
export type SupplierSkillActivityUncheckedCreateWithoutMainActivitiesInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedCreateNestedManyWithoutSkillsInput;
};
export type SupplierSkillActivityCreateOrConnectWithoutMainActivitiesInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutMainActivitiesInput>;
};
export type SupplierSkillActivityUpsertWithoutMainActivitiesInput = {
    update: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutMainActivitiesInput>;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutMainActivitiesInput>;
    where?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierSkillActivityUpdateToOneWithWhereWithoutMainActivitiesInput = {
    where?: Prisma.SupplierSkillActivityWhereInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutMainActivitiesInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutMainActivitiesInput>;
};
export type SupplierSkillActivityUpdateWithoutMainActivitiesInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUpdateManyWithoutSkillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutSkillsNestedInput;
    supplier_type?: Prisma.SupplierTypeUpdateOneRequiredWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateWithoutMainActivitiesInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedUpdateManyWithoutSkillsNestedInput;
};
export type SupplierSkillActivityCreateWithoutBrandsInput = {
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    mainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutSkillsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutSkillsInput;
    supplier_type: Prisma.SupplierTypeCreateNestedOneWithoutSkillsInput;
};
export type SupplierSkillActivityUncheckedCreateWithoutBrandsInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    mainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutSkillsInput;
};
export type SupplierSkillActivityCreateOrConnectWithoutBrandsInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutBrandsInput>;
};
export type SupplierSkillActivityUpsertWithoutBrandsInput = {
    update: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutBrandsInput>;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutBrandsInput>;
    where?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierSkillActivityUpdateToOneWithWhereWithoutBrandsInput = {
    where?: Prisma.SupplierSkillActivityWhereInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutBrandsInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutBrandsInput>;
};
export type SupplierSkillActivityUpdateWithoutBrandsInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutSkillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutSkillsNestedInput;
    supplier_type?: Prisma.SupplierTypeUpdateOneRequiredWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateWithoutBrandsInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    mainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutSkillsNestedInput;
};
export type SupplierSkillActivityCreateWithoutSupplier_typeInput = {
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutSkillsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutSkillsInput;
};
export type SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedCreateNestedManyWithoutSkillsInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutSkillsInput;
};
export type SupplierSkillActivityCreateOrConnectWithoutSupplier_typeInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput>;
};
export type SupplierSkillActivityCreateManySupplier_typeInputEnvelope = {
    data: Prisma.SupplierSkillActivityCreateManySupplier_typeInput | Prisma.SupplierSkillActivityCreateManySupplier_typeInput[];
    skipDuplicates?: boolean;
};
export type SupplierSkillActivityUpsertWithWhereUniqueWithoutSupplier_typeInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutSupplier_typeInput>;
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedCreateWithoutSupplier_typeInput>;
};
export type SupplierSkillActivityUpdateWithWhereUniqueWithoutSupplier_typeInput = {
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateWithoutSupplier_typeInput, Prisma.SupplierSkillActivityUncheckedUpdateWithoutSupplier_typeInput>;
};
export type SupplierSkillActivityUpdateManyWithWhereWithoutSupplier_typeInput = {
    where: Prisma.SupplierSkillActivityScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateManyMutationInput, Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplier_typeInput>;
};
export type SupplierSkillActivityCreateManySupplierInput = {
    supplier_skills_id?: number;
    supplier_type_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierSkillActivityUpdateWithoutSupplierInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutSkillsNestedInput;
    supplier_type?: Prisma.SupplierTypeUpdateOneRequiredWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateWithoutSupplierInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateManyWithoutSupplierInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierSkillActivityCreateManySupplier_typeInput = {
    supplier_skills_id?: number;
    supplier_id: number;
    expertise_level?: string | null;
    why_choose_us?: string | null;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierSkillActivityUpdateWithoutSupplier_typeInput = {
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutSkillsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateWithoutSupplier_typeInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    brands?: Prisma.SupplierBrandMappingUncheckedUpdateManyWithoutSkillsNestedInput;
    mainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutSkillsNestedInput;
};
export type SupplierSkillActivityUncheckedUpdateManyWithoutSupplier_typeInput = {
    supplier_skills_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    expertise_level?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    why_choose_us?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_featured?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SupplierSkillActivityCountOutputType
 */
export type SupplierSkillActivityCountOutputType = {
    brands: number;
    mainActivities: number;
};
export type SupplierSkillActivityCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brands?: boolean | SupplierSkillActivityCountOutputTypeCountBrandsArgs;
    mainActivities?: boolean | SupplierSkillActivityCountOutputTypeCountMainActivitiesArgs;
};
/**
 * SupplierSkillActivityCountOutputType without action
 */
export type SupplierSkillActivityCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivityCountOutputType
     */
    select?: Prisma.SupplierSkillActivityCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SupplierSkillActivityCountOutputType without action
 */
export type SupplierSkillActivityCountOutputTypeCountBrandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierBrandMappingWhereInput;
};
/**
 * SupplierSkillActivityCountOutputType without action
 */
export type SupplierSkillActivityCountOutputTypeCountMainActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierMainActivityWhereInput;
};
export type SupplierSkillActivitySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_skills_id?: boolean;
    supplier_id?: boolean;
    supplier_type_id?: boolean;
    expertise_level?: boolean;
    why_choose_us?: boolean;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    brands?: boolean | Prisma.SupplierSkillActivity$brandsArgs<ExtArgs>;
    mainActivities?: boolean | Prisma.SupplierSkillActivity$mainActivitiesArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierSkillActivityCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSkillActivity"]>;
export type SupplierSkillActivitySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_skills_id?: boolean;
    supplier_id?: boolean;
    supplier_type_id?: boolean;
    expertise_level?: boolean;
    why_choose_us?: boolean;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSkillActivity"]>;
export type SupplierSkillActivitySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_skills_id?: boolean;
    supplier_id?: boolean;
    supplier_type_id?: boolean;
    expertise_level?: boolean;
    why_choose_us?: boolean;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierSkillActivity"]>;
export type SupplierSkillActivitySelectScalar = {
    supplier_skills_id?: boolean;
    supplier_id?: boolean;
    supplier_type_id?: boolean;
    expertise_level?: boolean;
    why_choose_us?: boolean;
    is_featured?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type SupplierSkillActivityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_skills_id" | "supplier_id" | "supplier_type_id" | "expertise_level" | "why_choose_us" | "is_featured" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["supplierSkillActivity"]>;
export type SupplierSkillActivityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    brands?: boolean | Prisma.SupplierSkillActivity$brandsArgs<ExtArgs>;
    mainActivities?: boolean | Prisma.SupplierSkillActivity$mainActivitiesArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierSkillActivityCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupplierSkillActivityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
};
export type SupplierSkillActivityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    supplier_type?: boolean | Prisma.SupplierTypeDefaultArgs<ExtArgs>;
};
export type $SupplierSkillActivityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierSkillActivity";
    objects: {
        brands: Prisma.$SupplierBrandMappingPayload<ExtArgs>[];
        mainActivities: Prisma.$SupplierMainActivityPayload<ExtArgs>[];
        supplier: Prisma.$SupplierPayload<ExtArgs>;
        supplier_type: Prisma.$SupplierTypePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_skills_id: number;
        supplier_id: number;
        supplier_type_id: number;
        expertise_level: string | null;
        why_choose_us: string | null;
        is_featured: boolean;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["supplierSkillActivity"]>;
    composites: {};
};
export type SupplierSkillActivityGetPayload<S extends boolean | null | undefined | SupplierSkillActivityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload, S>;
export type SupplierSkillActivityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierSkillActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierSkillActivityCountAggregateInputType | true;
};
export interface SupplierSkillActivityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierSkillActivity'];
        meta: {
            name: 'SupplierSkillActivity';
        };
    };
    /**
     * Find zero or one SupplierSkillActivity that matches the filter.
     * @param {SupplierSkillActivityFindUniqueArgs} args - Arguments to find a SupplierSkillActivity
     * @example
     * // Get one SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierSkillActivityFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierSkillActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierSkillActivityFindUniqueOrThrowArgs} args - Arguments to find a SupplierSkillActivity
     * @example
     * // Get one SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierSkillActivityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierSkillActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityFindFirstArgs} args - Arguments to find a SupplierSkillActivity
     * @example
     * // Get one SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierSkillActivityFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierSkillActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityFindFirstOrThrowArgs} args - Arguments to find a SupplierSkillActivity
     * @example
     * // Get one SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierSkillActivityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierSkillActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierSkillActivities
     * const supplierSkillActivities = await prisma.supplierSkillActivity.findMany()
     *
     * // Get first 10 SupplierSkillActivities
     * const supplierSkillActivities = await prisma.supplierSkillActivity.findMany({ take: 10 })
     *
     * // Only select the `supplier_skills_id`
     * const supplierSkillActivityWithSupplier_skills_idOnly = await prisma.supplierSkillActivity.findMany({ select: { supplier_skills_id: true } })
     *
     */
    findMany<T extends SupplierSkillActivityFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierSkillActivity.
     * @param {SupplierSkillActivityCreateArgs} args - Arguments to create a SupplierSkillActivity.
     * @example
     * // Create one SupplierSkillActivity
     * const SupplierSkillActivity = await prisma.supplierSkillActivity.create({
     *   data: {
     *     // ... data to create a SupplierSkillActivity
     *   }
     * })
     *
     */
    create<T extends SupplierSkillActivityCreateArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierSkillActivities.
     * @param {SupplierSkillActivityCreateManyArgs} args - Arguments to create many SupplierSkillActivities.
     * @example
     * // Create many SupplierSkillActivities
     * const supplierSkillActivity = await prisma.supplierSkillActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierSkillActivityCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierSkillActivities and returns the data saved in the database.
     * @param {SupplierSkillActivityCreateManyAndReturnArgs} args - Arguments to create many SupplierSkillActivities.
     * @example
     * // Create many SupplierSkillActivities
     * const supplierSkillActivity = await prisma.supplierSkillActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierSkillActivities and only return the `supplier_skills_id`
     * const supplierSkillActivityWithSupplier_skills_idOnly = await prisma.supplierSkillActivity.createManyAndReturn({
     *   select: { supplier_skills_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierSkillActivityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierSkillActivity.
     * @param {SupplierSkillActivityDeleteArgs} args - Arguments to delete one SupplierSkillActivity.
     * @example
     * // Delete one SupplierSkillActivity
     * const SupplierSkillActivity = await prisma.supplierSkillActivity.delete({
     *   where: {
     *     // ... filter to delete one SupplierSkillActivity
     *   }
     * })
     *
     */
    delete<T extends SupplierSkillActivityDeleteArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierSkillActivity.
     * @param {SupplierSkillActivityUpdateArgs} args - Arguments to update one SupplierSkillActivity.
     * @example
     * // Update one SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierSkillActivityUpdateArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierSkillActivities.
     * @param {SupplierSkillActivityDeleteManyArgs} args - Arguments to filter SupplierSkillActivities to delete.
     * @example
     * // Delete a few SupplierSkillActivities
     * const { count } = await prisma.supplierSkillActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierSkillActivityDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierSkillActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierSkillActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierSkillActivities
     * const supplierSkillActivity = await prisma.supplierSkillActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierSkillActivityUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierSkillActivities and returns the data updated in the database.
     * @param {SupplierSkillActivityUpdateManyAndReturnArgs} args - Arguments to update many SupplierSkillActivities.
     * @example
     * // Update many SupplierSkillActivities
     * const supplierSkillActivity = await prisma.supplierSkillActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierSkillActivities and only return the `supplier_skills_id`
     * const supplierSkillActivityWithSupplier_skills_idOnly = await prisma.supplierSkillActivity.updateManyAndReturn({
     *   select: { supplier_skills_id: true },
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
    updateManyAndReturn<T extends SupplierSkillActivityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierSkillActivity.
     * @param {SupplierSkillActivityUpsertArgs} args - Arguments to update or create a SupplierSkillActivity.
     * @example
     * // Update or create a SupplierSkillActivity
     * const supplierSkillActivity = await prisma.supplierSkillActivity.upsert({
     *   create: {
     *     // ... data to create a SupplierSkillActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierSkillActivity we want to update
     *   }
     * })
     */
    upsert<T extends SupplierSkillActivityUpsertArgs>(args: Prisma.SelectSubset<T, SupplierSkillActivityUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierSkillActivityClient<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierSkillActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityCountArgs} args - Arguments to filter SupplierSkillActivities to count.
     * @example
     * // Count the number of SupplierSkillActivities
     * const count = await prisma.supplierSkillActivity.count({
     *   where: {
     *     // ... the filter for the SupplierSkillActivities we want to count
     *   }
     * })
    **/
    count<T extends SupplierSkillActivityCountArgs>(args?: Prisma.Subset<T, SupplierSkillActivityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierSkillActivityCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierSkillActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierSkillActivityAggregateArgs>(args: Prisma.Subset<T, SupplierSkillActivityAggregateArgs>): Prisma.PrismaPromise<GetSupplierSkillActivityAggregateType<T>>;
    /**
     * Group by SupplierSkillActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierSkillActivityGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierSkillActivityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierSkillActivityGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierSkillActivityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierSkillActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierSkillActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierSkillActivity model
     */
    readonly fields: SupplierSkillActivityFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierSkillActivity.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierSkillActivityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    brands<T extends Prisma.SupplierSkillActivity$brandsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierSkillActivity$brandsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBrandMappingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mainActivities<T extends Prisma.SupplierSkillActivity$mainActivitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierSkillActivity$mainActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    supplier_type<T extends Prisma.SupplierTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierSkillActivity model
 */
export interface SupplierSkillActivityFieldRefs {
    readonly supplier_skills_id: Prisma.FieldRef<"SupplierSkillActivity", 'Int'>;
    readonly supplier_id: Prisma.FieldRef<"SupplierSkillActivity", 'Int'>;
    readonly supplier_type_id: Prisma.FieldRef<"SupplierSkillActivity", 'Int'>;
    readonly expertise_level: Prisma.FieldRef<"SupplierSkillActivity", 'String'>;
    readonly why_choose_us: Prisma.FieldRef<"SupplierSkillActivity", 'String'>;
    readonly is_featured: Prisma.FieldRef<"SupplierSkillActivity", 'Boolean'>;
    readonly is_active: Prisma.FieldRef<"SupplierSkillActivity", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"SupplierSkillActivity", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"SupplierSkillActivity", 'DateTime'>;
}
/**
 * SupplierSkillActivity findUnique
 */
export type SupplierSkillActivityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSkillActivity to fetch.
     */
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
};
/**
 * SupplierSkillActivity findUniqueOrThrow
 */
export type SupplierSkillActivityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSkillActivity to fetch.
     */
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
};
/**
 * SupplierSkillActivity findFirst
 */
export type SupplierSkillActivityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSkillActivity to fetch.
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSkillActivities to fetch.
     */
    orderBy?: Prisma.SupplierSkillActivityOrderByWithRelationInput | Prisma.SupplierSkillActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierSkillActivities.
     */
    cursor?: Prisma.SupplierSkillActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSkillActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSkillActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierSkillActivities.
     */
    distinct?: Prisma.SupplierSkillActivityScalarFieldEnum | Prisma.SupplierSkillActivityScalarFieldEnum[];
};
/**
 * SupplierSkillActivity findFirstOrThrow
 */
export type SupplierSkillActivityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSkillActivity to fetch.
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSkillActivities to fetch.
     */
    orderBy?: Prisma.SupplierSkillActivityOrderByWithRelationInput | Prisma.SupplierSkillActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierSkillActivities.
     */
    cursor?: Prisma.SupplierSkillActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSkillActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSkillActivities.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierSkillActivities.
     */
    distinct?: Prisma.SupplierSkillActivityScalarFieldEnum | Prisma.SupplierSkillActivityScalarFieldEnum[];
};
/**
 * SupplierSkillActivity findMany
 */
export type SupplierSkillActivityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierSkillActivities to fetch.
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierSkillActivities to fetch.
     */
    orderBy?: Prisma.SupplierSkillActivityOrderByWithRelationInput | Prisma.SupplierSkillActivityOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierSkillActivities.
     */
    cursor?: Prisma.SupplierSkillActivityWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierSkillActivities from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierSkillActivities.
     */
    skip?: number;
    distinct?: Prisma.SupplierSkillActivityScalarFieldEnum | Prisma.SupplierSkillActivityScalarFieldEnum[];
};
/**
 * SupplierSkillActivity create
 */
export type SupplierSkillActivityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierSkillActivity.
     */
    data: Prisma.XOR<Prisma.SupplierSkillActivityCreateInput, Prisma.SupplierSkillActivityUncheckedCreateInput>;
};
/**
 * SupplierSkillActivity createMany
 */
export type SupplierSkillActivityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierSkillActivities.
     */
    data: Prisma.SupplierSkillActivityCreateManyInput | Prisma.SupplierSkillActivityCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierSkillActivity createManyAndReturn
 */
export type SupplierSkillActivityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierSkillActivities.
     */
    data: Prisma.SupplierSkillActivityCreateManyInput | Prisma.SupplierSkillActivityCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierSkillActivity update
 */
export type SupplierSkillActivityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierSkillActivity.
     */
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateInput, Prisma.SupplierSkillActivityUncheckedUpdateInput>;
    /**
     * Choose, which SupplierSkillActivity to update.
     */
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
};
/**
 * SupplierSkillActivity updateMany
 */
export type SupplierSkillActivityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierSkillActivities.
     */
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateManyMutationInput, Prisma.SupplierSkillActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierSkillActivities to update
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * Limit how many SupplierSkillActivities to update.
     */
    limit?: number;
};
/**
 * SupplierSkillActivity updateManyAndReturn
 */
export type SupplierSkillActivityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierSkillActivities.
     */
    data: Prisma.XOR<Prisma.SupplierSkillActivityUpdateManyMutationInput, Prisma.SupplierSkillActivityUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierSkillActivities to update
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * Limit how many SupplierSkillActivities to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierSkillActivity upsert
 */
export type SupplierSkillActivityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierSkillActivity to update in case it exists.
     */
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
    /**
     * In case the SupplierSkillActivity found by the `where` argument doesn't exist, create a new SupplierSkillActivity with this data.
     */
    create: Prisma.XOR<Prisma.SupplierSkillActivityCreateInput, Prisma.SupplierSkillActivityUncheckedCreateInput>;
    /**
     * In case the SupplierSkillActivity was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierSkillActivityUpdateInput, Prisma.SupplierSkillActivityUncheckedUpdateInput>;
};
/**
 * SupplierSkillActivity delete
 */
export type SupplierSkillActivityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
    /**
     * Filter which SupplierSkillActivity to delete.
     */
    where: Prisma.SupplierSkillActivityWhereUniqueInput;
};
/**
 * SupplierSkillActivity deleteMany
 */
export type SupplierSkillActivityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierSkillActivities to delete
     */
    where?: Prisma.SupplierSkillActivityWhereInput;
    /**
     * Limit how many SupplierSkillActivities to delete.
     */
    limit?: number;
};
/**
 * SupplierSkillActivity.brands
 */
export type SupplierSkillActivity$brandsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierBrandMappingWhereInput;
    orderBy?: Prisma.SupplierBrandMappingOrderByWithRelationInput | Prisma.SupplierBrandMappingOrderByWithRelationInput[];
    cursor?: Prisma.SupplierBrandMappingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierBrandMappingScalarFieldEnum | Prisma.SupplierBrandMappingScalarFieldEnum[];
};
/**
 * SupplierSkillActivity.mainActivities
 */
export type SupplierSkillActivity$mainActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierMainActivityWhereInput;
    orderBy?: Prisma.SupplierMainActivityOrderByWithRelationInput | Prisma.SupplierMainActivityOrderByWithRelationInput[];
    cursor?: Prisma.SupplierMainActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierMainActivityScalarFieldEnum | Prisma.SupplierMainActivityScalarFieldEnum[];
};
/**
 * SupplierSkillActivity without action
 */
export type SupplierSkillActivityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierSkillActivity
     */
    select?: Prisma.SupplierSkillActivitySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierSkillActivity
     */
    omit?: Prisma.SupplierSkillActivityOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierSkillActivityInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierSkillActivity.d.ts.map