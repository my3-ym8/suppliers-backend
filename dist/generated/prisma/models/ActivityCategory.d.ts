import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model ActivityCategory
 *
 */
export type ActivityCategoryModel = runtime.Types.Result.DefaultSelection<Prisma.$ActivityCategoryPayload>;
export type AggregateActivityCategory = {
    _count: ActivityCategoryCountAggregateOutputType | null;
    _avg: ActivityCategoryAvgAggregateOutputType | null;
    _sum: ActivityCategorySumAggregateOutputType | null;
    _min: ActivityCategoryMinAggregateOutputType | null;
    _max: ActivityCategoryMaxAggregateOutputType | null;
};
export type ActivityCategoryAvgAggregateOutputType = {
    activity_category_id: number | null;
    parent_id: number | null;
};
export type ActivityCategorySumAggregateOutputType = {
    activity_category_id: number | null;
    parent_id: number | null;
};
export type ActivityCategoryMinAggregateOutputType = {
    activity_category_id: number | null;
    name: string | null;
    parent_id: number | null;
    is_active: boolean | null;
    created_by: string | null;
    created_at: Date | null;
};
export type ActivityCategoryMaxAggregateOutputType = {
    activity_category_id: number | null;
    name: string | null;
    parent_id: number | null;
    is_active: boolean | null;
    created_by: string | null;
    created_at: Date | null;
};
export type ActivityCategoryCountAggregateOutputType = {
    activity_category_id: number;
    name: number;
    parent_id: number;
    is_active: number;
    created_by: number;
    created_at: number;
    _all: number;
};
export type ActivityCategoryAvgAggregateInputType = {
    activity_category_id?: true;
    parent_id?: true;
};
export type ActivityCategorySumAggregateInputType = {
    activity_category_id?: true;
    parent_id?: true;
};
export type ActivityCategoryMinAggregateInputType = {
    activity_category_id?: true;
    name?: true;
    parent_id?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
};
export type ActivityCategoryMaxAggregateInputType = {
    activity_category_id?: true;
    name?: true;
    parent_id?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
};
export type ActivityCategoryCountAggregateInputType = {
    activity_category_id?: true;
    name?: true;
    parent_id?: true;
    is_active?: true;
    created_by?: true;
    created_at?: true;
    _all?: true;
};
export type ActivityCategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityCategory to aggregate.
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityCategories to fetch.
     */
    orderBy?: Prisma.ActivityCategoryOrderByWithRelationInput | Prisma.ActivityCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ActivityCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ActivityCategories
    **/
    _count?: true | ActivityCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ActivityCategoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ActivityCategorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ActivityCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ActivityCategoryMaxAggregateInputType;
};
export type GetActivityCategoryAggregateType<T extends ActivityCategoryAggregateArgs> = {
    [P in keyof T & keyof AggregateActivityCategory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateActivityCategory[P]> : Prisma.GetScalarType<T[P], AggregateActivityCategory[P]>;
};
export type ActivityCategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityCategoryWhereInput;
    orderBy?: Prisma.ActivityCategoryOrderByWithAggregationInput | Prisma.ActivityCategoryOrderByWithAggregationInput[];
    by: Prisma.ActivityCategoryScalarFieldEnum[] | Prisma.ActivityCategoryScalarFieldEnum;
    having?: Prisma.ActivityCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ActivityCategoryCountAggregateInputType | true;
    _avg?: ActivityCategoryAvgAggregateInputType;
    _sum?: ActivityCategorySumAggregateInputType;
    _min?: ActivityCategoryMinAggregateInputType;
    _max?: ActivityCategoryMaxAggregateInputType;
};
export type ActivityCategoryGroupByOutputType = {
    activity_category_id: number;
    name: string;
    parent_id: number | null;
    is_active: boolean;
    created_by: string | null;
    created_at: Date;
    _count: ActivityCategoryCountAggregateOutputType | null;
    _avg: ActivityCategoryAvgAggregateOutputType | null;
    _sum: ActivityCategorySumAggregateOutputType | null;
    _min: ActivityCategoryMinAggregateOutputType | null;
    _max: ActivityCategoryMaxAggregateOutputType | null;
};
type GetActivityCategoryGroupByPayload<T extends ActivityCategoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ActivityCategoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ActivityCategoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ActivityCategoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ActivityCategoryGroupByOutputType[P]>;
}>>;
export type ActivityCategoryWhereInput = {
    AND?: Prisma.ActivityCategoryWhereInput | Prisma.ActivityCategoryWhereInput[];
    OR?: Prisma.ActivityCategoryWhereInput[];
    NOT?: Prisma.ActivityCategoryWhereInput | Prisma.ActivityCategoryWhereInput[];
    activity_category_id?: Prisma.IntFilter<"ActivityCategory"> | number;
    name?: Prisma.StringFilter<"ActivityCategory"> | string;
    parent_id?: Prisma.IntNullableFilter<"ActivityCategory"> | number | null;
    is_active?: Prisma.BoolFilter<"ActivityCategory"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"ActivityCategory"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ActivityCategory"> | Date | string;
    created_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    parent?: Prisma.XOR<Prisma.ActivityCategoryNullableScalarRelationFilter, Prisma.ActivityCategoryWhereInput> | null;
    children?: Prisma.ActivityCategoryListRelationFilter;
    supplierMainActivities?: Prisma.SupplierMainActivityListRelationFilter;
};
export type ActivityCategoryOrderByWithRelationInput = {
    activity_category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    created_by_user?: Prisma.AuthUserOrderByWithRelationInput;
    parent?: Prisma.ActivityCategoryOrderByWithRelationInput;
    children?: Prisma.ActivityCategoryOrderByRelationAggregateInput;
    supplierMainActivities?: Prisma.SupplierMainActivityOrderByRelationAggregateInput;
};
export type ActivityCategoryWhereUniqueInput = Prisma.AtLeast<{
    activity_category_id?: number;
    name?: string;
    AND?: Prisma.ActivityCategoryWhereInput | Prisma.ActivityCategoryWhereInput[];
    OR?: Prisma.ActivityCategoryWhereInput[];
    NOT?: Prisma.ActivityCategoryWhereInput | Prisma.ActivityCategoryWhereInput[];
    parent_id?: Prisma.IntNullableFilter<"ActivityCategory"> | number | null;
    is_active?: Prisma.BoolFilter<"ActivityCategory"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"ActivityCategory"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ActivityCategory"> | Date | string;
    created_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    parent?: Prisma.XOR<Prisma.ActivityCategoryNullableScalarRelationFilter, Prisma.ActivityCategoryWhereInput> | null;
    children?: Prisma.ActivityCategoryListRelationFilter;
    supplierMainActivities?: Prisma.SupplierMainActivityListRelationFilter;
}, "activity_category_id" | "name">;
export type ActivityCategoryOrderByWithAggregationInput = {
    activity_category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ActivityCategoryCountOrderByAggregateInput;
    _avg?: Prisma.ActivityCategoryAvgOrderByAggregateInput;
    _max?: Prisma.ActivityCategoryMaxOrderByAggregateInput;
    _min?: Prisma.ActivityCategoryMinOrderByAggregateInput;
    _sum?: Prisma.ActivityCategorySumOrderByAggregateInput;
};
export type ActivityCategoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ActivityCategoryScalarWhereWithAggregatesInput | Prisma.ActivityCategoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ActivityCategoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ActivityCategoryScalarWhereWithAggregatesInput | Prisma.ActivityCategoryScalarWhereWithAggregatesInput[];
    activity_category_id?: Prisma.IntWithAggregatesFilter<"ActivityCategory"> | number;
    name?: Prisma.StringWithAggregatesFilter<"ActivityCategory"> | string;
    parent_id?: Prisma.IntNullableWithAggregatesFilter<"ActivityCategory"> | number | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"ActivityCategory"> | boolean;
    created_by?: Prisma.UuidNullableWithAggregatesFilter<"ActivityCategory"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ActivityCategory"> | Date | string;
};
export type ActivityCategoryCreateInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutActivityCatCreatedInput;
    parent?: Prisma.ActivityCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ActivityCategoryCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryUncheckedCreateInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
    children?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutActivityCatCreatedNestedInput;
    parent?: Prisma.ActivityCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ActivityCategoryUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryCreateManyInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
};
export type ActivityCategoryUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityCategoryUncheckedUpdateManyInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityCategoryListRelationFilter = {
    every?: Prisma.ActivityCategoryWhereInput;
    some?: Prisma.ActivityCategoryWhereInput;
    none?: Prisma.ActivityCategoryWhereInput;
};
export type ActivityCategoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ActivityCategoryScalarRelationFilter = {
    is?: Prisma.ActivityCategoryWhereInput;
    isNot?: Prisma.ActivityCategoryWhereInput;
};
export type ActivityCategoryNullableScalarRelationFilter = {
    is?: Prisma.ActivityCategoryWhereInput | null;
    isNot?: Prisma.ActivityCategoryWhereInput | null;
};
export type ActivityCategoryCountOrderByAggregateInput = {
    activity_category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ActivityCategoryAvgOrderByAggregateInput = {
    activity_category_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
};
export type ActivityCategoryMaxOrderByAggregateInput = {
    activity_category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ActivityCategoryMinOrderByAggregateInput = {
    activity_category_id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ActivityCategorySumOrderByAggregateInput = {
    activity_category_id?: Prisma.SortOrder;
    parent_id?: Prisma.SortOrder;
};
export type ActivityCategoryCreateNestedManyWithoutCreated_by_userInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput> | Prisma.ActivityCategoryCreateWithoutCreated_by_userInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput | Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput[];
    createMany?: Prisma.ActivityCategoryCreateManyCreated_by_userInputEnvelope;
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
};
export type ActivityCategoryUncheckedCreateNestedManyWithoutCreated_by_userInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput> | Prisma.ActivityCategoryCreateWithoutCreated_by_userInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput | Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput[];
    createMany?: Prisma.ActivityCategoryCreateManyCreated_by_userInputEnvelope;
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
};
export type ActivityCategoryUpdateManyWithoutCreated_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput> | Prisma.ActivityCategoryCreateWithoutCreated_by_userInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput | Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput[];
    upsert?: Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutCreated_by_userInput | Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutCreated_by_userInput[];
    createMany?: Prisma.ActivityCategoryCreateManyCreated_by_userInputEnvelope;
    set?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    disconnect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    delete?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    update?: Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutCreated_by_userInput | Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutCreated_by_userInput[];
    updateMany?: Prisma.ActivityCategoryUpdateManyWithWhereWithoutCreated_by_userInput | Prisma.ActivityCategoryUpdateManyWithWhereWithoutCreated_by_userInput[];
    deleteMany?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
};
export type ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput> | Prisma.ActivityCategoryCreateWithoutCreated_by_userInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput | Prisma.ActivityCategoryCreateOrConnectWithoutCreated_by_userInput[];
    upsert?: Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutCreated_by_userInput | Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutCreated_by_userInput[];
    createMany?: Prisma.ActivityCategoryCreateManyCreated_by_userInputEnvelope;
    set?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    disconnect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    delete?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    update?: Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutCreated_by_userInput | Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutCreated_by_userInput[];
    updateMany?: Prisma.ActivityCategoryUpdateManyWithWhereWithoutCreated_by_userInput | Prisma.ActivityCategoryUpdateManyWithWhereWithoutCreated_by_userInput[];
    deleteMany?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
};
export type ActivityCategoryCreateNestedOneWithoutSupplierMainActivitiesInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedCreateWithoutSupplierMainActivitiesInput>;
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutSupplierMainActivitiesInput;
    connect?: Prisma.ActivityCategoryWhereUniqueInput;
};
export type ActivityCategoryUpdateOneRequiredWithoutSupplierMainActivitiesNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedCreateWithoutSupplierMainActivitiesInput>;
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutSupplierMainActivitiesInput;
    upsert?: Prisma.ActivityCategoryUpsertWithoutSupplierMainActivitiesInput;
    connect?: Prisma.ActivityCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ActivityCategoryUpdateToOneWithWhereWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUpdateWithoutSupplierMainActivitiesInput>, Prisma.ActivityCategoryUncheckedUpdateWithoutSupplierMainActivitiesInput>;
};
export type ActivityCategoryCreateNestedOneWithoutChildrenInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutChildrenInput;
    connect?: Prisma.ActivityCategoryWhereUniqueInput;
};
export type ActivityCategoryCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput> | Prisma.ActivityCategoryCreateWithoutParentInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutParentInput | Prisma.ActivityCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ActivityCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
};
export type ActivityCategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput> | Prisma.ActivityCategoryCreateWithoutParentInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutParentInput | Prisma.ActivityCategoryCreateOrConnectWithoutParentInput[];
    createMany?: Prisma.ActivityCategoryCreateManyParentInputEnvelope;
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
};
export type ActivityCategoryUpdateOneWithoutChildrenNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedCreateWithoutChildrenInput>;
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutChildrenInput;
    upsert?: Prisma.ActivityCategoryUpsertWithoutChildrenInput;
    disconnect?: Prisma.ActivityCategoryWhereInput | boolean;
    delete?: Prisma.ActivityCategoryWhereInput | boolean;
    connect?: Prisma.ActivityCategoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ActivityCategoryUpdateToOneWithWhereWithoutChildrenInput, Prisma.ActivityCategoryUpdateWithoutChildrenInput>, Prisma.ActivityCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ActivityCategoryUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput> | Prisma.ActivityCategoryCreateWithoutParentInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutParentInput | Prisma.ActivityCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ActivityCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    disconnect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    delete?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    update?: Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ActivityCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ActivityCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
};
export type ActivityCategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput> | Prisma.ActivityCategoryCreateWithoutParentInput[] | Prisma.ActivityCategoryUncheckedCreateWithoutParentInput[];
    connectOrCreate?: Prisma.ActivityCategoryCreateOrConnectWithoutParentInput | Prisma.ActivityCategoryCreateOrConnectWithoutParentInput[];
    upsert?: Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutParentInput | Prisma.ActivityCategoryUpsertWithWhereUniqueWithoutParentInput[];
    createMany?: Prisma.ActivityCategoryCreateManyParentInputEnvelope;
    set?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    disconnect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    delete?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    connect?: Prisma.ActivityCategoryWhereUniqueInput | Prisma.ActivityCategoryWhereUniqueInput[];
    update?: Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutParentInput | Prisma.ActivityCategoryUpdateWithWhereUniqueWithoutParentInput[];
    updateMany?: Prisma.ActivityCategoryUpdateManyWithWhereWithoutParentInput | Prisma.ActivityCategoryUpdateManyWithWhereWithoutParentInput[];
    deleteMany?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
};
export type ActivityCategoryCreateWithoutCreated_by_userInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    parent?: Prisma.ActivityCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ActivityCategoryCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryUncheckedCreateWithoutCreated_by_userInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_at?: Date | string;
    children?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryCreateOrConnectWithoutCreated_by_userInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput>;
};
export type ActivityCategoryCreateManyCreated_by_userInputEnvelope = {
    data: Prisma.ActivityCategoryCreateManyCreated_by_userInput | Prisma.ActivityCategoryCreateManyCreated_by_userInput[];
    skipDuplicates?: boolean;
};
export type ActivityCategoryUpsertWithWhereUniqueWithoutCreated_by_userInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedUpdateWithoutCreated_by_userInput>;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedCreateWithoutCreated_by_userInput>;
};
export type ActivityCategoryUpdateWithWhereUniqueWithoutCreated_by_userInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutCreated_by_userInput, Prisma.ActivityCategoryUncheckedUpdateWithoutCreated_by_userInput>;
};
export type ActivityCategoryUpdateManyWithWhereWithoutCreated_by_userInput = {
    where: Prisma.ActivityCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateManyMutationInput, Prisma.ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userInput>;
};
export type ActivityCategoryScalarWhereInput = {
    AND?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
    OR?: Prisma.ActivityCategoryScalarWhereInput[];
    NOT?: Prisma.ActivityCategoryScalarWhereInput | Prisma.ActivityCategoryScalarWhereInput[];
    activity_category_id?: Prisma.IntFilter<"ActivityCategory"> | number;
    name?: Prisma.StringFilter<"ActivityCategory"> | string;
    parent_id?: Prisma.IntNullableFilter<"ActivityCategory"> | number | null;
    is_active?: Prisma.BoolFilter<"ActivityCategory"> | boolean;
    created_by?: Prisma.UuidNullableFilter<"ActivityCategory"> | string | null;
    created_at?: Prisma.DateTimeFilter<"ActivityCategory"> | Date | string;
};
export type ActivityCategoryCreateWithoutSupplierMainActivitiesInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutActivityCatCreatedInput;
    parent?: Prisma.ActivityCategoryCreateNestedOneWithoutChildrenInput;
    children?: Prisma.ActivityCategoryCreateNestedManyWithoutParentInput;
};
export type ActivityCategoryUncheckedCreateWithoutSupplierMainActivitiesInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
    children?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutParentInput;
};
export type ActivityCategoryCreateOrConnectWithoutSupplierMainActivitiesInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedCreateWithoutSupplierMainActivitiesInput>;
};
export type ActivityCategoryUpsertWithoutSupplierMainActivitiesInput = {
    update: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedUpdateWithoutSupplierMainActivitiesInput>;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedCreateWithoutSupplierMainActivitiesInput>;
    where?: Prisma.ActivityCategoryWhereInput;
};
export type ActivityCategoryUpdateToOneWithWhereWithoutSupplierMainActivitiesInput = {
    where?: Prisma.ActivityCategoryWhereInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutSupplierMainActivitiesInput, Prisma.ActivityCategoryUncheckedUpdateWithoutSupplierMainActivitiesInput>;
};
export type ActivityCategoryUpdateWithoutSupplierMainActivitiesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutActivityCatCreatedNestedInput;
    parent?: Prisma.ActivityCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ActivityCategoryUpdateManyWithoutParentNestedInput;
};
export type ActivityCategoryUncheckedUpdateWithoutSupplierMainActivitiesInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutParentNestedInput;
};
export type ActivityCategoryCreateWithoutChildrenInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutActivityCatCreatedInput;
    parent?: Prisma.ActivityCategoryCreateNestedOneWithoutChildrenInput;
    supplierMainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryUncheckedCreateWithoutChildrenInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryCreateOrConnectWithoutChildrenInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedCreateWithoutChildrenInput>;
};
export type ActivityCategoryCreateWithoutParentInput = {
    name: string;
    is_active?: boolean;
    created_at?: Date | string;
    created_by_user?: Prisma.AuthUserCreateNestedOneWithoutActivityCatCreatedInput;
    children?: Prisma.ActivityCategoryCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryUncheckedCreateWithoutParentInput = {
    activity_category_id?: number;
    name: string;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
    children?: Prisma.ActivityCategoryUncheckedCreateNestedManyWithoutParentInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedCreateNestedManyWithoutCategoryInput;
};
export type ActivityCategoryCreateOrConnectWithoutParentInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput>;
};
export type ActivityCategoryCreateManyParentInputEnvelope = {
    data: Prisma.ActivityCategoryCreateManyParentInput | Prisma.ActivityCategoryCreateManyParentInput[];
    skipDuplicates?: boolean;
};
export type ActivityCategoryUpsertWithoutChildrenInput = {
    update: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedUpdateWithoutChildrenInput>;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedCreateWithoutChildrenInput>;
    where?: Prisma.ActivityCategoryWhereInput;
};
export type ActivityCategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: Prisma.ActivityCategoryWhereInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutChildrenInput, Prisma.ActivityCategoryUncheckedUpdateWithoutChildrenInput>;
};
export type ActivityCategoryUpdateWithoutChildrenInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutActivityCatCreatedNestedInput;
    parent?: Prisma.ActivityCategoryUpdateOneWithoutChildrenNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateWithoutChildrenInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutParentInput, Prisma.ActivityCategoryUncheckedUpdateWithoutParentInput>;
    create: Prisma.XOR<Prisma.ActivityCategoryCreateWithoutParentInput, Prisma.ActivityCategoryUncheckedCreateWithoutParentInput>;
};
export type ActivityCategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: Prisma.ActivityCategoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateWithoutParentInput, Prisma.ActivityCategoryUncheckedUpdateWithoutParentInput>;
};
export type ActivityCategoryUpdateManyWithWhereWithoutParentInput = {
    where: Prisma.ActivityCategoryScalarWhereInput;
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateManyMutationInput, Prisma.ActivityCategoryUncheckedUpdateManyWithoutParentInput>;
};
export type ActivityCategoryCreateManyCreated_by_userInput = {
    activity_category_id?: number;
    name: string;
    parent_id?: number | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type ActivityCategoryUpdateWithoutCreated_by_userInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: Prisma.ActivityCategoryUpdateOneWithoutChildrenNestedInput;
    children?: Prisma.ActivityCategoryUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateWithoutCreated_by_userInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateManyWithoutCreated_by_userInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    parent_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ActivityCategoryCreateManyParentInput = {
    activity_category_id?: number;
    name: string;
    is_active?: boolean;
    created_by?: string | null;
    created_at?: Date | string;
};
export type ActivityCategoryUpdateWithoutParentInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_by_user?: Prisma.AuthUserUpdateOneWithoutActivityCatCreatedNestedInput;
    children?: Prisma.ActivityCategoryUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateWithoutParentInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    children?: Prisma.ActivityCategoryUncheckedUpdateManyWithoutParentNestedInput;
    supplierMainActivities?: Prisma.SupplierMainActivityUncheckedUpdateManyWithoutCategoryNestedInput;
};
export type ActivityCategoryUncheckedUpdateManyWithoutParentInput = {
    activity_category_id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ActivityCategoryCountOutputType
 */
export type ActivityCategoryCountOutputType = {
    children: number;
    supplierMainActivities: number;
};
export type ActivityCategoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    children?: boolean | ActivityCategoryCountOutputTypeCountChildrenArgs;
    supplierMainActivities?: boolean | ActivityCategoryCountOutputTypeCountSupplierMainActivitiesArgs;
};
/**
 * ActivityCategoryCountOutputType without action
 */
export type ActivityCategoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCategoryCountOutputType
     */
    select?: Prisma.ActivityCategoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ActivityCategoryCountOutputType without action
 */
export type ActivityCategoryCountOutputTypeCountChildrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ActivityCategoryWhereInput;
};
/**
 * ActivityCategoryCountOutputType without action
 */
export type ActivityCategoryCountOutputTypeCountSupplierMainActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierMainActivityWhereInput;
};
export type ActivityCategorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    activity_category_id?: boolean;
    name?: boolean;
    parent_id?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ActivityCategory$childrenArgs<ExtArgs>;
    supplierMainActivities?: boolean | Prisma.ActivityCategory$supplierMainActivitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.ActivityCategoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["activityCategory"]>;
export type ActivityCategorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    activity_category_id?: boolean;
    name?: boolean;
    parent_id?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["activityCategory"]>;
export type ActivityCategorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    activity_category_id?: boolean;
    name?: boolean;
    parent_id?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
}, ExtArgs["result"]["activityCategory"]>;
export type ActivityCategorySelectScalar = {
    activity_category_id?: boolean;
    name?: boolean;
    parent_id?: boolean;
    is_active?: boolean;
    created_by?: boolean;
    created_at?: boolean;
};
export type ActivityCategoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"activity_category_id" | "name" | "parent_id" | "is_active" | "created_by" | "created_at", ExtArgs["result"]["activityCategory"]>;
export type ActivityCategoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
    children?: boolean | Prisma.ActivityCategory$childrenArgs<ExtArgs>;
    supplierMainActivities?: boolean | Prisma.ActivityCategory$supplierMainActivitiesArgs<ExtArgs>;
    _count?: boolean | Prisma.ActivityCategoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ActivityCategoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
};
export type ActivityCategoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    created_by_user?: boolean | Prisma.ActivityCategory$created_by_userArgs<ExtArgs>;
    parent?: boolean | Prisma.ActivityCategory$parentArgs<ExtArgs>;
};
export type $ActivityCategoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ActivityCategory";
    objects: {
        created_by_user: Prisma.$AuthUserPayload<ExtArgs> | null;
        parent: Prisma.$ActivityCategoryPayload<ExtArgs> | null;
        children: Prisma.$ActivityCategoryPayload<ExtArgs>[];
        supplierMainActivities: Prisma.$SupplierMainActivityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        activity_category_id: number;
        name: string;
        parent_id: number | null;
        is_active: boolean;
        created_by: string | null;
        created_at: Date;
    }, ExtArgs["result"]["activityCategory"]>;
    composites: {};
};
export type ActivityCategoryGetPayload<S extends boolean | null | undefined | ActivityCategoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload, S>;
export type ActivityCategoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ActivityCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ActivityCategoryCountAggregateInputType | true;
};
export interface ActivityCategoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ActivityCategory'];
        meta: {
            name: 'ActivityCategory';
        };
    };
    /**
     * Find zero or one ActivityCategory that matches the filter.
     * @param {ActivityCategoryFindUniqueArgs} args - Arguments to find a ActivityCategory
     * @example
     * // Get one ActivityCategory
     * const activityCategory = await prisma.activityCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityCategoryFindUniqueArgs>(args: Prisma.SelectSubset<T, ActivityCategoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one ActivityCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityCategoryFindUniqueOrThrowArgs} args - Arguments to find a ActivityCategory
     * @example
     * // Get one ActivityCategory
     * const activityCategory = await prisma.activityCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityCategoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ActivityCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ActivityCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryFindFirstArgs} args - Arguments to find a ActivityCategory
     * @example
     * // Get one ActivityCategory
     * const activityCategory = await prisma.activityCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityCategoryFindFirstArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first ActivityCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryFindFirstOrThrowArgs} args - Arguments to find a ActivityCategory
     * @example
     * // Get one ActivityCategory
     * const activityCategory = await prisma.activityCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityCategoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more ActivityCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityCategories
     * const activityCategories = await prisma.activityCategory.findMany()
     *
     * // Get first 10 ActivityCategories
     * const activityCategories = await prisma.activityCategory.findMany({ take: 10 })
     *
     * // Only select the `activity_category_id`
     * const activityCategoryWithActivity_category_idOnly = await prisma.activityCategory.findMany({ select: { activity_category_id: true } })
     *
     */
    findMany<T extends ActivityCategoryFindManyArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a ActivityCategory.
     * @param {ActivityCategoryCreateArgs} args - Arguments to create a ActivityCategory.
     * @example
     * // Create one ActivityCategory
     * const ActivityCategory = await prisma.activityCategory.create({
     *   data: {
     *     // ... data to create a ActivityCategory
     *   }
     * })
     *
     */
    create<T extends ActivityCategoryCreateArgs>(args: Prisma.SelectSubset<T, ActivityCategoryCreateArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many ActivityCategories.
     * @param {ActivityCategoryCreateManyArgs} args - Arguments to create many ActivityCategories.
     * @example
     * // Create many ActivityCategories
     * const activityCategory = await prisma.activityCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ActivityCategoryCreateManyArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many ActivityCategories and returns the data saved in the database.
     * @param {ActivityCategoryCreateManyAndReturnArgs} args - Arguments to create many ActivityCategories.
     * @example
     * // Create many ActivityCategories
     * const activityCategory = await prisma.activityCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ActivityCategories and only return the `activity_category_id`
     * const activityCategoryWithActivity_category_idOnly = await prisma.activityCategory.createManyAndReturn({
     *   select: { activity_category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ActivityCategoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a ActivityCategory.
     * @param {ActivityCategoryDeleteArgs} args - Arguments to delete one ActivityCategory.
     * @example
     * // Delete one ActivityCategory
     * const ActivityCategory = await prisma.activityCategory.delete({
     *   where: {
     *     // ... filter to delete one ActivityCategory
     *   }
     * })
     *
     */
    delete<T extends ActivityCategoryDeleteArgs>(args: Prisma.SelectSubset<T, ActivityCategoryDeleteArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one ActivityCategory.
     * @param {ActivityCategoryUpdateArgs} args - Arguments to update one ActivityCategory.
     * @example
     * // Update one ActivityCategory
     * const activityCategory = await prisma.activityCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ActivityCategoryUpdateArgs>(args: Prisma.SelectSubset<T, ActivityCategoryUpdateArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more ActivityCategories.
     * @param {ActivityCategoryDeleteManyArgs} args - Arguments to filter ActivityCategories to delete.
     * @example
     * // Delete a few ActivityCategories
     * const { count } = await prisma.activityCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ActivityCategoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ActivityCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ActivityCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityCategories
     * const activityCategory = await prisma.activityCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ActivityCategoryUpdateManyArgs>(args: Prisma.SelectSubset<T, ActivityCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more ActivityCategories and returns the data updated in the database.
     * @param {ActivityCategoryUpdateManyAndReturnArgs} args - Arguments to update many ActivityCategories.
     * @example
     * // Update many ActivityCategories
     * const activityCategory = await prisma.activityCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ActivityCategories and only return the `activity_category_id`
     * const activityCategoryWithActivity_category_idOnly = await prisma.activityCategory.updateManyAndReturn({
     *   select: { activity_category_id: true },
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
    updateManyAndReturn<T extends ActivityCategoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ActivityCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one ActivityCategory.
     * @param {ActivityCategoryUpsertArgs} args - Arguments to update or create a ActivityCategory.
     * @example
     * // Update or create a ActivityCategory
     * const activityCategory = await prisma.activityCategory.upsert({
     *   create: {
     *     // ... data to create a ActivityCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityCategory we want to update
     *   }
     * })
     */
    upsert<T extends ActivityCategoryUpsertArgs>(args: Prisma.SelectSubset<T, ActivityCategoryUpsertArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of ActivityCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryCountArgs} args - Arguments to filter ActivityCategories to count.
     * @example
     * // Count the number of ActivityCategories
     * const count = await prisma.activityCategory.count({
     *   where: {
     *     // ... the filter for the ActivityCategories we want to count
     *   }
     * })
    **/
    count<T extends ActivityCategoryCountArgs>(args?: Prisma.Subset<T, ActivityCategoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ActivityCategoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a ActivityCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityCategoryAggregateArgs>(args: Prisma.Subset<T, ActivityCategoryAggregateArgs>): Prisma.PrismaPromise<GetActivityCategoryAggregateType<T>>;
    /**
     * Group by ActivityCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCategoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ActivityCategoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ActivityCategoryGroupByArgs['orderBy'];
    } : {
        orderBy?: ActivityCategoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ActivityCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ActivityCategory model
     */
    readonly fields: ActivityCategoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for ActivityCategory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ActivityCategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    created_by_user<T extends Prisma.ActivityCategory$created_by_userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityCategory$created_by_userArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    parent<T extends Prisma.ActivityCategory$parentArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityCategory$parentArgs<ExtArgs>>): Prisma.Prisma__ActivityCategoryClient<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    children<T extends Prisma.ActivityCategory$childrenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityCategory$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ActivityCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierMainActivities<T extends Prisma.ActivityCategory$supplierMainActivitiesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ActivityCategory$supplierMainActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierMainActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the ActivityCategory model
 */
export interface ActivityCategoryFieldRefs {
    readonly activity_category_id: Prisma.FieldRef<"ActivityCategory", 'Int'>;
    readonly name: Prisma.FieldRef<"ActivityCategory", 'String'>;
    readonly parent_id: Prisma.FieldRef<"ActivityCategory", 'Int'>;
    readonly is_active: Prisma.FieldRef<"ActivityCategory", 'Boolean'>;
    readonly created_by: Prisma.FieldRef<"ActivityCategory", 'String'>;
    readonly created_at: Prisma.FieldRef<"ActivityCategory", 'DateTime'>;
}
/**
 * ActivityCategory findUnique
 */
export type ActivityCategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ActivityCategory to fetch.
     */
    where: Prisma.ActivityCategoryWhereUniqueInput;
};
/**
 * ActivityCategory findUniqueOrThrow
 */
export type ActivityCategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ActivityCategory to fetch.
     */
    where: Prisma.ActivityCategoryWhereUniqueInput;
};
/**
 * ActivityCategory findFirst
 */
export type ActivityCategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ActivityCategory to fetch.
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityCategories to fetch.
     */
    orderBy?: Prisma.ActivityCategoryOrderByWithRelationInput | Prisma.ActivityCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActivityCategories.
     */
    cursor?: Prisma.ActivityCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActivityCategories.
     */
    distinct?: Prisma.ActivityCategoryScalarFieldEnum | Prisma.ActivityCategoryScalarFieldEnum[];
};
/**
 * ActivityCategory findFirstOrThrow
 */
export type ActivityCategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ActivityCategory to fetch.
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityCategories to fetch.
     */
    orderBy?: Prisma.ActivityCategoryOrderByWithRelationInput | Prisma.ActivityCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ActivityCategories.
     */
    cursor?: Prisma.ActivityCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ActivityCategories.
     */
    distinct?: Prisma.ActivityCategoryScalarFieldEnum | Prisma.ActivityCategoryScalarFieldEnum[];
};
/**
 * ActivityCategory findMany
 */
export type ActivityCategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which ActivityCategories to fetch.
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ActivityCategories to fetch.
     */
    orderBy?: Prisma.ActivityCategoryOrderByWithRelationInput | Prisma.ActivityCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ActivityCategories.
     */
    cursor?: Prisma.ActivityCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ActivityCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ActivityCategories.
     */
    skip?: number;
    distinct?: Prisma.ActivityCategoryScalarFieldEnum | Prisma.ActivityCategoryScalarFieldEnum[];
};
/**
 * ActivityCategory create
 */
export type ActivityCategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a ActivityCategory.
     */
    data: Prisma.XOR<Prisma.ActivityCategoryCreateInput, Prisma.ActivityCategoryUncheckedCreateInput>;
};
/**
 * ActivityCategory createMany
 */
export type ActivityCategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityCategories.
     */
    data: Prisma.ActivityCategoryCreateManyInput | Prisma.ActivityCategoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * ActivityCategory createManyAndReturn
 */
export type ActivityCategoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCategory
     */
    select?: Prisma.ActivityCategorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityCategory
     */
    omit?: Prisma.ActivityCategoryOmit<ExtArgs> | null;
    /**
     * The data used to create many ActivityCategories.
     */
    data: Prisma.ActivityCategoryCreateManyInput | Prisma.ActivityCategoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActivityCategoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * ActivityCategory update
 */
export type ActivityCategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a ActivityCategory.
     */
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateInput, Prisma.ActivityCategoryUncheckedUpdateInput>;
    /**
     * Choose, which ActivityCategory to update.
     */
    where: Prisma.ActivityCategoryWhereUniqueInput;
};
/**
 * ActivityCategory updateMany
 */
export type ActivityCategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityCategories.
     */
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateManyMutationInput, Prisma.ActivityCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ActivityCategories to update
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * Limit how many ActivityCategories to update.
     */
    limit?: number;
};
/**
 * ActivityCategory updateManyAndReturn
 */
export type ActivityCategoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityCategory
     */
    select?: Prisma.ActivityCategorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ActivityCategory
     */
    omit?: Prisma.ActivityCategoryOmit<ExtArgs> | null;
    /**
     * The data used to update ActivityCategories.
     */
    data: Prisma.XOR<Prisma.ActivityCategoryUpdateManyMutationInput, Prisma.ActivityCategoryUncheckedUpdateManyInput>;
    /**
     * Filter which ActivityCategories to update
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * Limit how many ActivityCategories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ActivityCategoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * ActivityCategory upsert
 */
export type ActivityCategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the ActivityCategory to update in case it exists.
     */
    where: Prisma.ActivityCategoryWhereUniqueInput;
    /**
     * In case the ActivityCategory found by the `where` argument doesn't exist, create a new ActivityCategory with this data.
     */
    create: Prisma.XOR<Prisma.ActivityCategoryCreateInput, Prisma.ActivityCategoryUncheckedCreateInput>;
    /**
     * In case the ActivityCategory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ActivityCategoryUpdateInput, Prisma.ActivityCategoryUncheckedUpdateInput>;
};
/**
 * ActivityCategory delete
 */
export type ActivityCategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which ActivityCategory to delete.
     */
    where: Prisma.ActivityCategoryWhereUniqueInput;
};
/**
 * ActivityCategory deleteMany
 */
export type ActivityCategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityCategories to delete
     */
    where?: Prisma.ActivityCategoryWhereInput;
    /**
     * Limit how many ActivityCategories to delete.
     */
    limit?: number;
};
/**
 * ActivityCategory.created_by_user
 */
export type ActivityCategory$created_by_userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ActivityCategory.parent
 */
export type ActivityCategory$parentArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * ActivityCategory.children
 */
export type ActivityCategory$childrenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ActivityCategory.supplierMainActivities
 */
export type ActivityCategory$supplierMainActivitiesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * ActivityCategory without action
 */
export type ActivityCategoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=ActivityCategory.d.ts.map