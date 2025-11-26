import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model SupplierDocument
 *
 */
export type SupplierDocumentModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierDocumentPayload>;
export type AggregateSupplierDocument = {
    _count: SupplierDocumentCountAggregateOutputType | null;
    _avg: SupplierDocumentAvgAggregateOutputType | null;
    _sum: SupplierDocumentSumAggregateOutputType | null;
    _min: SupplierDocumentMinAggregateOutputType | null;
    _max: SupplierDocumentMaxAggregateOutputType | null;
};
export type SupplierDocumentAvgAggregateOutputType = {
    supplier_document_id: number | null;
    supplier_id: number | null;
    tax_sheet_file_id: number | null;
    trade_registry_file_id: number | null;
    signature_declaration_file_id: number | null;
};
export type SupplierDocumentSumAggregateOutputType = {
    supplier_document_id: number | null;
    supplier_id: number | null;
    tax_sheet_file_id: number | null;
    trade_registry_file_id: number | null;
    signature_declaration_file_id: number | null;
};
export type SupplierDocumentMinAggregateOutputType = {
    supplier_document_id: number | null;
    supplier_id: number | null;
    tax_sheet_file_id: number | null;
    trade_registry_file_id: number | null;
    signature_declaration_file_id: number | null;
    uploaded_at: Date | null;
};
export type SupplierDocumentMaxAggregateOutputType = {
    supplier_document_id: number | null;
    supplier_id: number | null;
    tax_sheet_file_id: number | null;
    trade_registry_file_id: number | null;
    signature_declaration_file_id: number | null;
    uploaded_at: Date | null;
};
export type SupplierDocumentCountAggregateOutputType = {
    supplier_document_id: number;
    supplier_id: number;
    tax_sheet_file_id: number;
    trade_registry_file_id: number;
    signature_declaration_file_id: number;
    uploaded_at: number;
    _all: number;
};
export type SupplierDocumentAvgAggregateInputType = {
    supplier_document_id?: true;
    supplier_id?: true;
    tax_sheet_file_id?: true;
    trade_registry_file_id?: true;
    signature_declaration_file_id?: true;
};
export type SupplierDocumentSumAggregateInputType = {
    supplier_document_id?: true;
    supplier_id?: true;
    tax_sheet_file_id?: true;
    trade_registry_file_id?: true;
    signature_declaration_file_id?: true;
};
export type SupplierDocumentMinAggregateInputType = {
    supplier_document_id?: true;
    supplier_id?: true;
    tax_sheet_file_id?: true;
    trade_registry_file_id?: true;
    signature_declaration_file_id?: true;
    uploaded_at?: true;
};
export type SupplierDocumentMaxAggregateInputType = {
    supplier_document_id?: true;
    supplier_id?: true;
    tax_sheet_file_id?: true;
    trade_registry_file_id?: true;
    signature_declaration_file_id?: true;
    uploaded_at?: true;
};
export type SupplierDocumentCountAggregateInputType = {
    supplier_document_id?: true;
    supplier_id?: true;
    tax_sheet_file_id?: true;
    trade_registry_file_id?: true;
    signature_declaration_file_id?: true;
    uploaded_at?: true;
    _all?: true;
};
export type SupplierDocumentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierDocument to aggregate.
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierDocuments to fetch.
     */
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned SupplierDocuments
    **/
    _count?: true | SupplierDocumentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierDocumentAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierDocumentSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierDocumentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierDocumentMaxAggregateInputType;
};
export type GetSupplierDocumentAggregateType<T extends SupplierDocumentAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplierDocument]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplierDocument[P]> : Prisma.GetScalarType<T[P], AggregateSupplierDocument[P]>;
};
export type SupplierDocumentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierDocumentWhereInput;
    orderBy?: Prisma.SupplierDocumentOrderByWithAggregationInput | Prisma.SupplierDocumentOrderByWithAggregationInput[];
    by: Prisma.SupplierDocumentScalarFieldEnum[] | Prisma.SupplierDocumentScalarFieldEnum;
    having?: Prisma.SupplierDocumentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierDocumentCountAggregateInputType | true;
    _avg?: SupplierDocumentAvgAggregateInputType;
    _sum?: SupplierDocumentSumAggregateInputType;
    _min?: SupplierDocumentMinAggregateInputType;
    _max?: SupplierDocumentMaxAggregateInputType;
};
export type SupplierDocumentGroupByOutputType = {
    supplier_document_id: number;
    supplier_id: number;
    tax_sheet_file_id: number | null;
    trade_registry_file_id: number | null;
    signature_declaration_file_id: number | null;
    uploaded_at: Date;
    _count: SupplierDocumentCountAggregateOutputType | null;
    _avg: SupplierDocumentAvgAggregateOutputType | null;
    _sum: SupplierDocumentSumAggregateOutputType | null;
    _min: SupplierDocumentMinAggregateOutputType | null;
    _max: SupplierDocumentMaxAggregateOutputType | null;
};
type GetSupplierDocumentGroupByPayload<T extends SupplierDocumentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierDocumentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierDocumentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierDocumentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierDocumentGroupByOutputType[P]>;
}>>;
export type SupplierDocumentWhereInput = {
    AND?: Prisma.SupplierDocumentWhereInput | Prisma.SupplierDocumentWhereInput[];
    OR?: Prisma.SupplierDocumentWhereInput[];
    NOT?: Prisma.SupplierDocumentWhereInput | Prisma.SupplierDocumentWhereInput[];
    supplier_document_id?: Prisma.IntFilter<"SupplierDocument"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierDocument"> | number;
    tax_sheet_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    trade_registry_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    signature_declaration_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    uploaded_at?: Prisma.DateTimeFilter<"SupplierDocument"> | Date | string;
    signature_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    tax_sheet_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    trade_registry_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
};
export type SupplierDocumentOrderByWithRelationInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
    signature_file?: Prisma.FileOrderByWithRelationInput;
    supplier?: Prisma.SupplierOrderByWithRelationInput;
    tax_sheet_file?: Prisma.FileOrderByWithRelationInput;
    trade_registry_file?: Prisma.FileOrderByWithRelationInput;
};
export type SupplierDocumentWhereUniqueInput = Prisma.AtLeast<{
    supplier_document_id?: number;
    supplier_id?: number;
    AND?: Prisma.SupplierDocumentWhereInput | Prisma.SupplierDocumentWhereInput[];
    OR?: Prisma.SupplierDocumentWhereInput[];
    NOT?: Prisma.SupplierDocumentWhereInput | Prisma.SupplierDocumentWhereInput[];
    tax_sheet_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    trade_registry_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    signature_declaration_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    uploaded_at?: Prisma.DateTimeFilter<"SupplierDocument"> | Date | string;
    signature_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    supplier?: Prisma.XOR<Prisma.SupplierScalarRelationFilter, Prisma.SupplierWhereInput>;
    tax_sheet_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
    trade_registry_file?: Prisma.XOR<Prisma.FileNullableScalarRelationFilter, Prisma.FileWhereInput> | null;
}, "supplier_document_id" | "supplier_id">;
export type SupplierDocumentOrderByWithAggregationInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierDocumentCountOrderByAggregateInput;
    _avg?: Prisma.SupplierDocumentAvgOrderByAggregateInput;
    _max?: Prisma.SupplierDocumentMaxOrderByAggregateInput;
    _min?: Prisma.SupplierDocumentMinOrderByAggregateInput;
    _sum?: Prisma.SupplierDocumentSumOrderByAggregateInput;
};
export type SupplierDocumentScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierDocumentScalarWhereWithAggregatesInput | Prisma.SupplierDocumentScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierDocumentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierDocumentScalarWhereWithAggregatesInput | Prisma.SupplierDocumentScalarWhereWithAggregatesInput[];
    supplier_document_id?: Prisma.IntWithAggregatesFilter<"SupplierDocument"> | number;
    supplier_id?: Prisma.IntWithAggregatesFilter<"SupplierDocument"> | number;
    tax_sheet_file_id?: Prisma.IntNullableWithAggregatesFilter<"SupplierDocument"> | number | null;
    trade_registry_file_id?: Prisma.IntNullableWithAggregatesFilter<"SupplierDocument"> | number | null;
    signature_declaration_file_id?: Prisma.IntNullableWithAggregatesFilter<"SupplierDocument"> | number | null;
    uploaded_at?: Prisma.DateTimeWithAggregatesFilter<"SupplierDocument"> | Date | string;
};
export type SupplierDocumentCreateInput = {
    uploaded_at?: Date | string;
    signature_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsSignatureInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutDocumentsInput;
    tax_sheet_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsTaxInput;
    trade_registry_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsRegistryInput;
};
export type SupplierDocumentUncheckedCreateInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    trade_registry_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentUpdateInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signature_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsSignatureNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutDocumentsNestedInput;
    tax_sheet_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsTaxNestedInput;
    trade_registry_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsRegistryNestedInput;
};
export type SupplierDocumentUncheckedUpdateInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentCreateManyInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    trade_registry_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentUpdateManyMutationInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUncheckedUpdateManyInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentListRelationFilter = {
    every?: Prisma.SupplierDocumentWhereInput;
    some?: Prisma.SupplierDocumentWhereInput;
    none?: Prisma.SupplierDocumentWhereInput;
};
export type SupplierDocumentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SupplierDocumentNullableScalarRelationFilter = {
    is?: Prisma.SupplierDocumentWhereInput | null;
    isNot?: Prisma.SupplierDocumentWhereInput | null;
};
export type SupplierDocumentCountOrderByAggregateInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
};
export type SupplierDocumentAvgOrderByAggregateInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrder;
};
export type SupplierDocumentMaxOrderByAggregateInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
};
export type SupplierDocumentMinOrderByAggregateInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
};
export type SupplierDocumentSumOrderByAggregateInput = {
    supplier_document_id?: Prisma.SortOrder;
    supplier_id?: Prisma.SortOrder;
    tax_sheet_file_id?: Prisma.SortOrder;
    trade_registry_file_id?: Prisma.SortOrder;
    signature_declaration_file_id?: Prisma.SortOrder;
};
export type SupplierDocumentCreateNestedManyWithoutSignature_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput> | Prisma.SupplierDocumentCreateWithoutSignature_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManySignature_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput> | Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTax_sheet_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput> | Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTrade_registry_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput> | Prisma.SupplierDocumentCreateWithoutSignature_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManySignature_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput> | Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTax_sheet_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput> | Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTrade_registry_fileInputEnvelope;
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
};
export type SupplierDocumentUpdateManyWithoutSignature_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput> | Prisma.SupplierDocumentCreateWithoutSignature_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutSignature_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutSignature_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManySignature_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutSignature_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutSignature_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutSignature_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutSignature_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput> | Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTax_sheet_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTax_sheet_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTax_sheet_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutTax_sheet_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput> | Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTrade_registry_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTrade_registry_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTrade_registry_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutTrade_registry_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput> | Prisma.SupplierDocumentCreateWithoutSignature_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutSignature_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutSignature_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutSignature_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManySignature_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutSignature_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutSignature_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutSignature_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutSignature_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput> | Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTax_sheet_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTax_sheet_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTax_sheet_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutTax_sheet_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutTax_sheet_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput> | Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput[] | Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput[];
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput | Prisma.SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput[];
    upsert?: Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpsertWithWhereUniqueWithoutTrade_registry_fileInput[];
    createMany?: Prisma.SupplierDocumentCreateManyTrade_registry_fileInputEnvelope;
    set?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    disconnect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    delete?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    connect?: Prisma.SupplierDocumentWhereUniqueInput | Prisma.SupplierDocumentWhereUniqueInput[];
    update?: Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpdateWithWhereUniqueWithoutTrade_registry_fileInput[];
    updateMany?: Prisma.SupplierDocumentUpdateManyWithWhereWithoutTrade_registry_fileInput | Prisma.SupplierDocumentUpdateManyWithWhereWithoutTrade_registry_fileInput[];
    deleteMany?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
};
export type SupplierDocumentCreateNestedOneWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSupplierInput;
    connect?: Prisma.SupplierDocumentWhereUniqueInput;
};
export type SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSupplierInput;
    connect?: Prisma.SupplierDocumentWhereUniqueInput;
};
export type SupplierDocumentUpdateOneWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSupplierInput;
    upsert?: Prisma.SupplierDocumentUpsertWithoutSupplierInput;
    disconnect?: Prisma.SupplierDocumentWhereInput | boolean;
    delete?: Prisma.SupplierDocumentWhereInput | boolean;
    connect?: Prisma.SupplierDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierDocumentUpdateToOneWithWhereWithoutSupplierInput, Prisma.SupplierDocumentUpdateWithoutSupplierInput>, Prisma.SupplierDocumentUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: Prisma.SupplierDocumentCreateOrConnectWithoutSupplierInput;
    upsert?: Prisma.SupplierDocumentUpsertWithoutSupplierInput;
    disconnect?: Prisma.SupplierDocumentWhereInput | boolean;
    delete?: Prisma.SupplierDocumentWhereInput | boolean;
    connect?: Prisma.SupplierDocumentWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierDocumentUpdateToOneWithWhereWithoutSupplierInput, Prisma.SupplierDocumentUpdateWithoutSupplierInput>, Prisma.SupplierDocumentUncheckedUpdateWithoutSupplierInput>;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SupplierDocumentCreateWithoutSignature_fileInput = {
    uploaded_at?: Date | string;
    supplier: Prisma.SupplierCreateNestedOneWithoutDocumentsInput;
    tax_sheet_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsTaxInput;
    trade_registry_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsRegistryInput;
};
export type SupplierDocumentUncheckedCreateWithoutSignature_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    trade_registry_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateOrConnectWithoutSignature_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput>;
};
export type SupplierDocumentCreateManySignature_fileInputEnvelope = {
    data: Prisma.SupplierDocumentCreateManySignature_fileInput | Prisma.SupplierDocumentCreateManySignature_fileInput[];
    skipDuplicates?: boolean;
};
export type SupplierDocumentCreateWithoutTax_sheet_fileInput = {
    uploaded_at?: Date | string;
    signature_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsSignatureInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutDocumentsInput;
    trade_registry_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsRegistryInput;
};
export type SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    trade_registry_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateOrConnectWithoutTax_sheet_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput>;
};
export type SupplierDocumentCreateManyTax_sheet_fileInputEnvelope = {
    data: Prisma.SupplierDocumentCreateManyTax_sheet_fileInput | Prisma.SupplierDocumentCreateManyTax_sheet_fileInput[];
    skipDuplicates?: boolean;
};
export type SupplierDocumentCreateWithoutTrade_registry_fileInput = {
    uploaded_at?: Date | string;
    signature_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsSignatureInput;
    supplier: Prisma.SupplierCreateNestedOneWithoutDocumentsInput;
    tax_sheet_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsTaxInput;
};
export type SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateOrConnectWithoutTrade_registry_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput>;
};
export type SupplierDocumentCreateManyTrade_registry_fileInputEnvelope = {
    data: Prisma.SupplierDocumentCreateManyTrade_registry_fileInput | Prisma.SupplierDocumentCreateManyTrade_registry_fileInput[];
    skipDuplicates?: boolean;
};
export type SupplierDocumentUpsertWithWhereUniqueWithoutSignature_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutSignature_fileInput>;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutSignature_fileInput>;
};
export type SupplierDocumentUpdateWithWhereUniqueWithoutSignature_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutSignature_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutSignature_fileInput>;
};
export type SupplierDocumentUpdateManyWithWhereWithoutSignature_fileInput = {
    where: Prisma.SupplierDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateManyMutationInput, Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileInput>;
};
export type SupplierDocumentScalarWhereInput = {
    AND?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
    OR?: Prisma.SupplierDocumentScalarWhereInput[];
    NOT?: Prisma.SupplierDocumentScalarWhereInput | Prisma.SupplierDocumentScalarWhereInput[];
    supplier_document_id?: Prisma.IntFilter<"SupplierDocument"> | number;
    supplier_id?: Prisma.IntFilter<"SupplierDocument"> | number;
    tax_sheet_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    trade_registry_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    signature_declaration_file_id?: Prisma.IntNullableFilter<"SupplierDocument"> | number | null;
    uploaded_at?: Prisma.DateTimeFilter<"SupplierDocument"> | Date | string;
};
export type SupplierDocumentUpsertWithWhereUniqueWithoutTax_sheet_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutTax_sheet_fileInput>;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTax_sheet_fileInput>;
};
export type SupplierDocumentUpdateWithWhereUniqueWithoutTax_sheet_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutTax_sheet_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutTax_sheet_fileInput>;
};
export type SupplierDocumentUpdateManyWithWhereWithoutTax_sheet_fileInput = {
    where: Prisma.SupplierDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateManyMutationInput, Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileInput>;
};
export type SupplierDocumentUpsertWithWhereUniqueWithoutTrade_registry_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    update: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutTrade_registry_fileInput>;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedCreateWithoutTrade_registry_fileInput>;
};
export type SupplierDocumentUpdateWithWhereUniqueWithoutTrade_registry_fileInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutTrade_registry_fileInput, Prisma.SupplierDocumentUncheckedUpdateWithoutTrade_registry_fileInput>;
};
export type SupplierDocumentUpdateManyWithWhereWithoutTrade_registry_fileInput = {
    where: Prisma.SupplierDocumentScalarWhereInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateManyMutationInput, Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileInput>;
};
export type SupplierDocumentCreateWithoutSupplierInput = {
    uploaded_at?: Date | string;
    signature_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsSignatureInput;
    tax_sheet_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsTaxInput;
    trade_registry_file?: Prisma.FileCreateNestedOneWithoutSupplierDocumentsRegistryInput;
};
export type SupplierDocumentUncheckedCreateWithoutSupplierInput = {
    supplier_document_id?: number;
    tax_sheet_file_id?: number | null;
    trade_registry_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateOrConnectWithoutSupplierInput = {
    where: Prisma.SupplierDocumentWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
};
export type SupplierDocumentUpsertWithoutSupplierInput = {
    update: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedUpdateWithoutSupplierInput>;
    create: Prisma.XOR<Prisma.SupplierDocumentCreateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedCreateWithoutSupplierInput>;
    where?: Prisma.SupplierDocumentWhereInput;
};
export type SupplierDocumentUpdateToOneWithWhereWithoutSupplierInput = {
    where?: Prisma.SupplierDocumentWhereInput;
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateWithoutSupplierInput, Prisma.SupplierDocumentUncheckedUpdateWithoutSupplierInput>;
};
export type SupplierDocumentUpdateWithoutSupplierInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signature_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsSignatureNestedInput;
    tax_sheet_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsTaxNestedInput;
    trade_registry_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsRegistryNestedInput;
};
export type SupplierDocumentUncheckedUpdateWithoutSupplierInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentCreateManySignature_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    trade_registry_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateManyTax_sheet_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    trade_registry_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentCreateManyTrade_registry_fileInput = {
    supplier_document_id?: number;
    supplier_id: number;
    tax_sheet_file_id?: number | null;
    signature_declaration_file_id?: number | null;
    uploaded_at?: Date | string;
};
export type SupplierDocumentUpdateWithoutSignature_fileInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutDocumentsNestedInput;
    tax_sheet_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsTaxNestedInput;
    trade_registry_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsRegistryNestedInput;
};
export type SupplierDocumentUncheckedUpdateWithoutSignature_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUncheckedUpdateManyWithoutSignature_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUpdateWithoutTax_sheet_fileInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signature_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsSignatureNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutDocumentsNestedInput;
    trade_registry_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsRegistryNestedInput;
};
export type SupplierDocumentUncheckedUpdateWithoutTax_sheet_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    trade_registry_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUpdateWithoutTrade_registry_fileInput = {
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    signature_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsSignatureNestedInput;
    supplier?: Prisma.SupplierUpdateOneRequiredWithoutDocumentsNestedInput;
    tax_sheet_file?: Prisma.FileUpdateOneWithoutSupplierDocumentsTaxNestedInput;
};
export type SupplierDocumentUncheckedUpdateWithoutTrade_registry_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileInput = {
    supplier_document_id?: Prisma.IntFieldUpdateOperationsInput | number;
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    tax_sheet_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    signature_declaration_file_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierDocumentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_document_id?: boolean;
    supplier_id?: boolean;
    tax_sheet_file_id?: boolean;
    trade_registry_file_id?: boolean;
    signature_declaration_file_id?: boolean;
    uploaded_at?: boolean;
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
}, ExtArgs["result"]["supplierDocument"]>;
export type SupplierDocumentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_document_id?: boolean;
    supplier_id?: boolean;
    tax_sheet_file_id?: boolean;
    trade_registry_file_id?: boolean;
    signature_declaration_file_id?: boolean;
    uploaded_at?: boolean;
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
}, ExtArgs["result"]["supplierDocument"]>;
export type SupplierDocumentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_document_id?: boolean;
    supplier_id?: boolean;
    tax_sheet_file_id?: boolean;
    trade_registry_file_id?: boolean;
    signature_declaration_file_id?: boolean;
    uploaded_at?: boolean;
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
}, ExtArgs["result"]["supplierDocument"]>;
export type SupplierDocumentSelectScalar = {
    supplier_document_id?: boolean;
    supplier_id?: boolean;
    tax_sheet_file_id?: boolean;
    trade_registry_file_id?: boolean;
    signature_declaration_file_id?: boolean;
    uploaded_at?: boolean;
};
export type SupplierDocumentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_document_id" | "supplier_id" | "tax_sheet_file_id" | "trade_registry_file_id" | "signature_declaration_file_id" | "uploaded_at", ExtArgs["result"]["supplierDocument"]>;
export type SupplierDocumentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
};
export type SupplierDocumentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
};
export type SupplierDocumentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    signature_file?: boolean | Prisma.SupplierDocument$signature_fileArgs<ExtArgs>;
    supplier?: boolean | Prisma.SupplierDefaultArgs<ExtArgs>;
    tax_sheet_file?: boolean | Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>;
    trade_registry_file?: boolean | Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>;
};
export type $SupplierDocumentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "SupplierDocument";
    objects: {
        signature_file: Prisma.$FilePayload<ExtArgs> | null;
        supplier: Prisma.$SupplierPayload<ExtArgs>;
        tax_sheet_file: Prisma.$FilePayload<ExtArgs> | null;
        trade_registry_file: Prisma.$FilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_document_id: number;
        supplier_id: number;
        tax_sheet_file_id: number | null;
        trade_registry_file_id: number | null;
        signature_declaration_file_id: number | null;
        uploaded_at: Date;
    }, ExtArgs["result"]["supplierDocument"]>;
    composites: {};
};
export type SupplierDocumentGetPayload<S extends boolean | null | undefined | SupplierDocumentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload, S>;
export type SupplierDocumentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierDocumentCountAggregateInputType | true;
};
export interface SupplierDocumentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['SupplierDocument'];
        meta: {
            name: 'SupplierDocument';
        };
    };
    /**
     * Find zero or one SupplierDocument that matches the filter.
     * @param {SupplierDocumentFindUniqueArgs} args - Arguments to find a SupplierDocument
     * @example
     * // Get one SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierDocumentFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierDocumentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one SupplierDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierDocumentFindUniqueOrThrowArgs} args - Arguments to find a SupplierDocument
     * @example
     * // Get one SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierDocumentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentFindFirstArgs} args - Arguments to find a SupplierDocument
     * @example
     * // Get one SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierDocumentFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first SupplierDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentFindFirstOrThrowArgs} args - Arguments to find a SupplierDocument
     * @example
     * // Get one SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierDocumentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more SupplierDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierDocuments
     * const supplierDocuments = await prisma.supplierDocument.findMany()
     *
     * // Get first 10 SupplierDocuments
     * const supplierDocuments = await prisma.supplierDocument.findMany({ take: 10 })
     *
     * // Only select the `supplier_document_id`
     * const supplierDocumentWithSupplier_document_idOnly = await prisma.supplierDocument.findMany({ select: { supplier_document_id: true } })
     *
     */
    findMany<T extends SupplierDocumentFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a SupplierDocument.
     * @param {SupplierDocumentCreateArgs} args - Arguments to create a SupplierDocument.
     * @example
     * // Create one SupplierDocument
     * const SupplierDocument = await prisma.supplierDocument.create({
     *   data: {
     *     // ... data to create a SupplierDocument
     *   }
     * })
     *
     */
    create<T extends SupplierDocumentCreateArgs>(args: Prisma.SelectSubset<T, SupplierDocumentCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many SupplierDocuments.
     * @param {SupplierDocumentCreateManyArgs} args - Arguments to create many SupplierDocuments.
     * @example
     * // Create many SupplierDocuments
     * const supplierDocument = await prisma.supplierDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierDocumentCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many SupplierDocuments and returns the data saved in the database.
     * @param {SupplierDocumentCreateManyAndReturnArgs} args - Arguments to create many SupplierDocuments.
     * @example
     * // Create many SupplierDocuments
     * const supplierDocument = await prisma.supplierDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many SupplierDocuments and only return the `supplier_document_id`
     * const supplierDocumentWithSupplier_document_idOnly = await prisma.supplierDocument.createManyAndReturn({
     *   select: { supplier_document_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierDocumentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a SupplierDocument.
     * @param {SupplierDocumentDeleteArgs} args - Arguments to delete one SupplierDocument.
     * @example
     * // Delete one SupplierDocument
     * const SupplierDocument = await prisma.supplierDocument.delete({
     *   where: {
     *     // ... filter to delete one SupplierDocument
     *   }
     * })
     *
     */
    delete<T extends SupplierDocumentDeleteArgs>(args: Prisma.SelectSubset<T, SupplierDocumentDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one SupplierDocument.
     * @param {SupplierDocumentUpdateArgs} args - Arguments to update one SupplierDocument.
     * @example
     * // Update one SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierDocumentUpdateArgs>(args: Prisma.SelectSubset<T, SupplierDocumentUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more SupplierDocuments.
     * @param {SupplierDocumentDeleteManyArgs} args - Arguments to filter SupplierDocuments to delete.
     * @example
     * // Delete a few SupplierDocuments
     * const { count } = await prisma.supplierDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierDocumentDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierDocuments
     * const supplierDocument = await prisma.supplierDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierDocumentUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more SupplierDocuments and returns the data updated in the database.
     * @param {SupplierDocumentUpdateManyAndReturnArgs} args - Arguments to update many SupplierDocuments.
     * @example
     * // Update many SupplierDocuments
     * const supplierDocument = await prisma.supplierDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more SupplierDocuments and only return the `supplier_document_id`
     * const supplierDocumentWithSupplier_document_idOnly = await prisma.supplierDocument.updateManyAndReturn({
     *   select: { supplier_document_id: true },
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
    updateManyAndReturn<T extends SupplierDocumentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one SupplierDocument.
     * @param {SupplierDocumentUpsertArgs} args - Arguments to update or create a SupplierDocument.
     * @example
     * // Update or create a SupplierDocument
     * const supplierDocument = await prisma.supplierDocument.upsert({
     *   create: {
     *     // ... data to create a SupplierDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierDocument we want to update
     *   }
     * })
     */
    upsert<T extends SupplierDocumentUpsertArgs>(args: Prisma.SelectSubset<T, SupplierDocumentUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of SupplierDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentCountArgs} args - Arguments to filter SupplierDocuments to count.
     * @example
     * // Count the number of SupplierDocuments
     * const count = await prisma.supplierDocument.count({
     *   where: {
     *     // ... the filter for the SupplierDocuments we want to count
     *   }
     * })
    **/
    count<T extends SupplierDocumentCountArgs>(args?: Prisma.Subset<T, SupplierDocumentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierDocumentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a SupplierDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierDocumentAggregateArgs>(args: Prisma.Subset<T, SupplierDocumentAggregateArgs>): Prisma.PrismaPromise<GetSupplierDocumentAggregateType<T>>;
    /**
     * Group by SupplierDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierDocumentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierDocumentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierDocumentGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierDocumentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the SupplierDocument model
     */
    readonly fields: SupplierDocumentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for SupplierDocument.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierDocumentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    signature_file<T extends Prisma.SupplierDocument$signature_fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDocument$signature_fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    supplier<T extends Prisma.SupplierDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDefaultArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tax_sheet_file<T extends Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDocument$tax_sheet_fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    trade_registry_file<T extends Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SupplierDocument$trade_registry_fileArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the SupplierDocument model
 */
export interface SupplierDocumentFieldRefs {
    readonly supplier_document_id: Prisma.FieldRef<"SupplierDocument", 'Int'>;
    readonly supplier_id: Prisma.FieldRef<"SupplierDocument", 'Int'>;
    readonly tax_sheet_file_id: Prisma.FieldRef<"SupplierDocument", 'Int'>;
    readonly trade_registry_file_id: Prisma.FieldRef<"SupplierDocument", 'Int'>;
    readonly signature_declaration_file_id: Prisma.FieldRef<"SupplierDocument", 'Int'>;
    readonly uploaded_at: Prisma.FieldRef<"SupplierDocument", 'DateTime'>;
}
/**
 * SupplierDocument findUnique
 */
export type SupplierDocumentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierDocument to fetch.
     */
    where: Prisma.SupplierDocumentWhereUniqueInput;
};
/**
 * SupplierDocument findUniqueOrThrow
 */
export type SupplierDocumentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierDocument to fetch.
     */
    where: Prisma.SupplierDocumentWhereUniqueInput;
};
/**
 * SupplierDocument findFirst
 */
export type SupplierDocumentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierDocument to fetch.
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierDocuments to fetch.
     */
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierDocuments.
     */
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierDocuments.
     */
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * SupplierDocument findFirstOrThrow
 */
export type SupplierDocumentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierDocument to fetch.
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierDocuments to fetch.
     */
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for SupplierDocuments.
     */
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierDocuments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of SupplierDocuments.
     */
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * SupplierDocument findMany
 */
export type SupplierDocumentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter, which SupplierDocuments to fetch.
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of SupplierDocuments to fetch.
     */
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing SupplierDocuments.
     */
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` SupplierDocuments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` SupplierDocuments.
     */
    skip?: number;
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * SupplierDocument create
 */
export type SupplierDocumentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * The data needed to create a SupplierDocument.
     */
    data: Prisma.XOR<Prisma.SupplierDocumentCreateInput, Prisma.SupplierDocumentUncheckedCreateInput>;
};
/**
 * SupplierDocument createMany
 */
export type SupplierDocumentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierDocuments.
     */
    data: Prisma.SupplierDocumentCreateManyInput | Prisma.SupplierDocumentCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * SupplierDocument createManyAndReturn
 */
export type SupplierDocumentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * The data used to create many SupplierDocuments.
     */
    data: Prisma.SupplierDocumentCreateManyInput | Prisma.SupplierDocumentCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierDocument update
 */
export type SupplierDocumentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * The data needed to update a SupplierDocument.
     */
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateInput, Prisma.SupplierDocumentUncheckedUpdateInput>;
    /**
     * Choose, which SupplierDocument to update.
     */
    where: Prisma.SupplierDocumentWhereUniqueInput;
};
/**
 * SupplierDocument updateMany
 */
export type SupplierDocumentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierDocuments.
     */
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateManyMutationInput, Prisma.SupplierDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierDocuments to update
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * Limit how many SupplierDocuments to update.
     */
    limit?: number;
};
/**
 * SupplierDocument updateManyAndReturn
 */
export type SupplierDocumentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * The data used to update SupplierDocuments.
     */
    data: Prisma.XOR<Prisma.SupplierDocumentUpdateManyMutationInput, Prisma.SupplierDocumentUncheckedUpdateManyInput>;
    /**
     * Filter which SupplierDocuments to update
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * Limit how many SupplierDocuments to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * SupplierDocument upsert
 */
export type SupplierDocumentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * The filter to search for the SupplierDocument to update in case it exists.
     */
    where: Prisma.SupplierDocumentWhereUniqueInput;
    /**
     * In case the SupplierDocument found by the `where` argument doesn't exist, create a new SupplierDocument with this data.
     */
    create: Prisma.XOR<Prisma.SupplierDocumentCreateInput, Prisma.SupplierDocumentUncheckedCreateInput>;
    /**
     * In case the SupplierDocument was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierDocumentUpdateInput, Prisma.SupplierDocumentUncheckedUpdateInput>;
};
/**
 * SupplierDocument delete
 */
export type SupplierDocumentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
    /**
     * Filter which SupplierDocument to delete.
     */
    where: Prisma.SupplierDocumentWhereUniqueInput;
};
/**
 * SupplierDocument deleteMany
 */
export type SupplierDocumentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierDocuments to delete
     */
    where?: Prisma.SupplierDocumentWhereInput;
    /**
     * Limit how many SupplierDocuments to delete.
     */
    limit?: number;
};
/**
 * SupplierDocument.signature_file
 */
export type SupplierDocument$signature_fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierDocument.tax_sheet_file
 */
export type SupplierDocument$tax_sheet_fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierDocument.trade_registry_file
 */
export type SupplierDocument$trade_registry_fileArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * SupplierDocument without action
 */
export type SupplierDocumentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierDocument
     */
    select?: Prisma.SupplierDocumentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the SupplierDocument
     */
    omit?: Prisma.SupplierDocumentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierDocumentInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=SupplierDocument.d.ts.map