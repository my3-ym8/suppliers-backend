import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierStatus
 *
 */
export type SupplierStatusModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierStatusPayload>;
export type AggregateSupplierStatus = {
    _count: SupplierStatusCountAggregateOutputType | null;
    _avg: SupplierStatusAvgAggregateOutputType | null;
    _sum: SupplierStatusSumAggregateOutputType | null;
    _min: SupplierStatusMinAggregateOutputType | null;
    _max: SupplierStatusMaxAggregateOutputType | null;
};
export type SupplierStatusAvgAggregateOutputType = {
    supplier_id: number | null;
};
export type SupplierStatusSumAggregateOutputType = {
    supplier_id: number | null;
};
export type SupplierStatusMinAggregateOutputType = {
    supplier_id: number | null;
    current_status: $Enums.SupplierVerificationStatus | null;
    status_note: string | null;
    changed_by: string | null;
    changed_at: Date | null;
};
export type SupplierStatusMaxAggregateOutputType = {
    supplier_id: number | null;
    current_status: $Enums.SupplierVerificationStatus | null;
    status_note: string | null;
    changed_by: string | null;
    changed_at: Date | null;
};
export type SupplierStatusCountAggregateOutputType = {
    supplier_id: number;
    current_status: number;
    status_note: number;
    changed_by: number;
    changed_at: number;
    _all: number;
};
export type SupplierStatusAvgAggregateInputType = {
    supplier_id?: true;
};
export type SupplierStatusSumAggregateInputType = {
    supplier_id?: true;
};
export type SupplierStatusMinAggregateInputType = {
    supplier_id?: true;
    current_status?: true;
    status_note?: true;
    changed_by?: true;
    changed_at?: true;
};
export type SupplierStatusMaxAggregateInputType = {
    supplier_id?: true;
    current_status?: true;
    status_note?: true;
    changed_by?: true;
    changed_at?: true;
};
export type SupplierStatusCountAggregateInputType = {
    supplier_id?: true;
    current_status?: true;
    status_note?: true;
    changed_by?: true;
    changed_at?: true;
    _all?: true;
};
export type SupplierStatusAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierStatus to aggregate.
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierStatuses to fetch.
     */
    orderBy?: Prisma.SupplierStatusOrderByWithRelationInput | Prisma.SupplierStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierStatuses
    **/
    _count?: true | SupplierStatusCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierStatusAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierStatusSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierStatusMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierStatusMaxAggregateInputType;
};
export type GetSupplierStatusAggregateType<T extends SupplierStatusAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierStatus]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierStatus[P]> : Prisma.GetScalarType<T[P], AggregateSupplierStatus[P]>;
};
export type SupplierStatusGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierStatusWhereInput;
    orderBy?: Prisma.SupplierStatusOrderByWithAggregationInput | Prisma.SupplierStatusOrderByWithAggregationInput[];
    by: Prisma.SupplierStatusScalarFieldEnum[] | Prisma.SupplierStatusScalarFieldEnum;
    having?: Prisma.SupplierStatusScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierStatusCountAggregateInputType | true;
    _avg?: SupplierStatusAvgAggregateInputType;
    _sum?: SupplierStatusSumAggregateInputType;
    _min?: SupplierStatusMinAggregateInputType;
    _max?: SupplierStatusMaxAggregateInputType;
};
export type SupplierStatusGroupByOutputType = {
    supplier_id: number;
    current_status: $Enums.SupplierVerificationStatus;
    status_note: string | null;
    changed_by: string | null;
    changed_at: Date;
    _count: SupplierStatusCountAggregateOutputType | null;
    _avg: SupplierStatusAvgAggregateOutputType | null;
    _sum: SupplierStatusSumAggregateOutputType | null;
    _min: SupplierStatusMinAggregateOutputType | null;
    _max: SupplierStatusMaxAggregateOutputType | null;
};
type GetSupplierStatusGroupByPayload<T extends SupplierStatusGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierStatusGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierStatusGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierStatusGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierStatusGroupByOutputType[P]>;
}>>;
export type SupplierStatusWhereInput = {
    AND?: Prisma.SupplierStatusWhereInput | Prisma.SupplierStatusWhereInput[];
    OR?: Prisma.SupplierStatusWhereInput[];
    NOT?: Prisma.SupplierStatusWhereInput | Prisma.SupplierStatusWhereInput[];
    supplier_id?: Prisma.IntFilter<"SupplierStatus"> | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFilter<"SupplierStatus"> | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.StringNullableFilter<"SupplierStatus"> | string | null;
    changed_by?: Prisma.UuidNullableFilter<"SupplierStatus"> | string | null;
    changed_at?: Prisma.DateTimeFilter<"SupplierStatus"> | Date | string;
    changed_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
};
export type SupplierStatusOrderByWithRelationInput = {
    supplier_id?: Prisma.SortOrder;
    current_status?: Prisma.SortOrder;
    status_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    changed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
    changed_by_user?: Prisma.AuthUserOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
};
export type SupplierStatusWhereUniqueInput = Prisma.AtLeast<{
    supplier_id?: number;
    AND?: Prisma.SupplierStatusWhereInput | Prisma.SupplierStatusWhereInput[];
    OR?: Prisma.SupplierStatusWhereInput[];
    NOT?: Prisma.SupplierStatusWhereInput | Prisma.SupplierStatusWhereInput[];
    current_status?: Prisma.EnumSupplierVerificationStatusFilter<"SupplierStatus"> | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.StringNullableFilter<"SupplierStatus"> | string | null;
    changed_by?: Prisma.UuidNullableFilter<"SupplierStatus"> | string | null;
    changed_at?: Prisma.DateTimeFilter<"SupplierStatus"> | Date | string;
    changed_by_user?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
}, "supplier_id">;
export type SupplierStatusOrderByWithAggregationInput = {
    supplier_id?: Prisma.SortOrder;
    current_status?: Prisma.SortOrder;
    status_note?: Prisma.SortOrderInput | Prisma.SortOrder;
    changed_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierStatusCountOrderByAggregateInput;
    _avg?: Prisma.SupplierStatusAvgOrderByAggregateInput;
    _max?: Prisma.SupplierStatusMaxOrderByAggregateInput;
    _min?: Prisma.SupplierStatusMinOrderByAggregateInput;
    _sum?: Prisma.SupplierStatusSumOrderByAggregateInput;
};
export type SupplierStatusScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierStatusScalarWhereWithAggregatesInput | Prisma.SupplierStatusScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierStatusScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierStatusScalarWhereWithAggregatesInput | Prisma.SupplierStatusScalarWhereWithAggregatesInput[];
    supplier_id?: Prisma.IntWithAggregatesFilter<"SupplierStatus"> | number;
    current_status?: Prisma.EnumSupplierVerificationStatusWithAggregatesFilter<"SupplierStatus"> | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.StringNullableWithAggregatesFilter<"SupplierStatus"> | string | null;
    changed_by?: Prisma.UuidNullableWithAggregatesFilter<"SupplierStatus"> | string | null;
    changed_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierStatus"> | Date | string;
};
export type SupplierStatusCreateInput = {
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_at?: Date | string;
    changed_by_user?: Prisma.AuthUserCreateNestedOneWithoutSupplierStatusChangesInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutStatusInput;
};
export type SupplierStatusUncheckedCreateInput = {
    supplier_id: number;
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_by?: string | null;
    changed_at?: Date | string;
};
export type SupplierStatusUpdateInput = {
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    changed_by_user?: Prisma.AuthUserUpdateOneWithoutSupplierStatusChangesNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutStatusNestedInput;
};
export type SupplierStatusUncheckedUpdateInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusCreateManyInput = {
    supplier_id: number;
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_by?: string | null;
    changed_at?: Date | string;
};
export type SupplierStatusUpdateManyMutationInput = {
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusUncheckedUpdateManyInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusListRelationFilter = {
    every?: Prisma.SupplierStatusWhereInput;
    some?: Prisma.SupplierStatusWhereInput;
    none?: Prisma.SupplierStatusWhereInput;
};
export type SupplierStatusOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierStatusNullableScalarRelationFilter = {
    is?: Prisma.SupplierStatusWhereInput | null;
    isNot?: Prisma.SupplierStatusWhereInput | null;
};
export type SupplierStatusCountOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    current_status?: Prisma.SortOrder;
    status_note?: Prisma.SortOrder;
    changed_by?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type SupplierStatusAvgOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type SupplierStatusMaxOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    current_status?: Prisma.SortOrder;
    status_note?: Prisma.SortOrder;
    changed_by?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type SupplierStatusMinOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    current_status?: Prisma.SortOrder;
    status_note?: Prisma.SortOrder;
    changed_by?: Prisma.SortOrder;
    changed_at?: Prisma.SortOrder;
};
export type SupplierStatusSumOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type SupplierStatusCreateNestedManyWithoutChanged_by_userInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput> | Prisma.SupplierStatusCreateWithoutChanged_by_userInput[] | Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput[];
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput | Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput[];
    createMany?: Prisma.SupplierStatusCreateManyChanged_by_userInputEnvelope;
    connect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
};
export type SupplierStatusUncheckedCreateNestedManyWithoutChanged_by_userInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput> | Prisma.SupplierStatusCreateWithoutChanged_by_userInput[] | Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput[];
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput | Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput[];
    createMany?: Prisma.SupplierStatusCreateManyChanged_by_userInputEnvelope;
    connect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
};
export type SupplierStatusUpdateManyWithoutChanged_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput> | Prisma.SupplierStatusCreateWithoutChanged_by_userInput[] | Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput[];
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput | Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput[];
    upsert?: Prisma.SupplierStatusUpsertWithWhereUniqueWithoutChanged_by_userInput | Prisma.SupplierStatusUpsertWithWhereUniqueWithoutChanged_by_userInput[];
    createMany?: Prisma.SupplierStatusCreateManyChanged_by_userInputEnvelope;
    set?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    disconnect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    delete?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    connect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    update?: Prisma.SupplierStatusUpdateWithWhereUniqueWithoutChanged_by_userInput | Prisma.SupplierStatusUpdateWithWhereUniqueWithoutChanged_by_userInput[];
    updateMany?: Prisma.SupplierStatusUpdateManyWithWhereWithoutChanged_by_userInput | Prisma.SupplierStatusUpdateManyWithWhereWithoutChanged_by_userInput[];
    deleteMany?: Prisma.SupplierStatusScalarWhereInput | Prisma.SupplierStatusScalarWhereInput[];
};
export type SupplierStatusUncheckedUpdateManyWithoutChanged_by_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput> | Prisma.SupplierStatusCreateWithoutChanged_by_userInput[] | Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput[];
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput | Prisma.SupplierStatusCreateOrConnectWithoutChanged_by_userInput[];
    upsert?: Prisma.SupplierStatusUpsertWithWhereUniqueWithoutChanged_by_userInput | Prisma.SupplierStatusUpsertWithWhereUniqueWithoutChanged_by_userInput[];
    createMany?: Prisma.SupplierStatusCreateManyChanged_by_userInputEnvelope;
    set?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    disconnect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    delete?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    connect?: Prisma.SupplierStatusWhereUniqueInput | Prisma.SupplierStatusWhereUniqueInput[];
    update?: Prisma.SupplierStatusUpdateWithWhereUniqueWithoutChanged_by_userInput | Prisma.SupplierStatusUpdateWithWhereUniqueWithoutChanged_by_userInput[];
    updateMany?: Prisma.SupplierStatusUpdateManyWithWhereWithoutChanged_by_userInput | Prisma.SupplierStatusUpdateManyWithWhereWithoutChanged_by_userInput[];
    deleteMany?: Prisma.SupplierStatusScalarWhereInput | Prisma.SupplierStatusScalarWhereInput[];
};
export type SupplierStatusCreateNestedOneWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutSupplierInput;
    connect?: Prisma.SupplierStatusWhereUniqueInput;
};
export type SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutSupplierInput;
    connect?: Prisma.SupplierStatusWhereUniqueInput;
};
export type SupplierStatusUpdateOneWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutSupplierInput;
    upsert?: Prisma.SupplierStatusUpsertWithoutSupplierInput;
    disconnect?: Prisma.SupplierStatusWhereInput | boolean;
    delete?: Prisma.SupplierStatusWhereInput | boolean;
    connect?: Prisma.SupplierStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierStatusUpdateToOneWithWhereWithoutSupplierInput, Prisma.SupplierStatusUpdateWithoutSupplierInput>, Prisma.SupplierStatusUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierStatusCreateOrConnectWithoutSupplierInput;
    upsert?: Prisma.SupplierStatusUpsertWithoutSupplierInput;
    disconnect?: Prisma.SupplierStatusWhereInput | boolean;
    delete?: Prisma.SupplierStatusWhereInput | boolean;
    connect?: Prisma.SupplierStatusWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierStatusUpdateToOneWithWhereWithoutSupplierInput, Prisma.SupplierStatusUpdateWithoutSupplierInput>, Prisma.SupplierStatusUncheckedUpdateWithoutSupplierInput>;
};
export type EnumSupplierVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.SupplierVerificationStatus;
};
export type SupplierStatusCreateWithoutChanged_by_userInput = {
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_at?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutStatusInput;
};
export type SupplierStatusUncheckedCreateWithoutChanged_by_userInput = {
    supplier_id: number;
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_at?: Date | string;
};
export type SupplierStatusCreateOrConnectWithoutChanged_by_userInput = {
    where: Prisma.SupplierStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput>;
};
export type SupplierStatusCreateManyChanged_by_userInputEnvelope = {
    data: Prisma.SupplierStatusCreateManyChanged_by_userInput | Prisma.SupplierStatusCreateManyChanged_by_userInput[];
    skipDuplicates?: boolean;
};
export type SupplierStatusUpsertWithWhereUniqueWithoutChanged_by_userInput = {
    where: Prisma.SupplierStatusWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierStatusUpdateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedUpdateWithoutChanged_by_userInput>;
    create: Prisma.XOR<Prisma.SupplierStatusCreateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedCreateWithoutChanged_by_userInput>;
};
export type SupplierStatusUpdateWithWhereUniqueWithoutChanged_by_userInput = {
    where: Prisma.SupplierStatusWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierStatusUpdateWithoutChanged_by_userInput, Prisma.SupplierStatusUncheckedUpdateWithoutChanged_by_userInput>;
};
export type SupplierStatusUpdateManyWithWhereWithoutChanged_by_userInput = {
    where: Prisma.SupplierStatusScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierStatusUpdateManyMutationInput, Prisma.SupplierStatusUncheckedUpdateManyWithoutChanged_by_userInput>;
};
export type SupplierStatusScalarWhereInput = {
    AND?: Prisma.SupplierStatusScalarWhereInput | Prisma.SupplierStatusScalarWhereInput[];
    OR?: Prisma.SupplierStatusScalarWhereInput[];
    NOT?: Prisma.SupplierStatusScalarWhereInput | Prisma.SupplierStatusScalarWhereInput[];
    supplier_id?: Prisma.IntFilter<"SupplierStatus"> | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFilter<"SupplierStatus"> | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.StringNullableFilter<"SupplierStatus"> | string | null;
    changed_by?: Prisma.UuidNullableFilter<"SupplierStatus"> | string | null;
    changed_at?: Prisma.DateTimeFilter<"SupplierStatus"> | Date | string;
};
export type SupplierStatusCreateWithoutSupplierInput = {
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_at?: Date | string;
    changed_by_user?: Prisma.AuthUserCreateNestedOneWithoutSupplierStatusChangesInput;
};
export type SupplierStatusUncheckedCreateWithoutSupplierInput = {
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_by?: string | null;
    changed_at?: Date | string;
};
export type SupplierStatusCreateOrConnectWithoutSupplierInput = {
    where: Prisma.SupplierStatusWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
};
export type SupplierStatusUpsertWithoutSupplierInput = {
    update: Prisma.XOR<Prisma.SupplierStatusUpdateWithoutSupplierInput, Prisma.SupplierStatusUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.SupplierStatusCreateWithoutSupplierInput, Prisma.SupplierStatusUncheckedCreateWithoutSupplierInput>;
    where?: Prisma.SupplierStatusWhereInput;
};
export type SupplierStatusUpdateToOneWithWhereWithoutSupplierInput = {
    where?: Prisma.SupplierStatusWhereInput;
    data: Prisma.XOR<Prisma.SupplierStatusUpdateWithoutSupplierInput, Prisma.SupplierStatusUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierStatusUpdateWithoutSupplierInput = {
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    changed_by_user?: Prisma.AuthUserUpdateOneWithoutSupplierStatusChangesNestedInput;
};
export type SupplierStatusUncheckedUpdateWithoutSupplierInput = {
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusCreateManyChanged_by_userInput = {
    supplier_id: number;
    current_status?: $Enums.SupplierVerificationStatus;
    status_note?: string | null;
    changed_at?: Date | string;
};
export type SupplierStatusUpdateWithoutChanged_by_userInput = {
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutStatusNestedInput;
};
export type SupplierStatusUncheckedUpdateWithoutChanged_by_userInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusUncheckedUpdateManyWithoutChanged_by_userInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    current_status?: Prisma.EnumSupplierVerificationStatusFieldUpdateOperationsInput | $Enums.SupplierVerificationStatus;
    status_note?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    changed_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierStatusSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    current_status?: boolean;
    status_note?: boolean;
    changed_by?: boolean;
    changed_at?: boolean;
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierStatus"]>;
export type SupplierStatusSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    current_status?: boolean;
    status_note?: boolean;
    changed_by?: boolean;
    changed_at?: boolean;
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierStatus"]>;
export type SupplierStatusSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    current_status?: boolean;
    status_note?: boolean;
    changed_by?: boolean;
    changed_at?: boolean;
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierStatus"]>;
export type SupplierStatusSelectScalar = {
    supplier_id?: boolean;
    current_status?: boolean;
    status_note?: boolean;
    changed_by?: boolean;
    changed_at?: boolean;
};
export type SupplierStatusOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_id" | "current_status" | "status_note" | "changed_by" | "changed_at", ExtArgs["result"]["supplierStatus"]>;
export type SupplierStatusInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierStatusIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierStatusIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    changed_by_user?: boolean | Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type $SupplierStatusPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierStatus";
    objects: {
        changed_by_user: Prisma.$AuthUserPayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_id: number;
        current_status: $Enums.SupplierVerificationStatus;
        status_note: string | null;
        changed_by: string | null;
        changed_at: Date;
    }, ExtArgs["result"]["supplierStatus"]>;
    composites: {};
};
export type SupplierStatusGetPayload<S extends boolean | null | undefined | SupplierStatusDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload, S>;
export type SupplierStatusCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierStatusCountAggregateInputType | true;
};
export interface SupplierStatusDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierStatus'];
        meta: {
            name: 'SupplierStatus';
        };
    };
    /**
     * Find zero or one SupplierStatus that matches the filter.
     * @param {SupplierStatusFindUniqueArgs} args - Arguments to find a SupplierStatus
     * @example
     * // Get one SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierStatusFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierStatusFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierStatusFindUniqueOrThrowArgs} args - Arguments to find a SupplierStatus
     * @example
     * // Get one SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierStatusFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusFindFirstArgs} args - Arguments to find a SupplierStatus
     * @example
     * // Get one SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierStatusFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierStatusFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusFindFirstOrThrowArgs} args - Arguments to find a SupplierStatus
     * @example
     * // Get one SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierStatusFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierStatuses
     * const supplierStatuses = await prisma.supplierStatus.findMany()
     *
     * // Get first 10 SupplierStatuses
     * const supplierStatuses = await prisma.supplierStatus.findMany({ take: 10 })
     *
     * // Only select the `supplier_id`
     * const supplierStatusWithSupplier_idOnly = await prisma.supplierStatus.findMany({ select: { supplier_id: true } })
     *
     */
    findMany<T extends SupplierStatusFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierStatus.
     * @param {SupplierStatusCreateArgs} args - Arguments to create a SupplierStatus.
     * @example
     * // Create one SupplierStatus
     * const SupplierStatus = await prisma.supplierStatus.create({
     *   data: {
     *     // ... data to create a SupplierStatus
     *   }
     * })
     *
     */
    create<T extends SupplierStatusCreateArgs>(args: Prisma.SelectSubset<T, SupplierStatusCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierStatuses.
     * @param {SupplierStatusCreateManyArgs} args - Arguments to create many SupplierStatuses.
     * @example
     * // Create many SupplierStatuses
     * const supplierStatus = await prisma.supplierStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierStatusCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierStatuses and returns the data saved in the database.
     * @param {SupplierStatusCreateManyAndReturnArgs} args - Arguments to create many SupplierStatuses.
     * @example
     * // Create many SupplierStatuses
     * const supplierStatus = await prisma.supplierStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierStatuses and only return the `supplier_id`
     * const supplierStatusWithSupplier_idOnly = await prisma.supplierStatus.createManyAndReturn({
     *   select: { supplier_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierStatusCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierStatus.
     * @param {SupplierStatusDeleteArgs} args - Arguments to delete one SupplierStatus.
     * @example
     * // Delete one SupplierStatus
     * const SupplierStatus = await prisma.supplierStatus.delete({
     *   where: {
     *     // ... filter to delete one SupplierStatus
     *   }
     * })
     *
     */
    delete<T extends SupplierStatusDeleteArgs>(args: Prisma.SelectSubset<T, SupplierStatusDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierStatus.
     * @param {SupplierStatusUpdateArgs} args - Arguments to update one SupplierStatus.
     * @example
     * // Update one SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierStatusUpdateArgs>(args: Prisma.SelectSubset<T, SupplierStatusUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierStatuses.
     * @param {SupplierStatusDeleteManyArgs} args - Arguments to filter SupplierStatuses to delete.
     * @example
     * // Delete a few SupplierStatuses
     * const { count } = await prisma.supplierStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierStatusDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierStatuses
     * const supplierStatus = await prisma.supplierStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierStatusUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierStatuses and returns the data updated in the database.
     * @param {SupplierStatusUpdateManyAndReturnArgs} args - Arguments to update many SupplierStatuses.
     * @example
     * // Update many SupplierStatuses
     * const supplierStatus = await prisma.supplierStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierStatuses and only return the `supplier_id`
     * const supplierStatusWithSupplier_idOnly = await prisma.supplierStatus.updateManyAndReturn({
     *   select: { supplier_id: true },
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
    updateManyAndReturn<T extends SupplierStatusUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierStatus.
     * @param {SupplierStatusUpsertArgs} args - Arguments to update or create a SupplierStatus.
     * @example
     * // Update or create a SupplierStatus
     * const supplierStatus = await prisma.supplierStatus.upsert({
     *   create: {
     *     // ... data to create a SupplierStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierStatus we want to update
     *   }
     * })
     */
    upsert<T extends SupplierStatusUpsertArgs>(args: Prisma.SelectSubset<T, SupplierStatusUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusCountArgs} args - Arguments to filter SupplierStatuses to count.
     * @example
     * // Count the number of SupplierStatuses
     * const count = await prisma.supplierStatus.count({
     *   where: {
     *     // ... the filter for the SupplierStatuses we want to count
     *   }
     * })
    **/
    count<T extends SupplierStatusCountArgs>(args?: Prisma.Subset<T, SupplierStatusCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierStatusCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierStatusAggregateArgs>(args: Prisma.Subset<T, SupplierStatusAggregateArgs>): Prisma.PrismaPromise<GetSupplierStatusAggregateType<T>>;
    /**
     * Group by SupplierStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierStatusGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierStatusGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierStatusGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierStatusGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierStatus model
     */
    readonly fields: SupplierStatusFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierStatus.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierStatusClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    changed_by_user<T extends Prisma.SupplierStatus$changed_by_userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierStatus$changed_by_userArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierStatus model
 */
export interface SupplierStatusFieldRefs {
    readonly supplier_id: Prisma.FieldRef<"SupplierStatus", 'Int'>;
    readonly current_status: Prisma.FieldRef<"SupplierStatus", 'SupplierVerificationStatus'>;
    readonly status_note: Prisma.FieldRef<"SupplierStatus", 'String'>;
    readonly changed_by: Prisma.FieldRef<"SupplierStatus", 'String'>;
    readonly changed_at: Prisma.FieldRef<"SupplierStatus", 'DateTime'>;
}
/**
 * SupplierStatus findUnique
 */
export type SupplierStatusFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierStatus to fetch.
     */
    where: Prisma.SupplierStatusWhereUniqueInput;
};
/**
 * SupplierStatus findUniqueOrThrow
 */
export type SupplierStatusFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierStatus to fetch.
     */
    where: Prisma.SupplierStatusWhereUniqueInput;
};
/**
 * SupplierStatus findFirst
 */
export type SupplierStatusFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierStatus to fetch.
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierStatuses to fetch.
     */
    orderBy?: Prisma.SupplierStatusOrderByWithRelationInput | Prisma.SupplierStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierStatuses.
     */
    cursor?: Prisma.SupplierStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierStatuses.
     */
    distinct?: Prisma.SupplierStatusScalarFieldEnum | Prisma.SupplierStatusScalarFieldEnum[];
};
/**
 * SupplierStatus findFirstOrThrow
 */
export type SupplierStatusFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierStatus to fetch.
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierStatuses to fetch.
     */
    orderBy?: Prisma.SupplierStatusOrderByWithRelationInput | Prisma.SupplierStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierStatuses.
     */
    cursor?: Prisma.SupplierStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierStatuses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierStatuses.
     */
    distinct?: Prisma.SupplierStatusScalarFieldEnum | Prisma.SupplierStatusScalarFieldEnum[];
};
/**
 * SupplierStatus findMany
 */
export type SupplierStatusFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierStatuses to fetch.
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierStatuses to fetch.
     */
    orderBy?: Prisma.SupplierStatusOrderByWithRelationInput | Prisma.SupplierStatusOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierStatuses.
     */
    cursor?: Prisma.SupplierStatusWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierStatuses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierStatuses.
     */
    skip?: number;
    distinct?: Prisma.SupplierStatusScalarFieldEnum | Prisma.SupplierStatusScalarFieldEnum[];
};
/**
 * SupplierStatus create
 */
export type SupplierStatusCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierStatus.
     */
    data: Prisma.XOR<Prisma.SupplierStatusCreateInput, Prisma.SupplierStatusUncheckedCreateInput>;
};
/**
 * SupplierStatus createMany
 */
export type SupplierStatusCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierStatuses.
     */
    data: Prisma.SupplierStatusCreateManyInput | Prisma.SupplierStatusCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierStatus createManyAndReturn
 */
export type SupplierStatusCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierStatuses.
     */
    data: Prisma.SupplierStatusCreateManyInput | Prisma.SupplierStatusCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierStatus update
 */
export type SupplierStatusUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierStatus.
     */
    data: Prisma.XOR<Prisma.SupplierStatusUpdateInput, Prisma.SupplierStatusUncheckedUpdateInput>;
    /**
     * Choose, which SupplierStatus to update.
     */
    where: Prisma.SupplierStatusWhereUniqueInput;
};
/**
 * SupplierStatus updateMany
 */
export type SupplierStatusUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierStatuses.
     */
    data: Prisma.XOR<Prisma.SupplierStatusUpdateManyMutationInput, Prisma.SupplierStatusUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierStatuses to update
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * Limit how many SupplierStatuses to update.
     */
    limit?: number;
};
/**
 * SupplierStatus updateManyAndReturn
 */
export type SupplierStatusUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierStatuses.
     */
    data: Prisma.XOR<Prisma.SupplierStatusUpdateManyMutationInput, Prisma.SupplierStatusUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierStatuses to update
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * Limit how many SupplierStatuses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierStatus upsert
 */
export type SupplierStatusUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierStatus to update in case it exists.
     */
    where: Prisma.SupplierStatusWhereUniqueInput;
    /**
     * In case the SupplierStatus found by the `where` argument doesn't exist, create a new SupplierStatus with this data.
     */
    create: Prisma.XOR<Prisma.SupplierStatusCreateInput, Prisma.SupplierStatusUncheckedCreateInput>;
    /**
     * In case the SupplierStatus was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierStatusUpdateInput, Prisma.SupplierStatusUncheckedUpdateInput>;
};
/**
 * SupplierStatus delete
 */
export type SupplierStatusDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
    /**
     * Filter which SupplierStatus to delete.
     */
    where: Prisma.SupplierStatusWhereUniqueInput;
};
/**
 * SupplierStatus deleteMany
 */
export type SupplierStatusDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierStatuses to delete
     */
    where?: Prisma.SupplierStatusWhereInput;
    /**
     * Limit how many SupplierStatuses to delete.
     */
    limit?: number;
};
/**
 * SupplierStatus.changed_by_user
 */
export type SupplierStatus$changed_by_userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierStatus without action
 */
export type SupplierStatusDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierStatus
     */
    select?: Prisma.SupplierStatusSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierStatus
     */
    omit?: Prisma.SupplierStatusOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierStatusInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierStatus.d.ts.map