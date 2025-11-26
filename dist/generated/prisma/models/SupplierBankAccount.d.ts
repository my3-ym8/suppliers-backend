import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierBankAccount
 *
 */
export type SupplierBankAccountModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierBankAccountPayload>;
export type AggregateSupplierBankAccount = {
    _count: SupplierBankAccountCountAggregateOutputType | null;
    _avg: SupplierBankAccountAvgAggregateOutputType | null;
    _sum: SupplierBankAccountSumAggregateOutputType | null;
    _min: SupplierBankAccountMinAggregateOutputType | null;
    _max: SupplierBankAccountMaxAggregateOutputType | null;
};
export type SupplierBankAccountAvgAggregateOutputType = {
    bank_account_id: number | null;
    supplier_id: number | null;
    proof_file_id: number | null;
};
export type SupplierBankAccountSumAggregateOutputType = {
    bank_account_id: number | null;
    supplier_id: number | null;
    proof_file_id: number | null;
};
export type SupplierBankAccountMinAggregateOutputType = {
    bank_account_id: number | null;
    supplier_id: number | null;
    bank_name: string | null;
    iban: string | null;
    account_holder_name: string | null;
    proof_file_id: number | null;
    is_primary: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierBankAccountMaxAggregateOutputType = {
    bank_account_id: number | null;
    supplier_id: number | null;
    bank_name: string | null;
    iban: string | null;
    account_holder_name: string | null;
    proof_file_id: number | null;
    is_primary: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierBankAccountCountAggregateOutputType = {
    bank_account_id: number;
    supplier_id: number;
    bank_name: number;
    iban: number;
    account_holder_name: number;
    proof_file_id: number;
    is_primary: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SupplierBankAccountAvgAggregateInputType = {
    bank_account_id?: true;
    supplier_id?: true;
    proof_file_id?: true;
};
export type SupplierBankAccountSumAggregateInputType = {
    bank_account_id?: true;
    supplier_id?: true;
    proof_file_id?: true;
};
export type SupplierBankAccountMinAggregateInputType = {
    bank_account_id?: true;
    supplier_id?: true;
    bank_name?: true;
    iban?: true;
    account_holder_name?: true;
    proof_file_id?: true;
    is_primary?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierBankAccountMaxAggregateInputType = {
    bank_account_id?: true;
    supplier_id?: true;
    bank_name?: true;
    iban?: true;
    account_holder_name?: true;
    proof_file_id?: true;
    is_primary?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierBankAccountCountAggregateInputType = {
    bank_account_id?: true;
    supplier_id?: true;
    bank_name?: true;
    iban?: true;
    account_holder_name?: true;
    proof_file_id?: true;
    is_primary?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SupplierBankAccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBankAccount to aggregate.
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBankAccounts to fetch.
     */
    orderBy?: Prisma.SupplierBankAccountOrderByWithRelationInput | Prisma.SupplierBankAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierBankAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBankAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBankAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierBankAccounts
    **/
    _count?: true | SupplierBankAccountCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierBankAccountAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierBankAccountSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierBankAccountMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierBankAccountMaxAggregateInputType;
};
export type GetSupplierBankAccountAggregateType<T extends SupplierBankAccountAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierBankAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierBankAccount[P]> : Prisma.GetScalarType<T[P], AggregateSupplierBankAccount[P]>;
};
export type SupplierBankAccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierBankAccountWhereInput;
    orderBy?: Prisma.SupplierBankAccountOrderByWithAggregationInput | Prisma.SupplierBankAccountOrderByWithAggregationInput[];
    by: Prisma.SupplierBankAccountScalarFieldEnum[] | Prisma.SupplierBankAccountScalarFieldEnum;
    having?: Prisma.SupplierBankAccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierBankAccountCountAggregateInputType | true;
    _avg?: SupplierBankAccountAvgAggregateInputType;
    _sum?: SupplierBankAccountSumAggregateInputType;
    _min?: SupplierBankAccountMinAggregateInputType;
    _max?: SupplierBankAccountMaxAggregateInputType;
};
export type SupplierBankAccountGroupByOutputType = {
    bank_account_id: number;
    supplier_id: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    proof_file_id: number | null;
    is_primary: boolean;
    created_at: Date;
    updated_at: Date;
    _count: SupplierBankAccountCountAggregateOutputType | null;
    _avg: SupplierBankAccountAvgAggregateOutputType | null;
    _sum: SupplierBankAccountSumAggregateOutputType | null;
    _min: SupplierBankAccountMinAggregateOutputType | null;
    _max: SupplierBankAccountMaxAggregateOutputType | null;
};
type GetSupplierBankAccountGroupByPayload<T extends SupplierBankAccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierBankAccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierBankAccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierBankAccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierBankAccountGroupByOutputType[P]>;
}>>;
export type SupplierBankAccountWhereInput = {
    AND?: Prisma.SupplierBankAccountWhereInput | Prisma.SupplierBankAccountWhereInput[];
    OR?: Prisma.SupplierBankAccountWhereInput[];
    NOT?: Prisma.SupplierBankAccountWhereInput | Prisma.SupplierBankAccountWhereInput[];
    bank_account_id?: Prisma.IntFilter<"SupplierBankAccount"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierBankAccount"> | number;
    bank_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    iban?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    account_holder_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    proof_file_id?: Prisma.IntNullableFilter<"SupplierBankAccount"> | number | null;
    is_primary?: Prisma.BoolFilter<"SupplierBankAccount"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
    proof_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
};
export type SupplierBankAccountOrderByWithRelationInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    bank_name?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    account_holder_name?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    proof_file?: Prisma.FileOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
};
export type SupplierBankAccountWhereUniqueInput = Prisma.AtLeast<{
    bank_account_id?: number;
    AND?: Prisma.SupplierBankAccountWhereInput | Prisma.SupplierBankAccountWhereInput[];
    OR?: Prisma.SupplierBankAccountWhereInput[];
    NOT?: Prisma.SupplierBankAccountWhereInput | Prisma.SupplierBankAccountWhereInput[];
    supplier_id?: Prisma.IntFilter<"SupplierBankAccount"> | number;
    bank_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    iban?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    account_holder_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    proof_file_id?: Prisma.IntNullableFilter<"SupplierBankAccount"> | number | null;
    is_primary?: Prisma.BoolFilter<"SupplierBankAccount"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
    proof_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
}, "bank_account_id">;
export type SupplierBankAccountOrderByWithAggregationInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    bank_name?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    account_holder_name?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierBankAccountCountOrderByAggregateInput;
    _avg?: Prisma.SupplierBankAccountAvgOrderByAggregateInput;
    _max?: Prisma.SupplierBankAccountMaxOrderByAggregateInput;
    _min?: Prisma.SupplierBankAccountMinOrderByAggregateInput;
    _sum?: Prisma.SupplierBankAccountSumOrderByAggregateInput;
};
export type SupplierBankAccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierBankAccountScalarWhereWithAggregatesInput | Prisma.SupplierBankAccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierBankAccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierBankAccountScalarWhereWithAggregatesInput | Prisma.SupplierBankAccountScalarWhereWithAggregatesInput[];
    bank_account_id?: Prisma.IntWithAggregatesFilter<"SupplierBankAccount"> | number;
    supplier_id?: Prisma.IntWithAggregatesFilter<"SupplierBankAccount"> | number;
    bank_name?: Prisma.StringWithAggregatesFilter<"SupplierBankAccount"> | string;
    iban?: Prisma.StringWithAggregatesFilter<"SupplierBankAccount"> | string;
    account_holder_name?: Prisma.StringWithAggregatesFilter<"SupplierBankAccount"> | string;
    proof_file_id?: Prisma.IntNullableWithAggregatesFilter<"SupplierBankAccount"> | number | null;
    is_primary?: Prisma.BoolWithAggregatesFilter<"SupplierBankAccount"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierBankAccount"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierBankAccount"> | Date | string;
};
export type SupplierBankAccountCreateInput = {
    bank_name: string;
    iban: string;
    account_holder_name: string;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    proof_file?: Prisma.FileCreateNestedOneWithoutSupplierBankProofsInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutBankAccountsInput;
};
export type SupplierBankAccountUncheckedCreateInput = {
    bank_account_id?: number;
    supplier_id: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    proof_file_id?: number | null;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountUpdateInput = {
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proof_file?: Prisma.FileUpdateOneWithoutSupplierBankProofsNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutBankAccountsNestedInput;
};
export type SupplierBankAccountUncheckedUpdateInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    proof_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountCreateManyInput = {
    bank_account_id?: number;
    supplier_id: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    proof_file_id?: number | null;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountUpdateManyMutationInput = {
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountUncheckedUpdateManyInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    proof_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountListRelationFilter = {
    every?: Prisma.SupplierBankAccountWhereInput;
    some?: Prisma.SupplierBankAccountWhereInput;
    none?: Prisma.SupplierBankAccountWhereInput;
};
export type SupplierBankAccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierBankAccountCountOrderByAggregateInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    bank_name?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    account_holder_name?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierBankAccountAvgOrderByAggregateInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
};
export type SupplierBankAccountMaxOrderByAggregateInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    bank_name?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    account_holder_name?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierBankAccountMinOrderByAggregateInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    bank_name?: Prisma.SortOrder;
    iban?: Prisma.SortOrder;
    account_holder_name?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
    is_primary?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierBankAccountSumOrderByAggregateInput = {
    bank_account_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    proof_file_id?: Prisma.SortOrder;
};
export type SupplierBankAccountCreateNestedManyWithoutProof_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput> | Prisma.SupplierBankAccountCreateWithoutProof_fileInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput | Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput[];
    createMany?: Prisma.SupplierBankAccountCreateManyProof_fileInputEnvelope;
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
};
export type SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput> | Prisma.SupplierBankAccountCreateWithoutProof_fileInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput | Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput[];
    createMany?: Prisma.SupplierBankAccountCreateManyProof_fileInputEnvelope;
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
};
export type SupplierBankAccountUpdateManyWithoutProof_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput> | Prisma.SupplierBankAccountCreateWithoutProof_fileInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput | Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput[];
    upsert?: Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutProof_fileInput | Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutProof_fileInput[];
    createMany?: Prisma.SupplierBankAccountCreateManyProof_fileInputEnvelope;
    set?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    disconnect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    delete?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    update?: Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutProof_fileInput | Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutProof_fileInput[];
    updateMany?: Prisma.SupplierBankAccountUpdateManyWithWhereWithoutProof_fileInput | Prisma.SupplierBankAccountUpdateManyWithWhereWithoutProof_fileInput[];
    deleteMany?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
};
export type SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput> | Prisma.SupplierBankAccountCreateWithoutProof_fileInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput | Prisma.SupplierBankAccountCreateOrConnectWithoutProof_fileInput[];
    upsert?: Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutProof_fileInput | Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutProof_fileInput[];
    createMany?: Prisma.SupplierBankAccountCreateManyProof_fileInputEnvelope;
    set?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    disconnect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    delete?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    update?: Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutProof_fileInput | Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutProof_fileInput[];
    updateMany?: Prisma.SupplierBankAccountUpdateManyWithWhereWithoutProof_fileInput | Prisma.SupplierBankAccountUpdateManyWithWhereWithoutProof_fileInput[];
    deleteMany?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
};
export type SupplierBankAccountCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput> | Prisma.SupplierBankAccountCreateWithoutSupplierInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput | Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierBankAccountCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
};
export type SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput> | Prisma.SupplierBankAccountCreateWithoutSupplierInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput | Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput[];
    createMany?: Prisma.SupplierBankAccountCreateManySupplierInputEnvelope;
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
};
export type SupplierBankAccountUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput> | Prisma.SupplierBankAccountCreateWithoutSupplierInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput | Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierBankAccountCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    disconnect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    delete?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    update?: Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierBankAccountUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierBankAccountUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
};
export type SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput> | Prisma.SupplierBankAccountCreateWithoutSupplierInput[] | Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput[];
    connectOrCreate?: Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput | Prisma.SupplierBankAccountCreateOrConnectWithoutSupplierInput[];
    upsert?: Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutSupplierInput | Prisma.SupplierBankAccountUpsertWithWhereUniqueWithoutSupplierInput[];
    createMany?: Prisma.SupplierBankAccountCreateManySupplierInputEnvelope;
    set?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    disconnect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    delete?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    connect?: Prisma.SupplierBankAccountWhereUniqueInput | Prisma.SupplierBankAccountWhereUniqueInput[];
    update?: Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutSupplierInput | Prisma.SupplierBankAccountUpdateWithWhereUniqueWithoutSupplierInput[];
    updateMany?: Prisma.SupplierBankAccountUpdateManyWithWhereWithoutSupplierInput | Prisma.SupplierBankAccountUpdateManyWithWhereWithoutSupplierInput[];
    deleteMany?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
};
export type SupplierBankAccountCreateWithoutProof_fileInput = {
    bank_name: string;
    iban: string;
    account_holder_name: string;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutBankAccountsInput;
};
export type SupplierBankAccountUncheckedCreateWithoutProof_fileInput = {
    bank_account_id?: number;
    supplier_id: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountCreateOrConnectWithoutProof_fileInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput>;
};
export type SupplierBankAccountCreateManyProof_fileInputEnvelope = {
    data: Prisma.SupplierBankAccountCreateManyProof_fileInput | Prisma.SupplierBankAccountCreateManyProof_fileInput[];
    skipDuplicates?: boolean;
};
export type SupplierBankAccountUpsertWithWhereUniqueWithoutProof_fileInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierBankAccountUpdateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedUpdateWithoutProof_fileInput>;
    create: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedCreateWithoutProof_fileInput>;
};
export type SupplierBankAccountUpdateWithWhereUniqueWithoutProof_fileInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateWithoutProof_fileInput, Prisma.SupplierBankAccountUncheckedUpdateWithoutProof_fileInput>;
};
export type SupplierBankAccountUpdateManyWithWhereWithoutProof_fileInput = {
    where: Prisma.SupplierBankAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateManyMutationInput, Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileInput>;
};
export type SupplierBankAccountScalarWhereInput = {
    AND?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
    OR?: Prisma.SupplierBankAccountScalarWhereInput[];
    NOT?: Prisma.SupplierBankAccountScalarWhereInput | Prisma.SupplierBankAccountScalarWhereInput[];
    bank_account_id?: Prisma.IntFilter<"SupplierBankAccount"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierBankAccount"> | number;
    bank_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    iban?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    account_holder_name?: Prisma.StringFilter<"SupplierBankAccount"> | string;
    proof_file_id?: Prisma.IntNullableFilter<"SupplierBankAccount"> | number | null;
    is_primary?: Prisma.BoolFilter<"SupplierBankAccount"> | boolean;
    created_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"SupplierBankAccount"> | Date | string;
};
export type SupplierBankAccountCreateWithoutSupplierInput = {
    bank_name: string;
    iban: string;
    account_holder_name: string;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    proof_file?: Prisma.FileCreateNestedOneWithoutSupplierBankProofsInput;
};
export type SupplierBankAccountUncheckedCreateWithoutSupplierInput = {
    bank_account_id?: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    proof_file_id?: number | null;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountCreateOrConnectWithoutSupplierInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput>;
};
export type SupplierBankAccountCreateManySupplierInputEnvelope = {
    data: Prisma.SupplierBankAccountCreateManySupplierInput | Prisma.SupplierBankAccountCreateManySupplierInput[];
    skipDuplicates?: boolean;
};
export type SupplierBankAccountUpsertWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierBankAccountUpdateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.SupplierBankAccountCreateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedCreateWithoutSupplierInput>;
};
export type SupplierBankAccountUpdateWithWhereUniqueWithoutSupplierInput = {
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateWithoutSupplierInput, Prisma.SupplierBankAccountUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierBankAccountUpdateManyWithWhereWithoutSupplierInput = {
    where: Prisma.SupplierBankAccountScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateManyMutationInput, Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierInput>;
};
export type SupplierBankAccountCreateManyProof_fileInput = {
    bank_account_id?: number;
    supplier_id: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountUpdateWithoutProof_fileInput = {
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutBankAccountsNestedInput;
};
export type SupplierBankAccountUncheckedUpdateWithoutProof_fileInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountUncheckedUpdateManyWithoutProof_fileInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountCreateManySupplierInput = {
    bank_account_id?: number;
    bank_name: string;
    iban: string;
    account_holder_name: string;
    proof_file_id?: number | null;
    is_primary?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierBankAccountUpdateWithoutSupplierInput = {
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proof_file?: Prisma.FileUpdateOneWithoutSupplierBankProofsNestedInput;
};
export type SupplierBankAccountUncheckedUpdateWithoutSupplierInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    proof_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountUncheckedUpdateManyWithoutSupplierInput = {
    bank_account_id?: Prisma.IntFieldUpdateOperationsInput | number;
    bank_name?: Prisma.StringFieldUpdateOperationsInput | string;
    iban?: Prisma.StringFieldUpdateOperationsInput | string;
    account_holder_name?: Prisma.StringFieldUpdateOperationsInput | string;
    proof_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    is_primary?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierBankAccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bank_account_id?: boolean;
    supplier_id?: boolean;
    bank_name?: boolean;
    iban?: boolean;
    account_holder_name?: boolean;
    proof_file_id?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBankAccount"]>;
export type SupplierBankAccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bank_account_id?: boolean;
    supplier_id?: boolean;
    bank_name?: boolean;
    iban?: boolean;
    account_holder_name?: boolean;
    proof_file_id?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBankAccount"]>;
export type SupplierBankAccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    bank_account_id?: boolean;
    supplier_id?: boolean;
    bank_name?: boolean;
    iban?: boolean;
    account_holder_name?: boolean;
    proof_file_id?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplierBankAccount"]>;
export type SupplierBankAccountSelectScalar = {
    bank_account_id?: boolean;
    supplier_id?: boolean;
    bank_name?: boolean;
    iban?: boolean;
    account_holder_name?: boolean;
    proof_file_id?: boolean;
    is_primary?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type SupplierBankAccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"bank_account_id" | "supplier_id" | "bank_name" | "iban" | "account_holder_name" | "proof_file_id" | "is_primary" | "created_at" | "updated_at", ExtArgs["result"]["supplierBankAccount"]>;
export type SupplierBankAccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierBankAccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type SupplierBankAccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proof_file?: boolean | Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
};
export type $SupplierBankAccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierBankAccount";
    objects: {
        proof_file: Prisma.$FilePayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        bank_account_id: number;
        supplier_id: number;
        bank_name: string;
        iban: string;
        account_holder_name: string;
        proof_file_id: number | null;
        is_primary: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["supplierBankAccount"]>;
    composites: {};
};
export type SupplierBankAccountGetPayload<S extends boolean | null | undefined | SupplierBankAccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload, S>;
export type SupplierBankAccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierBankAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierBankAccountCountAggregateInputType | true;
};
export interface SupplierBankAccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierBankAccount'];
        meta: {
            name: 'SupplierBankAccount';
        };
    };
    /**
     * Find zero or one SupplierBankAccount that matches the filter.
     * @param {SupplierBankAccountFindUniqueArgs} args - Arguments to find a SupplierBankAccount
     * @example
     * // Get one SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierBankAccountFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierBankAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierBankAccountFindUniqueOrThrowArgs} args - Arguments to find a SupplierBankAccount
     * @example
     * // Get one SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierBankAccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierBankAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountFindFirstArgs} args - Arguments to find a SupplierBankAccount
     * @example
     * // Get one SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierBankAccountFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierBankAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountFindFirstOrThrowArgs} args - Arguments to find a SupplierBankAccount
     * @example
     * // Get one SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierBankAccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierBankAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierBankAccounts
     * const supplierBankAccounts = await prisma.supplierBankAccount.findMany()
     *
     * // Get first 10 SupplierBankAccounts
     * const supplierBankAccounts = await prisma.supplierBankAccount.findMany({ take: 10 })
     *
     * // Only select the `bank_account_id`
     * const supplierBankAccountWithBank_account_idOnly = await prisma.supplierBankAccount.findMany({ select: { bank_account_id: true } })
     *
     */
    findMany<T extends SupplierBankAccountFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierBankAccount.
     * @param {SupplierBankAccountCreateArgs} args - Arguments to create a SupplierBankAccount.
     * @example
     * // Create one SupplierBankAccount
     * const SupplierBankAccount = await prisma.supplierBankAccount.create({
     *   data: {
     *     // ... data to create a SupplierBankAccount
     *   }
     * })
     *
     */
    create<T extends SupplierBankAccountCreateArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierBankAccounts.
     * @param {SupplierBankAccountCreateManyArgs} args - Arguments to create many SupplierBankAccounts.
     * @example
     * // Create many SupplierBankAccounts
     * const supplierBankAccount = await prisma.supplierBankAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierBankAccountCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierBankAccounts and returns the data saved in the database.
     * @param {SupplierBankAccountCreateManyAndReturnArgs} args - Arguments to create many SupplierBankAccounts.
     * @example
     * // Create many SupplierBankAccounts
     * const supplierBankAccount = await prisma.supplierBankAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierBankAccounts and only return the `bank_account_id`
     * const supplierBankAccountWithBank_account_idOnly = await prisma.supplierBankAccount.createManyAndReturn({
     *   select: { bank_account_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierBankAccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierBankAccount.
     * @param {SupplierBankAccountDeleteArgs} args - Arguments to delete one SupplierBankAccount.
     * @example
     * // Delete one SupplierBankAccount
     * const SupplierBankAccount = await prisma.supplierBankAccount.delete({
     *   where: {
     *     // ... filter to delete one SupplierBankAccount
     *   }
     * })
     *
     */
    delete<T extends SupplierBankAccountDeleteArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierBankAccount.
     * @param {SupplierBankAccountUpdateArgs} args - Arguments to update one SupplierBankAccount.
     * @example
     * // Update one SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierBankAccountUpdateArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierBankAccounts.
     * @param {SupplierBankAccountDeleteManyArgs} args - Arguments to filter SupplierBankAccounts to delete.
     * @example
     * // Delete a few SupplierBankAccounts
     * const { count } = await prisma.supplierBankAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierBankAccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierBankAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierBankAccounts
     * const supplierBankAccount = await prisma.supplierBankAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierBankAccountUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierBankAccounts and returns the data updated in the database.
     * @param {SupplierBankAccountUpdateManyAndReturnArgs} args - Arguments to update many SupplierBankAccounts.
     * @example
     * // Update many SupplierBankAccounts
     * const supplierBankAccount = await prisma.supplierBankAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierBankAccounts and only return the `bank_account_id`
     * const supplierBankAccountWithBank_account_idOnly = await prisma.supplierBankAccount.updateManyAndReturn({
     *   select: { bank_account_id: true },
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
    updateManyAndReturn<T extends SupplierBankAccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierBankAccount.
     * @param {SupplierBankAccountUpsertArgs} args - Arguments to update or create a SupplierBankAccount.
     * @example
     * // Update or create a SupplierBankAccount
     * const supplierBankAccount = await prisma.supplierBankAccount.upsert({
     *   create: {
     *     // ... data to create a SupplierBankAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierBankAccount we want to update
     *   }
     * })
     */
    upsert<T extends SupplierBankAccountUpsertArgs>(args: Prisma.SelectSubset<T, SupplierBankAccountUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierBankAccountClient<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierBankAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountCountArgs} args - Arguments to filter SupplierBankAccounts to count.
     * @example
     * // Count the number of SupplierBankAccounts
     * const count = await prisma.supplierBankAccount.count({
     *   where: {
     *     // ... the filter for the SupplierBankAccounts we want to count
     *   }
     * })
    **/
    count<T extends SupplierBankAccountCountArgs>(args?: Prisma.Subset<T, SupplierBankAccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierBankAccountCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierBankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierBankAccountAggregateArgs>(args: Prisma.Subset<T, SupplierBankAccountAggregateArgs>): Prisma.PrismaPromise<GetSupplierBankAccountAggregateType<T>>;
    /**
     * Group by SupplierBankAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierBankAccountGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierBankAccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierBankAccountGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierBankAccountGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierBankAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierBankAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierBankAccount model
     */
    readonly fields: SupplierBankAccountFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierBankAccount.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierBankAccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proof_file<T extends Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierBankAccount$proof_fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierBankAccount model
 */
export interface SupplierBankAccountFieldRefs {
    readonly bank_account_id: Prisma.FieldRef<"SupplierBankAccount", 'Int'>;
    readonly supplier_id: Prisma.FieldRef<"SupplierBankAccount", 'Int'>;
    readonly bank_name: Prisma.FieldRef<"SupplierBankAccount", 'String'>;
    readonly iban: Prisma.FieldRef<"SupplierBankAccount", 'String'>;
    readonly account_holder_name: Prisma.FieldRef<"SupplierBankAccount", 'String'>;
    readonly proof_file_id: Prisma.FieldRef<"SupplierBankAccount", 'Int'>;
    readonly is_primary: Prisma.FieldRef<"SupplierBankAccount", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"SupplierBankAccount", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"SupplierBankAccount", 'DateTime'>;
}
/**
 * SupplierBankAccount findUnique
 */
export type SupplierBankAccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBankAccount to fetch.
     */
    where: Prisma.SupplierBankAccountWhereUniqueInput;
};
/**
 * SupplierBankAccount findUniqueOrThrow
 */
export type SupplierBankAccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBankAccount to fetch.
     */
    where: Prisma.SupplierBankAccountWhereUniqueInput;
};
/**
 * SupplierBankAccount findFirst
 */
export type SupplierBankAccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBankAccount to fetch.
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBankAccounts to fetch.
     */
    orderBy?: Prisma.SupplierBankAccountOrderByWithRelationInput | Prisma.SupplierBankAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierBankAccounts.
     */
    cursor?: Prisma.SupplierBankAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBankAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBankAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierBankAccounts.
     */
    distinct?: Prisma.SupplierBankAccountScalarFieldEnum | Prisma.SupplierBankAccountScalarFieldEnum[];
};
/**
 * SupplierBankAccount findFirstOrThrow
 */
export type SupplierBankAccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBankAccount to fetch.
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBankAccounts to fetch.
     */
    orderBy?: Prisma.SupplierBankAccountOrderByWithRelationInput | Prisma.SupplierBankAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierBankAccounts.
     */
    cursor?: Prisma.SupplierBankAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBankAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBankAccounts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierBankAccounts.
     */
    distinct?: Prisma.SupplierBankAccountScalarFieldEnum | Prisma.SupplierBankAccountScalarFieldEnum[];
};
/**
 * SupplierBankAccount findMany
 */
export type SupplierBankAccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierBankAccounts to fetch.
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierBankAccounts to fetch.
     */
    orderBy?: Prisma.SupplierBankAccountOrderByWithRelationInput | Prisma.SupplierBankAccountOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierBankAccounts.
     */
    cursor?: Prisma.SupplierBankAccountWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierBankAccounts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierBankAccounts.
     */
    skip?: number;
    distinct?: Prisma.SupplierBankAccountScalarFieldEnum | Prisma.SupplierBankAccountScalarFieldEnum[];
};
/**
 * SupplierBankAccount create
 */
export type SupplierBankAccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierBankAccount.
     */
    data: Prisma.XOR<Prisma.SupplierBankAccountCreateInput, Prisma.SupplierBankAccountUncheckedCreateInput>;
};
/**
 * SupplierBankAccount createMany
 */
export type SupplierBankAccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierBankAccounts.
     */
    data: Prisma.SupplierBankAccountCreateManyInput | Prisma.SupplierBankAccountCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierBankAccount createManyAndReturn
 */
export type SupplierBankAccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierBankAccounts.
     */
    data: Prisma.SupplierBankAccountCreateManyInput | Prisma.SupplierBankAccountCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierBankAccount update
 */
export type SupplierBankAccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierBankAccount.
     */
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateInput, Prisma.SupplierBankAccountUncheckedUpdateInput>;
    /**
     * Choose, which SupplierBankAccount to update.
     */
    where: Prisma.SupplierBankAccountWhereUniqueInput;
};
/**
 * SupplierBankAccount updateMany
 */
export type SupplierBankAccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierBankAccounts.
     */
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateManyMutationInput, Prisma.SupplierBankAccountUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierBankAccounts to update
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * Limit how many SupplierBankAccounts to update.
     */
    limit?: number;
};
/**
 * SupplierBankAccount updateManyAndReturn
 */
export type SupplierBankAccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierBankAccounts.
     */
    data: Prisma.XOR<Prisma.SupplierBankAccountUpdateManyMutationInput, Prisma.SupplierBankAccountUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierBankAccounts to update
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * Limit how many SupplierBankAccounts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierBankAccount upsert
 */
export type SupplierBankAccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierBankAccount to update in case it exists.
     */
    where: Prisma.SupplierBankAccountWhereUniqueInput;
    /**
     * In case the SupplierBankAccount found by the `where` argument doesn't exist, create a new SupplierBankAccount with this data.
     */
    create: Prisma.XOR<Prisma.SupplierBankAccountCreateInput, Prisma.SupplierBankAccountUncheckedCreateInput>;
    /**
     * In case the SupplierBankAccount was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierBankAccountUpdateInput, Prisma.SupplierBankAccountUncheckedUpdateInput>;
};
/**
 * SupplierBankAccount delete
 */
export type SupplierBankAccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
    /**
     * Filter which SupplierBankAccount to delete.
     */
    where: Prisma.SupplierBankAccountWhereUniqueInput;
};
/**
 * SupplierBankAccount deleteMany
 */
export type SupplierBankAccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierBankAccounts to delete
     */
    where?: Prisma.SupplierBankAccountWhereInput;
    /**
     * Limit how many SupplierBankAccounts to delete.
     */
    limit?: number;
};
/**
 * SupplierBankAccount.proof_file
 */
export type SupplierBankAccount$proof_fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierBankAccount without action
 */
export type SupplierBankAccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierBankAccount
     */
    select?: Prisma.SupplierBankAccountSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierBankAccount
     */
    omit?: Prisma.SupplierBankAccountOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierBankAccountInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierBankAccount.d.ts.map