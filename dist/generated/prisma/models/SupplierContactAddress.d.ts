import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierContactAddress
 *
 */
export type SupplierContactAddressModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierContactAddressPayload>;
export type AggregateSupplierContactAddress = {
    _count: SupplierContactAddressCountAggregateOutputType | null;
    _avg: SupplierContactAddressAvgAggregateOutputType | null;
    _sum: SupplierContactAddressSumAggregateOutputType | null;
    _min: SupplierContactAddressMinAggregateOutputType | null;
    _max: SupplierContactAddressMaxAggregateOutputType | null;
};
export type SupplierContactAddressAvgAggregateOutputType = {
    id: number | null;
    supplier_id: number | null;
};
export type SupplierContactAddressSumAggregateOutputType = {
    id: number | null;
    supplier_id: number | null;
};
export type SupplierContactAddressMinAggregateOutputType = {
    id: number | null;
    supplier_id: number | null;
    is_billing: boolean | null;
    country: string | null;
    province: string | null;
    district: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    contact_full_name: string | null;
    contact_title: string | null;
    contact_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierContactAddressMaxAggregateOutputType = {
    id: number | null;
    supplier_id: number | null;
    is_billing: boolean | null;
    country: string | null;
    province: string | null;
    district: string | null;
    address: string | null;
    phone: string | null;
    website: string | null;
    contact_full_name: string | null;
    contact_title: string | null;
    contact_email: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierContactAddressCountAggregateOutputType = {
    id: number;
    supplier_id: number;
    is_billing: number;
    country: number;
    province: number;
    district: number;
    address: number;
    phone: number;
    website: number;
    contact_full_name: number;
    contact_title: number;
    contact_email: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SupplierContactAddressAvgAggregateInputType = {
    id?: true;
    supplier_id?: true;
};
export type SupplierContactAddressSumAggregateInputType = {
    id?: true;
    supplier_id?: true;
};
export type SupplierContactAddressMinAggregateInputType = {
    id?: true;
    supplier_id?: true;
    is_billing?: true;
    country?: true;
    province?: true;
    district?: true;
    address?: true;
    phone?: true;
    website?: true;
    contact_full_name?: true;
    contact_title?: true;
    contact_email?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierContactAddressMaxAggregateInputType = {
    id?: true;
    supplier_id?: true;
    is_billing?: true;
    country?: true;
    province?: true;
    district?: true;
    address?: true;
    phone?: true;
    website?: true;
    contact_full_name?: true;
    contact_title?: true;
    contact_email?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierContactAddressCountAggregateInputType = {
    id?: true;
    supplier_id?: true;
    is_billing?: true;
    country?: true;
    province?: true;
    district?: true;
    address?: true;
    phone?: true;
    website?: true;
    contact_full_name?: true;
    contact_title?: true;
    contact_email?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SupplierContactAddressAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierContactAddress to aggregate.
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierContactAddresses to fetch.
     */
    orderBy?: Prisma.SupplierContactAddressOrderByWithRelationInput | Prisma.SupplierContactAddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierContactAddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierContactAddresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierContactAddresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierContactAddresses
    **/
    _count?: true | SupplierContactAddressCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierContactAddressAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierContactAddressSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierContactAddressMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierContactAddressMaxAggregateInputType;
};
export type GetSupplierContactAddressAggregateType<T extends SupplierContactAddressAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierContactAddress]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierContactAddress[P]> : Prisma.GetScalarType<T[P], AggregateSupplierContactAddress[P]>;
};
export type SupplierContactAddressGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierContactAddressWhereInput;
    orderBy?: Prisma.SupplierContactAddressOrderByWithAggregationInput | Prisma.SupplierContactAddressOrderByWithAggregationInput[];
    by: Prisma.SupplierContactAddressScalarFieldEnum[] | Prisma.SupplierContactAddressScalarFieldEnum;
    having?: Prisma.SupplierContactAddressScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierContactAddressCountAggregateInputType | true;
    _avg?: SupplierContactAddressAvgAggregateInputType;
    _sum?: SupplierContactAddressSumAggregateInputType;
    _min?: SupplierContactAddressMinAggregateInputType;
    _max?: SupplierContactAddressMaxAggregateInputType;
};
export type SupplierContactAddressGroupByOutputType = {
    id: number;
    supplier_id: number;
    is_billing: boolean;
    country: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at: Date;
    updated_at: Date;
    _count: SupplierContactAddressCountAggregateOutputType | null;
    _avg: SupplierContactAddressAvgAggregateOutputType | null;
    _sum: SupplierContactAddressSumAggregateOutputType | null;
    _min: SupplierContactAddressMinAggregateOutputType | null;
    _max: SupplierContactAddressMaxAggregateOutputType | null;
};
type GetSupplierContactAddressGroupByPayload<T extends SupplierContactAddressGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierContactAddressGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierContactAddressGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierContactAddressGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierContactAddressGroupByOutputType[P]>;
}>>;
export type SupplierContactAddressWhereInput = {
    AND?: Prisma.SupplierContactAddressWhereInput | Prisma.SupplierContactAddressWhereInput[];
    OR?: Prisma.SupplierContactAddressWhereInput[];
    NOT?: Prisma.SupplierContactAddressWhereInput | Prisma.SupplierContactAddressWhereInput[];
    id?: Prisma.IntFilter<"SupplierContactAddress"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierContactAddress"> | number;
    is_billing?: Prisma.BoolFilter<"SupplierContactAddress"> | boolean;
    country?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    province?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    district?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    address?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    phone?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    website?: Prisma.StringNullableFilter<"SupplierContactAddress"> | string | null;
    contact_full_name?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_title?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_email?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    created_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
};
export type SupplierContactAddressOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    is_billing?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    contact_full_name?: Prisma.SortOrder;
    contact_title?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
};
export type SupplierContactAddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.SupplierContactAddressWhereInput | Prisma.SupplierContactAddressWhereInput[];
    OR?: Prisma.SupplierContactAddressWhereInput[];
    NOT?: Prisma.SupplierContactAddressWhereInput | Prisma.SupplierContactAddressWhereInput[];
    supplier_id?: Prisma.IntFilter<"SupplierContactAddress"> | number;
    is_billing?: Prisma.BoolFilter<"SupplierContactAddress"> | boolean;
    country?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    province?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    district?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    address?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    phone?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    website?: Prisma.StringNullableFilter<"SupplierContactAddress"> | string | null;
    contact_full_name?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_title?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_email?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    created_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
}, "id">;
export type SupplierContactAddressOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    is_billing?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrderInput | Prisma.SortOrder;
    contact_full_name?: Prisma.SortOrder;
    contact_title?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierContactAddressCountOrderByAggregateInput;
    _avg?: Prisma.SupplierContactAddressAvgOrderByAggregateInput;
    _max?: Prisma.SupplierContactAddressMaxOrderByAggregateInput;
    _min?: Prisma.SupplierContactAddressMinOrderByAggregateInput;
    _sum?: Prisma.SupplierContactAddressSumOrderByAggregateInput;
};
export type SupplierContactAddressScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierContactAddressScalarWhereWithAggregatesInput | Prisma.SupplierContactAddressScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierContactAddressScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierContactAddressScalarWhereWithAggregatesInput | Prisma.SupplierContactAddressScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"SupplierContactAddress"> | number;
    supplier_id?: Prisma.IntWithAggregatesFilter<"SupplierContactAddress"> | number;
    is_billing?: Prisma.BoolWithAggregatesFilter<"SupplierContactAddress"> | boolean;
    country?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    province?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    district?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    address?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    website?: Prisma.StringNullableWithAggregatesFilter<"SupplierContactAddress"> | string | null;
    contact_full_name?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    contact_title?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    contact_email?: Prisma.StringWithAggregatesFilter<"SupplierContactAddress"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierContactAddress"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierContactAddress"> | Date | string;
};
export type SupplierContactAddressCreateInput = {
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutContactsInput;
};
export type SupplierContactAddressUncheckedCreateInput = {
    id?: number;
    supplier_id: number;
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierContactAddressUpdateInput = {
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutContactsNestedInput;
};
export type SupplierContactAddressUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressCreateManyInput = {
    id?: number;
    supplier_id: number;
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierContactAddressUpdateManyMutationInput = {
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressListRelationFilter = {
    every?: Prisma.SupplierContactAddressWhereInput;
    some?: Prisma.SupplierContactAddressWhereInput;
    none?: Prisma.SupplierContactAddressWhereInput;
};
export type SupplierContactAddressOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierContactAddressCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    is_billing?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_full_name?: Prisma.SortOrder;
    contact_title?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierContactAddressAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
};
export type SupplierContactAddressMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    is_billing?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_full_name?: Prisma.SortOrder;
    contact_title?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierContactAddressMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    is_billing?: Prisma.SortOrder;
    country?: Prisma.SortOrder;
    province?: Prisma.SortOrder;
    district?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    website?: Prisma.SortOrder;
    contact_full_name?: Prisma.SortOrder;
    contact_title?: Prisma.SortOrder;
    contact_email?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierContactAddressSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
};
export type SupplierContactAddressCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput> | Prisma.SupplierContactAddressCreateWithoutSupplierInput[] | Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput | Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierContactAddressCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
};
export type SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput> | Prisma.SupplierContactAddressCreateWithoutSupplierInput[] | Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput | Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierContactAddressCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
};
export type SupplierContactAddressUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput> | Prisma.SupplierContactAddressCreateWithoutSupplierInput[] | Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput | Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierContactAddressUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierContactAddressUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierContactAddressCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    disconnect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    delete?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    connect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    update?: Prisma.SupplierContactAddressUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierContactAddressUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierContactAddressUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierContactAddressUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierContactAddressScalarWhereInput | Prisma.SupplierContactAddressScalarWhereInput[];
};
export type SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput> | Prisma.SupplierContactAddressCreateWithoutSupplierInput[] | Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput | Prisma.SupplierContactAddressCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierContactAddressUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierContactAddressUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierContactAddressCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    disconnect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    delete?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    connect?: Prisma.SupplierContactAddressWhereUniqueInput | Prisma.SupplierContactAddressWhereUniqueInput[];
    update?: Prisma.SupplierContactAddressUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierContactAddressUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierContactAddressUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierContactAddressUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierContactAddressScalarWhereInput | Prisma.SupplierContactAddressScalarWhereInput[];
};
export type SupplierContactAddressCreateWithoutSupplierInput = {
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierContactAddressUncheckedCreateWithoutSupplierInput = {
    id?: number;
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierContactAddressCreateOrConnectWithoutSupplierInput = {
    where: Prisma.SupplierContactAddressWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput>;
};
export type SupplierContactAddressCreateManySupplierInputEnvelope = {
    data: Prisma.SupplierContactAddressCreateManySupplierInput | Prisma.SupplierContactAddressCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type SupplierContactAddressUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierContactAddressWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierContactAddressUpdateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.SupplierContactAddressCreateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedCreateWithoutSupplierInput>;
};
export type SupplierContactAddressUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierContactAddressWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierContactAddressUpdateWithoutSupplierInput, Prisma.SupplierContactAddressUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierContactAddressUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.SupplierContactAddressScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierContactAddressUpdateManyMutationInput, Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierInput>;
};
export type SupplierContactAddressScalarWhereInput = {
    AND?: Prisma.SupplierContactAddressScalarWhereInput | Prisma.SupplierContactAddressScalarWhereInput[];
    OR?: Prisma.SupplierContactAddressScalarWhereInput[];
    NOT?: Prisma.SupplierContactAddressScalarWhereInput | Prisma.SupplierContactAddressScalarWhereInput[];
    id?: Prisma.IntFilter<"SupplierContactAddress"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierContactAddress"> | number;
    is_billing?: Prisma.BoolFilter<"SupplierContactAddress"> | boolean;
    country?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    province?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    district?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    address?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    phone?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    website?: Prisma.StringNullableFilter<"SupplierContactAddress"> | string | null;
    contact_full_name?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_title?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    contact_email?: Prisma.StringFilter<"SupplierContactAddress"> | string;
    created_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierContactAddress"> | Date | string;
};
export type SupplierContactAddressCreateManySupplierInput = {
    id?: number;
    is_billing?: boolean;
    country?: string;
    province: string;
    district: string;
    address: string;
    phone: string;
    website?: string | null;
    contact_full_name: string;
    contact_title: string;
    contact_email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierContactAddressUpdateWithoutSupplierInput = {
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressUncheckedUpdateWithoutSupplierInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressUncheckedUpdateManyWithoutSupplierInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    is_billing?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    country?: Prisma.StringFieldUpdateOperationsInput | string;
    province?: Prisma.StringFieldUpdateOperationsInput | string;
    district?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    website?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contact_full_name?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_title?: Prisma.StringFieldUpdateOperationsInput | string;
    contact_email?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierContactAddressSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_id?: boolean;
    is_billing?: boolean;
    country?: boolean;
    province?: boolean;
    district?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    contact_full_name?: boolean;
    contact_title?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierContactAddress"]>;
export type SupplierContactAddressSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_id?: boolean;
    is_billing?: boolean;
    country?: boolean;
    province?: boolean;
    district?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    contact_full_name?: boolean;
    contact_title?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierContactAddress"]>;
export type SupplierContactAddressSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    supplier_id?: boolean;
    is_billing?: boolean;
    country?: boolean;
    province?: boolean;
    district?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    contact_full_name?: boolean;
    contact_title?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierContactAddress"]>;
export type SupplierContactAddressSelectScalar = {
    id?: boolean;
    supplier_id?: boolean;
    is_billing?: boolean;
    country?: boolean;
    province?: boolean;
    district?: boolean;
    address?: boolean;
    phone?: boolean;
    website?: boolean;
    contact_full_name?: boolean;
    contact_title?: boolean;
    contact_email?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type SupplierContactAddressOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "supplier_id" | "is_billing" | "country" | "province" | "district" | "address" | "phone" | "website" | "contact_full_name" | "contact_title" | "contact_email" | "created_at" | "updated_at", ExtArgs["result"]["supplierContactAddress"]>;
export type SupplierContactAddressInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierContactAddressIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierContactAddressIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type $SupplierContactAddressPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierContactAddress";
    objects: {
        supplier: Prisma.$SupplierPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        supplier_id: number;
        is_billing: boolean;
        country: string;
        province: string;
        district: string;
        address: string;
        phone: string;
        website: string | null;
        contact_full_name: string;
        contact_title: string;
        contact_email: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["supplierContactAddress"]>;
    composites: {};
};
export type SupplierContactAddressGetPayload<S extends boolean | null | undefined | SupplierContactAddressDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload, S>;
export type SupplierContactAddressCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierContactAddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierContactAddressCountAggregateInputType | true;
};
export interface SupplierContactAddressDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierContactAddress'];
        meta: {
            name: 'SupplierContactAddress';
        };
    };
    /**
     * Find zero or one SupplierContactAddress that matches the filter.
     * @param {SupplierContactAddressFindUniqueArgs} args - Arguments to find a SupplierContactAddress
     * @example
     * // Get one SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierContactAddressFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierContactAddress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierContactAddressFindUniqueOrThrowArgs} args - Arguments to find a SupplierContactAddress
     * @example
     * // Get one SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierContactAddressFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierContactAddress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressFindFirstArgs} args - Arguments to find a SupplierContactAddress
     * @example
     * // Get one SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierContactAddressFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierContactAddress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressFindFirstOrThrowArgs} args - Arguments to find a SupplierContactAddress
     * @example
     * // Get one SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierContactAddressFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierContactAddresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierContactAddresses
     * const supplierContactAddresses = await prisma.supplierContactAddress.findMany()
     *
     * // Get first 10 SupplierContactAddresses
     * const supplierContactAddresses = await prisma.supplierContactAddress.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supplierContactAddressWithIdOnly = await prisma.supplierContactAddress.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SupplierContactAddressFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierContactAddress.
     * @param {SupplierContactAddressCreateArgs} args - Arguments to create a SupplierContactAddress.
     * @example
     * // Create one SupplierContactAddress
     * const SupplierContactAddress = await prisma.supplierContactAddress.create({
     *   data: {
     *     // ... data to create a SupplierContactAddress
     *   }
     * })
     *
     */
    create<T extends SupplierContactAddressCreateArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierContactAddresses.
     * @param {SupplierContactAddressCreateManyArgs} args - Arguments to create many SupplierContactAddresses.
     * @example
     * // Create many SupplierContactAddresses
     * const supplierContactAddress = await prisma.supplierContactAddress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierContactAddressCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierContactAddresses and returns the data saved in the database.
     * @param {SupplierContactAddressCreateManyAndReturnArgs} args - Arguments to create many SupplierContactAddresses.
     * @example
     * // Create many SupplierContactAddresses
     * const supplierContactAddress = await prisma.supplierContactAddress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierContactAddresses and only return the `id`
     * const supplierContactAddressWithIdOnly = await prisma.supplierContactAddress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierContactAddressCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierContactAddress.
     * @param {SupplierContactAddressDeleteArgs} args - Arguments to delete one SupplierContactAddress.
     * @example
     * // Delete one SupplierContactAddress
     * const SupplierContactAddress = await prisma.supplierContactAddress.delete({
     *   where: {
     *     // ... filter to delete one SupplierContactAddress
     *   }
     * })
     *
     */
    delete<T extends SupplierContactAddressDeleteArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierContactAddress.
     * @param {SupplierContactAddressUpdateArgs} args - Arguments to update one SupplierContactAddress.
     * @example
     * // Update one SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierContactAddressUpdateArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierContactAddresses.
     * @param {SupplierContactAddressDeleteManyArgs} args - Arguments to filter SupplierContactAddresses to delete.
     * @example
     * // Delete a few SupplierContactAddresses
     * const { count } = await prisma.supplierContactAddress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierContactAddressDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierContactAddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierContactAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierContactAddresses
     * const supplierContactAddress = await prisma.supplierContactAddress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierContactAddressUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierContactAddresses and returns the data updated in the database.
     * @param {SupplierContactAddressUpdateManyAndReturnArgs} args - Arguments to update many SupplierContactAddresses.
     * @example
     * // Update many SupplierContactAddresses
     * const supplierContactAddress = await prisma.supplierContactAddress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierContactAddresses and only return the `id`
     * const supplierContactAddressWithIdOnly = await prisma.supplierContactAddress.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierContactAddressUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierContactAddress.
     * @param {SupplierContactAddressUpsertArgs} args - Arguments to update or create a SupplierContactAddress.
     * @example
     * // Update or create a SupplierContactAddress
     * const supplierContactAddress = await prisma.supplierContactAddress.upsert({
     *   create: {
     *     // ... data to create a SupplierContactAddress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierContactAddress we want to update
     *   }
     * })
     */
    upsert<T extends SupplierContactAddressUpsertArgs>(args: Prisma.SelectSubset<T, SupplierContactAddressUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierContactAddressClient<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierContactAddresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressCountArgs} args - Arguments to filter SupplierContactAddresses to count.
     * @example
     * // Count the number of SupplierContactAddresses
     * const count = await prisma.supplierContactAddress.count({
     *   where: {
     *     // ... the filter for the SupplierContactAddresses we want to count
     *   }
     * })
    **/
    count<T extends SupplierContactAddressCountArgs>(args?: Prisma.Subset<T, SupplierContactAddressCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierContactAddressCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierContactAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierContactAddressAggregateArgs>(args: Prisma.Subset<T, SupplierContactAddressAggregateArgs>): Prisma.PrismaPromise<GetSupplierContactAddressAggregateType<T>>;
    /**
     * Group by SupplierContactAddress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierContactAddressGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierContactAddressGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierContactAddressGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierContactAddressGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierContactAddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierContactAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierContactAddress model
     */
    readonly fields: SupplierContactAddressFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierContactAddress.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierContactAddressClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
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
 * Fields of the SupplierContactAddress model
 */
export interface SupplierContactAddressFieldRefs {
    readonly id: Prisma.FieldRef<"SupplierContactAddress", 'Int'>;
    readonly supplier_id: Prisma.FieldRef<"SupplierContactAddress", 'Int'>;
    readonly is_billing: Prisma.FieldRef<"SupplierContactAddress", 'Boolean'>;
    readonly country: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly province: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly district: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly address: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly phone: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly website: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly contact_full_name: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly contact_title: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly contact_email: Prisma.FieldRef<"SupplierContactAddress", 'String'>;
    readonly created_at: Prisma.FieldRef<"SupplierContactAddress", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"SupplierContactAddress", 'DateTime'>;
}
/**
 * SupplierContactAddress findUnique
 */
export type SupplierContactAddressFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierContactAddress to fetch.
     */
    where: Prisma.SupplierContactAddressWhereUniqueInput;
};
/**
 * SupplierContactAddress findUniqueOrThrow
 */
export type SupplierContactAddressFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierContactAddress to fetch.
     */
    where: Prisma.SupplierContactAddressWhereUniqueInput;
};
/**
 * SupplierContactAddress findFirst
 */
export type SupplierContactAddressFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierContactAddress to fetch.
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierContactAddresses to fetch.
     */
    orderBy?: Prisma.SupplierContactAddressOrderByWithRelationInput | Prisma.SupplierContactAddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierContactAddresses.
     */
    cursor?: Prisma.SupplierContactAddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierContactAddresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierContactAddresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierContactAddresses.
     */
    distinct?: Prisma.SupplierContactAddressScalarFieldEnum | Prisma.SupplierContactAddressScalarFieldEnum[];
};
/**
 * SupplierContactAddress findFirstOrThrow
 */
export type SupplierContactAddressFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierContactAddress to fetch.
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierContactAddresses to fetch.
     */
    orderBy?: Prisma.SupplierContactAddressOrderByWithRelationInput | Prisma.SupplierContactAddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierContactAddresses.
     */
    cursor?: Prisma.SupplierContactAddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierContactAddresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierContactAddresses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierContactAddresses.
     */
    distinct?: Prisma.SupplierContactAddressScalarFieldEnum | Prisma.SupplierContactAddressScalarFieldEnum[];
};
/**
 * SupplierContactAddress findMany
 */
export type SupplierContactAddressFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierContactAddresses to fetch.
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierContactAddresses to fetch.
     */
    orderBy?: Prisma.SupplierContactAddressOrderByWithRelationInput | Prisma.SupplierContactAddressOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierContactAddresses.
     */
    cursor?: Prisma.SupplierContactAddressWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierContactAddresses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierContactAddresses.
     */
    skip?: number;
    distinct?: Prisma.SupplierContactAddressScalarFieldEnum | Prisma.SupplierContactAddressScalarFieldEnum[];
};
/**
 * SupplierContactAddress create
 */
export type SupplierContactAddressCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierContactAddress.
     */
    data: Prisma.XOR<Prisma.SupplierContactAddressCreateInput, Prisma.SupplierContactAddressUncheckedCreateInput>;
};
/**
 * SupplierContactAddress createMany
 */
export type SupplierContactAddressCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierContactAddresses.
     */
    data: Prisma.SupplierContactAddressCreateManyInput | Prisma.SupplierContactAddressCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierContactAddress createManyAndReturn
 */
export type SupplierContactAddressCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierContactAddresses.
     */
    data: Prisma.SupplierContactAddressCreateManyInput | Prisma.SupplierContactAddressCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierContactAddress update
 */
export type SupplierContactAddressUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierContactAddress.
     */
    data: Prisma.XOR<Prisma.SupplierContactAddressUpdateInput, Prisma.SupplierContactAddressUncheckedUpdateInput>;
    /**
     * Choose, which SupplierContactAddress to update.
     */
    where: Prisma.SupplierContactAddressWhereUniqueInput;
};
/**
 * SupplierContactAddress updateMany
 */
export type SupplierContactAddressUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierContactAddresses.
     */
    data: Prisma.XOR<Prisma.SupplierContactAddressUpdateManyMutationInput, Prisma.SupplierContactAddressUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierContactAddresses to update
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * Limit how many SupplierContactAddresses to update.
     */
    limit?: number;
};
/**
 * SupplierContactAddress updateManyAndReturn
 */
export type SupplierContactAddressUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierContactAddresses.
     */
    data: Prisma.XOR<Prisma.SupplierContactAddressUpdateManyMutationInput, Prisma.SupplierContactAddressUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierContactAddresses to update
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * Limit how many SupplierContactAddresses to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierContactAddress upsert
 */
export type SupplierContactAddressUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierContactAddress to update in case it exists.
     */
    where: Prisma.SupplierContactAddressWhereUniqueInput;
    /**
     * In case the SupplierContactAddress found by the `where` argument doesn't exist, create a new SupplierContactAddress with this data.
     */
    create: Prisma.XOR<Prisma.SupplierContactAddressCreateInput, Prisma.SupplierContactAddressUncheckedCreateInput>;
    /**
     * In case the SupplierContactAddress was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierContactAddressUpdateInput, Prisma.SupplierContactAddressUncheckedUpdateInput>;
};
/**
 * SupplierContactAddress delete
 */
export type SupplierContactAddressDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
    /**
     * Filter which SupplierContactAddress to delete.
     */
    where: Prisma.SupplierContactAddressWhereUniqueInput;
};
/**
 * SupplierContactAddress deleteMany
 */
export type SupplierContactAddressDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierContactAddresses to delete
     */
    where?: Prisma.SupplierContactAddressWhereInput;
    /**
     * Limit how many SupplierContactAddresses to delete.
     */
    limit?: number;
};
/**
 * SupplierContactAddress without action
 */
export type SupplierContactAddressDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierContactAddress
     */
    select?: Prisma.SupplierContactAddressSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierContactAddress
     */
    omit?: Prisma.SupplierContactAddressOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierContactAddressInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierContactAddress.d.ts.map