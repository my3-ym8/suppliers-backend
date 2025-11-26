import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierType
 *
 */
export type SupplierTypeModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierTypePayload>;
export type AggregateSupplierType = {
    _count: SupplierTypeCountAggregateOutputType | null;
    _avg: SupplierTypeAvgAggregateOutputType | null;
    _sum: SupplierTypeSumAggregateOutputType | null;
    _min: SupplierTypeMinAggregateOutputType | null;
    _max: SupplierTypeMaxAggregateOutputType | null;
};
export type SupplierTypeAvgAggregateOutputType = {
    supplier_type_id: number | null;
};
export type SupplierTypeSumAggregateOutputType = {
    supplier_type_id: number | null;
};
export type SupplierTypeMinAggregateOutputType = {
    supplier_type_id: number | null;
    name: string | null;
    is_active: boolean | null;
    created_by: string | null;
    created_at: Date | null;
};
export type SupplierTypeMaxAggregateOutputType = {
    supplier_type_id: number | null;
    name: string | null;
    is_active: boolean | null;
    created_by: string | null;
    created_at: Date | null;
};
export type SupplierTypeCountAggregateOutputType = {
    supplier_type_id: number;
    name: number;
    is_active: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type SupplierTypeAvgAggregateInputType = {
    supplier_type_id?: true;
};
export type SupplierTypeSumAggregateInputType = {
    supplier_type_id?: true;
};
export type SupplierTypeMinAggregateInputType = {
    supplier_type_id?: true;
    name?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
};
export type SupplierTypeMaxAggregateInputType = {
    supplier_type_id?: true;
    name?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
};
export type SupplierTypeCountAggregateInputType = {
    supplier_type_id?: true;
    name?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type SupplierTypeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierType to aggregate.
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierTypes to fetch.
     */
    orderBy?: Prisma.SupplierTypeOrderByWithRelationInput | Prisma.SupplierTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierTypes
    **/
    _count?: true | SupplierTypeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierTypeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierTypeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierTypeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierTypeMaxAggregateInputType;
};
export type GetSupplierTypeAggregateType<T extends SupplierTypeAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierType]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierType[P]> : Prisma.GetScalarType<T[P], AggregateSupplierType[P]>;
};
export type SupplierTypeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierTypeWhereInput;
    orderBy?: Prisma.SupplierTypeOrderByWithAggregationInput | Prisma.SupplierTypeOrderByWithAggregationInput[];
    by: Prisma.SupplierTypeScalarFieldEnum[] | Prisma.SupplierTypeScalarFieldEnum;
    having?: Prisma.SupplierTypeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierTypeCountAggregateInputType | true;
    _avg?: SupplierTypeAvgAggregateInputType;
    _sum?: SupplierTypeSumAggregateInputType;
    _min?: SupplierTypeMinAggregateInputType;
    _max?: SupplierTypeMaxAggregateInputType;
};
export type SupplierTypeGroupByOutputType = {
    supplier_type_id: number;
    name: string;
    is_active: boolean;
    created_by: string | null;
    created_at: Date;
    _count: SupplierTypeCountAggregateOutputType | null;
    _avg: SupplierTypeAvgAggregateOutputType | null;
    _sum: SupplierTypeSumAggregateOutputType | null;
    _min: SupplierTypeMinAggregateOutputType | null;
    _max: SupplierTypeMaxAggregateOutputType | null;
};
type GetSupplierTypeGroupByPayload<T extends SupplierTypeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierTypeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierTypeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierTypeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierTypeGroupByOutputType[P]>;
}>>;
export type SupplierTypeWhereInput = {
    AND?: Prisma.SupplierTypeWhereInput | Prisma.SupplierTypeWhereInput[];
    OR?: Prisma.SupplierTypeWhereInput[];
    NOT?: Prisma.SupplierTypeWhereInput | Prisma.SupplierTypeWhereInput[];
    supplier_type_id?: Prisma.IntFilter<"SupplierType"> | number;
    name?: Prisma.StringFilter<"SupplierType"> | string;
    is_active?: Prisma.BoolFilter<"SupplierType"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"SupplierType"> | string | null;
    created_at?: Prisma.DateTimeFilter<"SupplierType"> | Date | string;
    skills?: Prisma.SupplierSkillActivityListRelationFilter;
    created_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
};
export type SupplierTypeOrderByWithRelationInput = {
    supplier_type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    skills?: Prisma.SupplierSkillActivityOrderByRelationAggregateInput;
    created_by_user?: Prisma.AuthUserOrderByWithRelationInput;
};
export type SupplierTypeWhereUniqueInput = Prisma.AtLeast<{
    supplier_type_id?: number;
    name?: string;
    AND?: Prisma.SupplierTypeWhereInput | Prisma.SupplierTypeWhereInput[];
    OR?: Prisma.SupplierTypeWhereInput[];
    NOT?: Prisma.SupplierTypeWhereInput | Prisma.SupplierTypeWhereInput[];
    is_active?: Prisma.BoolFilter<"SupplierType"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"SupplierType"> | string | null;
    created_at?: Prisma.DateTimeFilter<"SupplierType"> | Date | string;
    skills?: Prisma.SupplierSkillActivityListRelationFilter;
    created_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
}, "supplier_type_id" | "name">;
export type SupplierTypeOrderByWithAggregationInput = {
    supplier_type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierTypeCountOrderByAggregateInput;
    _avg?: Prisma.SupplierTypeAvgOrderByAggregateInput;
    _max?: Prisma.SupplierTypeMaxOrderByAggregateInput;
    _min?: Prisma.SupplierTypeMinOrderByAggregateInput;
    _sum?: Prisma.SupplierTypeSumOrderByAggregateInput;
};
export type SupplierTypeScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierTypeScalarWhereWithAggregatesInput | Prisma.SupplierTypeScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierTypeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierTypeScalarWhereWithAggregatesInput | Prisma.SupplierTypeScalarWhereWithAggregatesInput[];
    supplier_type_id?: Prisma.IntWithAggregatesFilter<"SupplierType"> | number;
    name?: Prisma.StringWithAggregatesFilter<"SupplierType"> | string;
    is_active?: Prisma.BoolWithAggregatesFilter<"SupplierType"> | boolean;
    created_by?: Prisma.UuidNullableWithAggregatesFilter<"SupplierType"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierType"> | Date | string;
};
export type SupplierTypeCreateInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplier_typeInput;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutSupplierTypesCreatedInput;
};
export type SupplierTypeUncheckedCreateInput = {
    supplier_type_id?: number;
    name: string;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplier_typeInput;
};
export type SupplierTypeUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplier_typeNestedInput;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutSupplierTypesCreatedNestedInput;
};
export type SupplierTypeUncheckedUpdateInput = {
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplier_typeNestedInput;
};
export type SupplierTypeCreateManyInput = {
    supplier_type_id?: number;
    name: string;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
};
export type SupplierTypeUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierTypeUncheckedUpdateManyInput = {
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierTypeListRelationFilter = {
    every?: Prisma.SupplierTypeWhereInput;
    some?: Prisma.SupplierTypeWhereInput;
    none?: Prisma.SupplierTypeWhereInput;
};
export type SupplierTypeOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierTypeScalarRelationFilter = {
    is?: Prisma.SupplierTypeWhereInput;
    isNot?: Prisma.SupplierTypeWhereInput;
};
export type SupplierTypeCountOrderByAggregateInput = {
    supplier_type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SupplierTypeAvgOrderByAggregateInput = {
    supplier_type_id?: Prisma.SortOrder;
};
export type SupplierTypeMaxOrderByAggregateInput = {
    supplier_type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SupplierTypeMinOrderByAggregateInput = {
    supplier_type_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type SupplierTypeSumOrderByAggregateInput = {
    supplier_type_id?: Prisma.SortOrder;
};
export type SupplierTypeCreateNestedManyWithoutCreated_by_userInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput> | Prisma.SupplierTypeCreateWithoutCreated_by_userInput[] | Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput | Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput[];
    createMany?: Prisma.SupplierTypeCreateManyCreated_by_userInputEnvelope;
    connect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
};
export type SupplierTypeUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput> | Prisma.SupplierTypeCreateWithoutCreated_by_userInput[] | Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput | Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput[];
    createMany?: Prisma.SupplierTypeCreateManyCreated_by_userInputEnvelope;
    connect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
};
export type SupplierTypeUpdateManyWithoutCreated_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput> | Prisma.SupplierTypeCreateWithoutCreated_by_userInput[] | Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput | Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput[];
    upsert?: Prisma.SupplierTypeUpsertWithWhereUniqueWithoutCreated_by_userInput | Prisma.SupplierTypeUpsertWithWhereUniqueWithoutCreated_by_userInput[];
    createMany?: Prisma.SupplierTypeCreateManyCreated_by_userInputEnvelope;
    set?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    disconnect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    delete?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    connect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    update?: Prisma.SupplierTypeUpdateWithWhereUniqueWithoutCreated_by_userInput | Prisma.SupplierTypeUpdateWithWhereUniqueWithoutCreated_by_userInput[];
    updateMany?: Prisma.SupplierTypeUpdateManyWithWhereWithoutCreated_by_userInput | Prisma.SupplierTypeUpdateManyWithWhereWithoutCreated_by_userInput[];
    deleteMany?: Prisma.SupplierTypeScalarWhereInput | Prisma.SupplierTypeScalarWhereInput[];
};
export type SupplierTypeUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput> | Prisma.SupplierTypeCreateWithoutCreated_by_userInput[] | Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput | Prisma.SupplierTypeCreateOrConnectWithoutCreated_by_userInput[];
    upsert?: Prisma.SupplierTypeUpsertWithWhereUniqueWithoutCreated_by_userInput | Prisma.SupplierTypeUpsertWithWhereUniqueWithoutCreated_by_userInput[];
    createMany?: Prisma.SupplierTypeCreateManyCreated_by_userInputEnvelope;
    set?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    disconnect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    delete?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    connect?: Prisma.SupplierTypeWhereUniqueInput | Prisma.SupplierTypeWhereUniqueInput[];
    update?: Prisma.SupplierTypeUpdateWithWhereUniqueWithoutCreated_by_userInput | Prisma.SupplierTypeUpdateWithWhereUniqueWithoutCreated_by_userInput[];
    updateMany?: Prisma.SupplierTypeUpdateManyWithWhereWithoutCreated_by_userInput | Prisma.SupplierTypeUpdateManyWithWhereWithoutCreated_by_userInput[];
    deleteMany?: Prisma.SupplierTypeScalarWhereInput | Prisma.SupplierTypeScalarWhereInput[];
};
export type SupplierTypeCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutSkillsInput, Prisma.SupplierTypeUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.SupplierTypeWhereUniqueInput;
};
export type SupplierTypeUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierTypeCreateWithoutSkillsInput, Prisma.SupplierTypeUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.SupplierTypeCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.SupplierTypeUpsertWithoutSkillsInput;
    connect?: Prisma.SupplierTypeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierTypeUpdateToOneWithWhereWithoutSkillsInput, Prisma.SupplierTypeUpdateWithoutSkillsInput>, Prisma.SupplierTypeUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierTypeCreateWithoutCreated_by_userInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplier_typeInput;
};
export type SupplierTypeUncheckedCreateWithoutCreated_by_userInput = {
    supplier_type_id?: number;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplier_typeInput;
};
export type SupplierTypeCreateOrConnectWithoutCreated_by_userInput = {
    where: Prisma.SupplierTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput>;
};
export type SupplierTypeCreateManyCreated_by_userInputEnvelope = {
    data: Prisma.SupplierTypeCreateManyCreated_by_userInput | Prisma.SupplierTypeCreateManyCreated_by_userInput[];
    skipDuplicates?: boolean;
};
export type SupplierTypeUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: Prisma.SupplierTypeWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierTypeUpdateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedUpdateWithoutCreated_by_userInput>;
    create: Prisma.XOR<Prisma.SupplierTypeCreateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedCreateWithoutCreated_by_userInput>;
};
export type SupplierTypeUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: Prisma.SupplierTypeWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierTypeUpdateWithoutCreated_by_userInput, Prisma.SupplierTypeUncheckedUpdateWithoutCreated_by_userInput>;
};
export type SupplierTypeUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: Prisma.SupplierTypeScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierTypeUpdateManyMutationInput, Prisma.SupplierTypeUncheckedUpdateManyWithoutCreated_by_userInput>;
};
export type SupplierTypeScalarWhereInput = {
    AND?: Prisma.SupplierTypeScalarWhereInput | Prisma.SupplierTypeScalarWhereInput[];
    OR?: Prisma.SupplierTypeScalarWhereInput[];
    NOT?: Prisma.SupplierTypeScalarWhereInput | Prisma.SupplierTypeScalarWhereInput[];
    supplier_type_id?: Prisma.IntFilter<"SupplierType"> | number;
    name?: Prisma.StringFilter<"SupplierType"> | string;
    is_active?: Prisma.BoolFilter<"SupplierType"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"SupplierType"> | string | null;
    created_at?: Prisma.DateTimeFilter<"SupplierType"> | Date | string;
};
export type SupplierTypeCreateWithoutSkillsInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutSupplierTypesCreatedInput;
};
export type SupplierTypeUncheckedCreateWithoutSkillsInput = {
    supplier_type_id?: number;
    name: string;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
};
export type SupplierTypeCreateOrConnectWithoutSkillsInput = {
    where: Prisma.SupplierTypeWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierTypeCreateWithoutSkillsInput, Prisma.SupplierTypeUncheckedCreateWithoutSkillsInput>;
};
export type SupplierTypeUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.SupplierTypeUpdateWithoutSkillsInput, Prisma.SupplierTypeUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.SupplierTypeCreateWithoutSkillsInput, Prisma.SupplierTypeUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.SupplierTypeWhereInput;
};
export type SupplierTypeUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.SupplierTypeWhereInput;
    data: Prisma.XOR<Prisma.SupplierTypeUpdateWithoutSkillsInput, Prisma.SupplierTypeUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierTypeUpdateWithoutSkillsInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutSupplierTypesCreatedNestedInput;
};
export type SupplierTypeUncheckedUpdateWithoutSkillsInput = {
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierTypeCreateManyCreated_by_userInput = {
    supplier_type_id?: number;
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
};
export type SupplierTypeUpdateWithoutCreated_by_userInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplier_typeNestedInput;
};
export type SupplierTypeUncheckedUpdateWithoutCreated_by_userInput = {
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplier_typeNestedInput;
};
export type SupplierTypeUncheckedUpdateManyWithoutCreated_by_userInput = {
    supplier_type_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SupplierTypeCountOutputType
 */
export type SupplierTypeCountOutputType = {
    skills: number;
};
export type SupplierTypeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | SupplierTypeCountOutputTypeCountSkillsArgs;
};
/**
 * SupplierTypeCountOutputType without action
 */
export type SupplierTypeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierTypeCountOutputType
     */
    select?: Prisma.SupplierTypeCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SupplierTypeCountOutputType without action
 */
export type SupplierTypeCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_type_id?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    skills?: boolean | Prisma.SupplierType$skillsArgs<ExtArgs>;
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierTypeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierType"]>;
export type SupplierTypeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_type_id?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
}, ExtArgs["result"]["supplierType"]>;
export type SupplierTypeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_type_id?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
}, ExtArgs["result"]["supplierType"]>;
export type SupplierTypeSelectScalar = {
    supplier_type_id?: boolean;
    name?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type SupplierTypeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_type_id" | "name" | "is_active" | "created_by" | "created_at", ExtArgs["result"]["supplierType"]>;
export type SupplierTypeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    skills?: boolean | Prisma.SupplierType$skillsArgs<ExtArgs>;
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierTypeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupplierTypeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
};
export type SupplierTypeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    created_by_user?: boolean | Prisma.SupplierType$created_by_userArgs<ExtArgs>;
};
export type $SupplierTypePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierType";
    objects: {
        skills: Prisma.$SupplierSkillActivityPayload<ExtArgs>[];
        created_by_user: Prisma.$AuthUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_type_id: number;
        name: string;
        is_active: boolean;
        created_by: string | null;
        created_at: Date;
    }, ExtArgs["result"]["supplierType"]>;
    composites: {};
};
export type SupplierTypeGetPayload<S extends boolean | null | undefined | SupplierTypeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload, S>;
export type SupplierTypeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierTypeCountAggregateInputType | true;
};
export interface SupplierTypeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierType'];
        meta: {
            name: 'SupplierType';
        };
    };
    /**
     * Find zero or one SupplierType that matches the filter.
     * @param {SupplierTypeFindUniqueArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierTypeFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierTypeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierTypeFindUniqueOrThrowArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierTypeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindFirstArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierTypeFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierTypeFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindFirstOrThrowArgs} args - Arguments to find a SupplierType
     * @example
     * // Get one SupplierType
     * const supplierType = await prisma.supplierType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierTypeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierTypes
     * const supplierTypes = await prisma.supplierType.findMany()
     *
     * // Get first 10 SupplierTypes
     * const supplierTypes = await prisma.supplierType.findMany({ take: 10 })
     *
     * // Only select the `supplier_type_id`
     * const supplierTypeWithSupplier_type_idOnly = await prisma.supplierType.findMany({ select: { supplier_type_id: true } })
     *
     */
    findMany<T extends SupplierTypeFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierType.
     * @param {SupplierTypeCreateArgs} args - Arguments to create a SupplierType.
     * @example
     * // Create one SupplierType
     * const SupplierType = await prisma.supplierType.create({
     *   data: {
     *     // ... data to create a SupplierType
     *   }
     * })
     *
     */
    create<T extends SupplierTypeCreateArgs>(args: Prisma.SelectSubset<T, SupplierTypeCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierTypes.
     * @param {SupplierTypeCreateManyArgs} args - Arguments to create many SupplierTypes.
     * @example
     * // Create many SupplierTypes
     * const supplierType = await prisma.supplierType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierTypeCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierTypes and returns the data saved in the database.
     * @param {SupplierTypeCreateManyAndReturnArgs} args - Arguments to create many SupplierTypes.
     * @example
     * // Create many SupplierTypes
     * const supplierType = await prisma.supplierType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierTypes and only return the `supplier_type_id`
     * const supplierTypeWithSupplier_type_idOnly = await prisma.supplierType.createManyAndReturn({
     *   select: { supplier_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierTypeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierType.
     * @param {SupplierTypeDeleteArgs} args - Arguments to delete one SupplierType.
     * @example
     * // Delete one SupplierType
     * const SupplierType = await prisma.supplierType.delete({
     *   where: {
     *     // ... filter to delete one SupplierType
     *   }
     * })
     *
     */
    delete<T extends SupplierTypeDeleteArgs>(args: Prisma.SelectSubset<T, SupplierTypeDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierType.
     * @param {SupplierTypeUpdateArgs} args - Arguments to update one SupplierType.
     * @example
     * // Update one SupplierType
     * const supplierType = await prisma.supplierType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierTypeUpdateArgs>(args: Prisma.SelectSubset<T, SupplierTypeUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierTypes.
     * @param {SupplierTypeDeleteManyArgs} args - Arguments to filter SupplierTypes to delete.
     * @example
     * // Delete a few SupplierTypes
     * const { count } = await prisma.supplierType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierTypeDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierTypes
     * const supplierType = await prisma.supplierType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierTypeUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierTypes and returns the data updated in the database.
     * @param {SupplierTypeUpdateManyAndReturnArgs} args - Arguments to update many SupplierTypes.
     * @example
     * // Update many SupplierTypes
     * const supplierType = await prisma.supplierType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierTypes and only return the `supplier_type_id`
     * const supplierTypeWithSupplier_type_idOnly = await prisma.supplierType.updateManyAndReturn({
     *   select: { supplier_type_id: true },
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
    updateManyAndReturn<T extends SupplierTypeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierType.
     * @param {SupplierTypeUpsertArgs} args - Arguments to update or create a SupplierType.
     * @example
     * // Update or create a SupplierType
     * const supplierType = await prisma.supplierType.upsert({
     *   create: {
     *     // ... data to create a SupplierType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierType we want to update
     *   }
     * })
     */
    upsert<T extends SupplierTypeUpsertArgs>(args: Prisma.SelectSubset<T, SupplierTypeUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierTypeClient<runtime.Types.Result.GetResult<Prisma.$SupplierTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeCountArgs} args - Arguments to filter SupplierTypes to count.
     * @example
     * // Count the number of SupplierTypes
     * const count = await prisma.supplierType.count({
     *   where: {
     *     // ... the filter for the SupplierTypes we want to count
     *   }
     * })
    **/
    count<T extends SupplierTypeCountArgs>(args?: Prisma.Subset<T, SupplierTypeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierTypeCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierTypeAggregateArgs>(args: Prisma.Subset<T, SupplierTypeAggregateArgs>): Prisma.PrismaPromise<GetSupplierTypeAggregateType<T>>;
    /**
     * Group by SupplierType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierTypeGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierTypeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierTypeGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierTypeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierType model
     */
    readonly fields: SupplierTypeFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierType.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierTypeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    skills<T extends Prisma.SupplierType$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierType$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    created_by_user<T extends Prisma.SupplierType$created_by_userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierType$created_by_userArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierType model
 */
export interface SupplierTypeFieldRefs {
    readonly supplier_type_id: Prisma.FieldRef<"SupplierType", 'Int'>;
    readonly name: Prisma.FieldRef<"SupplierType", 'String'>;
    readonly is_active: Prisma.FieldRef<"SupplierType", 'Boolean'>;
    readonly created_by: Prisma.FieldRef<"SupplierType", 'String'>;
    readonly created_at: Prisma.FieldRef<"SupplierType", 'DateTime'>;
}
/**
 * SupplierType findUnique
 */
export type SupplierTypeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SupplierType to fetch.
     */
    where: Prisma.SupplierTypeWhereUniqueInput;
};
/**
 * SupplierType findUniqueOrThrow
 */
export type SupplierTypeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SupplierType to fetch.
     */
    where: Prisma.SupplierTypeWhereUniqueInput;
};
/**
 * SupplierType findFirst
 */
export type SupplierTypeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SupplierType to fetch.
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierTypes to fetch.
     */
    orderBy?: Prisma.SupplierTypeOrderByWithRelationInput | Prisma.SupplierTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierTypes.
     */
    cursor?: Prisma.SupplierTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierTypes.
     */
    distinct?: Prisma.SupplierTypeScalarFieldEnum | Prisma.SupplierTypeScalarFieldEnum[];
};
/**
 * SupplierType findFirstOrThrow
 */
export type SupplierTypeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SupplierType to fetch.
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierTypes to fetch.
     */
    orderBy?: Prisma.SupplierTypeOrderByWithRelationInput | Prisma.SupplierTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierTypes.
     */
    cursor?: Prisma.SupplierTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierTypes.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierTypes.
     */
    distinct?: Prisma.SupplierTypeScalarFieldEnum | Prisma.SupplierTypeScalarFieldEnum[];
};
/**
 * SupplierType findMany
 */
export type SupplierTypeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which SupplierTypes to fetch.
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierTypes to fetch.
     */
    orderBy?: Prisma.SupplierTypeOrderByWithRelationInput | Prisma.SupplierTypeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierTypes.
     */
    cursor?: Prisma.SupplierTypeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierTypes from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierTypes.
     */
    skip?: number;
    distinct?: Prisma.SupplierTypeScalarFieldEnum | Prisma.SupplierTypeScalarFieldEnum[];
};
/**
 * SupplierType create
 */
export type SupplierTypeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a SupplierType.
     */
    data: Prisma.XOR<Prisma.SupplierTypeCreateInput, Prisma.SupplierTypeUncheckedCreateInput>;
};
/**
 * SupplierType createMany
 */
export type SupplierTypeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierTypes.
     */
    data: Prisma.SupplierTypeCreateManyInput | Prisma.SupplierTypeCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierType createManyAndReturn
 */
export type SupplierTypeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierType
     */
    select?: Prisma.SupplierTypeSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierType
     */
    omit?: Prisma.SupplierTypeOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierTypes.
     */
    data: Prisma.SupplierTypeCreateManyInput | Prisma.SupplierTypeCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierTypeIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierType update
 */
export type SupplierTypeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a SupplierType.
     */
    data: Prisma.XOR<Prisma.SupplierTypeUpdateInput, Prisma.SupplierTypeUncheckedUpdateInput>;
    /**
     * Choose, which SupplierType to update.
     */
    where: Prisma.SupplierTypeWhereUniqueInput;
};
/**
 * SupplierType updateMany
 */
export type SupplierTypeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierTypes.
     */
    data: Prisma.XOR<Prisma.SupplierTypeUpdateManyMutationInput, Prisma.SupplierTypeUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierTypes to update
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * Limit how many SupplierTypes to update.
     */
    limit?: number;
};
/**
 * SupplierType updateManyAndReturn
 */
export type SupplierTypeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierType
     */
    select?: Prisma.SupplierTypeSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierType
     */
    omit?: Prisma.SupplierTypeOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierTypes.
     */
    data: Prisma.XOR<Prisma.SupplierTypeUpdateManyMutationInput, Prisma.SupplierTypeUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierTypes to update
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * Limit how many SupplierTypes to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierTypeIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierType upsert
 */
export type SupplierTypeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the SupplierType to update in case it exists.
     */
    where: Prisma.SupplierTypeWhereUniqueInput;
    /**
     * In case the SupplierType found by the `where` argument doesn't exist, create a new SupplierType with this data.
     */
    create: Prisma.XOR<Prisma.SupplierTypeCreateInput, Prisma.SupplierTypeUncheckedCreateInput>;
    /**
     * In case the SupplierType was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierTypeUpdateInput, Prisma.SupplierTypeUncheckedUpdateInput>;
};
/**
 * SupplierType delete
 */
export type SupplierTypeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which SupplierType to delete.
     */
    where: Prisma.SupplierTypeWhereUniqueInput;
};
/**
 * SupplierType deleteMany
 */
export type SupplierTypeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierTypes to delete
     */
    where?: Prisma.SupplierTypeWhereInput;
    /**
     * Limit how many SupplierTypes to delete.
     */
    limit?: number;
};
/**
 * SupplierType.skills
 */
export type SupplierType$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierSkillActivityWhereInput;
    orderBy?: Prisma.SupplierSkillActivityOrderByWithRelationInput | Prisma.SupplierSkillActivityOrderByWithRelationInput[];
    cursor?: Prisma.SupplierSkillActivityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierSkillActivityScalarFieldEnum | Prisma.SupplierSkillActivityScalarFieldEnum[];
};
/**
 * SupplierType.created_by_user
 */
export type SupplierType$created_by_userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierType without action
 */
export type SupplierTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=SupplierType.d.ts.map