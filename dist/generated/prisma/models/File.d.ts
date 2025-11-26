import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model File
 *
 */
export type FileModel = runtime.Types.Result.DefaultSelection<Prisma.$FilePayload>;
export type AggregateFile = {
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
export type FileAvgAggregateOutputType = {
    file_id: number | null;
    size_bytes: number | null;
};
export type FileSumAggregateOutputType = {
    file_id: number | null;
    size_bytes: bigint | null;
};
export type FileMinAggregateOutputType = {
    file_id: number | null;
    storage_key: string | null;
    original_filename: string | null;
    mime_type: string | null;
    size_bytes: bigint | null;
    uploaded_by: string | null;
    uploaded_at: Date | null;
};
export type FileMaxAggregateOutputType = {
    file_id: number | null;
    storage_key: string | null;
    original_filename: string | null;
    mime_type: string | null;
    size_bytes: bigint | null;
    uploaded_by: string | null;
    uploaded_at: Date | null;
};
export type FileCountAggregateOutputType = {
    file_id: number;
    storage_key: number;
    original_filename: number;
    mime_type: number;
    size_bytes: number;
    uploaded_by: number;
    uploaded_at: number;
    metadata: number;
    _all: number;
};
export type FileAvgAggregateInputType = {
    file_id?: true;
    size_bytes?: true;
};
export type FileSumAggregateInputType = {
    file_id?: true;
    size_bytes?: true;
};
export type FileMinAggregateInputType = {
    file_id?: true;
    storage_key?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    uploaded_by?: true;
    uploaded_at?: true;
};
export type FileMaxAggregateInputType = {
    file_id?: true;
    storage_key?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    uploaded_by?: true;
    uploaded_at?: true;
};
export type FileCountAggregateInputType = {
    file_id?: true;
    storage_key?: true;
    original_filename?: true;
    mime_type?: true;
    size_bytes?: true;
    uploaded_by?: true;
    uploaded_at?: true;
    metadata?: true;
    _all?: true;
};
export type FileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: Prisma.FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType;
};
export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFile[P]> : Prisma.GetScalarType<T[P], AggregateFile[P]>;
};
export type FileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FileWhereInput;
    orderBy?: Prisma.FileOrderByWithAggregationInput | Prisma.FileOrderByWithAggregationInput[];
    by: Prisma.FileScalarFieldEnum[] | Prisma.FileScalarFieldEnum;
    having?: Prisma.FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInputType | true;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
};
export type FileGroupByOutputType = {
    file_id: number;
    storage_key: string;
    original_filename: string | null;
    mime_type: string | null;
    size_bytes: bigint | null;
    uploaded_by: string | null;
    uploaded_at: Date;
    metadata: runtime.JsonValue | null;
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
};
type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FileGroupByOutputType[P]>;
}>>;
export type FileWhereInput = {
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    file_id?: Prisma.IntFilter<"File"> | number;
    storage_key?: Prisma.StringFilter<"File"> | string;
    original_filename?: Prisma.StringNullableFilter<"File"> | string | null;
    mime_type?: Prisma.StringNullableFilter<"File"> | string | null;
    size_bytes?: Prisma.BigIntNullableFilter<"File"> | bigint | number | null;
    uploaded_by?: Prisma.UuidNullableFilter<"File"> | string | null;
    uploaded_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"File">;
    uploader?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    products?: Prisma.ProductListRelationFilter;
    productMedia?: Prisma.ProductMediaListRelationFilter;
    supplierBankProofs?: Prisma.SupplierBankAccountListRelationFilter;
    supplierDocumentsSignature?: Prisma.SupplierDocumentListRelationFilter;
    supplierDocumentsTax?: Prisma.SupplierDocumentListRelationFilter;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentListRelationFilter;
};
export type FileOrderByWithRelationInput = {
    file_id?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    size_bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploader?: Prisma.AuthUserOrderByWithRelationInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    productMedia?: Prisma.ProductMediaOrderByRelationAggregateInput;
    supplierBankProofs?: Prisma.SupplierBankAccountOrderByRelationAggregateInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentOrderByRelationAggregateInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentOrderByRelationAggregateInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentOrderByRelationAggregateInput;
};
export type FileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number;
    storage_key?: string;
    AND?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    OR?: Prisma.FileWhereInput[];
    NOT?: Prisma.FileWhereInput | Prisma.FileWhereInput[];
    original_filename?: Prisma.StringNullableFilter<"File"> | string | null;
    mime_type?: Prisma.StringNullableFilter<"File"> | string | null;
    size_bytes?: Prisma.BigIntNullableFilter<"File"> | bigint | number | null;
    uploaded_by?: Prisma.UuidNullableFilter<"File"> | string | null;
    uploaded_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"File">;
    uploader?: Prisma.XOR<Prisma.AuthUserNullableScalarRelationFilter, Prisma.AuthUserWhereInput> | null;
    products?: Prisma.ProductListRelationFilter;
    productMedia?: Prisma.ProductMediaListRelationFilter;
    supplierBankProofs?: Prisma.SupplierBankAccountListRelationFilter;
    supplierDocumentsSignature?: Prisma.SupplierDocumentListRelationFilter;
    supplierDocumentsTax?: Prisma.SupplierDocumentListRelationFilter;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentListRelationFilter;
}, "file_id" | "storage_key">;
export type FileOrderByWithAggregationInput = {
    file_id?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrderInput | Prisma.SortOrder;
    mime_type?: Prisma.SortOrderInput | Prisma.SortOrder;
    size_bytes?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.FileCountOrderByAggregateInput;
    _avg?: Prisma.FileAvgOrderByAggregateInput;
    _max?: Prisma.FileMaxOrderByAggregateInput;
    _min?: Prisma.FileMinOrderByAggregateInput;
    _sum?: Prisma.FileSumOrderByAggregateInput;
};
export type FileScalarWhereWithAggregatesInput = {
    AND?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    OR?: Prisma.FileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FileScalarWhereWithAggregatesInput | Prisma.FileScalarWhereWithAggregatesInput[];
    file_id?: Prisma.IntWithAggregatesFilter<"File"> | number;
    storage_key?: Prisma.StringWithAggregatesFilter<"File"> | string;
    original_filename?: Prisma.StringNullableWithAggregatesFilter<"File"> | string | null;
    mime_type?: Prisma.StringNullableWithAggregatesFilter<"File"> | string | null;
    size_bytes?: Prisma.BigIntNullableWithAggregatesFilter<"File"> | bigint | number | null;
    uploaded_by?: Prisma.UuidNullableWithAggregatesFilter<"File"> | string | null;
    uploaded_at?: Prisma.DateTimeWithAggregatesFilter<"File"> | Date | string;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"File">;
};
export type FileCreateInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUpdateInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileCreateManyInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FileUpdateManyMutationInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FileUncheckedUpdateManyInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FileListRelationFilter = {
    every?: Prisma.FileWhereInput;
    some?: Prisma.FileWhereInput;
    none?: Prisma.FileWhereInput;
};
export type FileOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FileCountOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
};
export type FileAvgOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
};
export type FileMaxOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
};
export type FileMinOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    storage_key?: Prisma.SortOrder;
    original_filename?: Prisma.SortOrder;
    mime_type?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    uploaded_at?: Prisma.SortOrder;
};
export type FileSumOrderByAggregateInput = {
    file_id?: Prisma.SortOrder;
    size_bytes?: Prisma.SortOrder;
};
export type FileNullableScalarRelationFilter = {
    is?: Prisma.FileWhereInput | null;
    isNot?: Prisma.FileWhereInput | null;
};
export type FileScalarRelationFilter = {
    is?: Prisma.FileWhereInput;
    isNot?: Prisma.FileWhereInput;
};
export type FileCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
};
export type FileUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput | Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput | Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutUploaderInput | Prisma.FileUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type FileUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput> | Prisma.FileCreateWithoutUploaderInput[] | Prisma.FileUncheckedCreateWithoutUploaderInput[];
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutUploaderInput | Prisma.FileCreateOrConnectWithoutUploaderInput[];
    upsert?: Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput | Prisma.FileUpsertWithWhereUniqueWithoutUploaderInput[];
    createMany?: Prisma.FileCreateManyUploaderInputEnvelope;
    set?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    disconnect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    delete?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    connect?: Prisma.FileWhereUniqueInput | Prisma.FileWhereUniqueInput[];
    update?: Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput | Prisma.FileUpdateWithWhereUniqueWithoutUploaderInput[];
    updateMany?: Prisma.FileUpdateManyWithWhereWithoutUploaderInput | Prisma.FileUpdateManyWithWhereWithoutUploaderInput[];
    deleteMany?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type FileCreateNestedOneWithoutSupplierDocumentsSignatureInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsSignatureInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsSignatureInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileCreateNestedOneWithoutSupplierDocumentsTaxInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsTaxInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsTaxInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileCreateNestedOneWithoutSupplierDocumentsRegistryInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsRegistryInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsRegistryInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileUpdateOneWithoutSupplierDocumentsSignatureNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsSignatureInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsSignatureInput;
    upsert?: Prisma.FileUpsertWithoutSupplierDocumentsSignatureInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutSupplierDocumentsSignatureInput, Prisma.FileUpdateWithoutSupplierDocumentsSignatureInput>, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsSignatureInput>;
};
export type FileUpdateOneWithoutSupplierDocumentsTaxNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsTaxInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsTaxInput;
    upsert?: Prisma.FileUpsertWithoutSupplierDocumentsTaxInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutSupplierDocumentsTaxInput, Prisma.FileUpdateWithoutSupplierDocumentsTaxInput>, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsTaxInput>;
};
export type FileUpdateOneWithoutSupplierDocumentsRegistryNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsRegistryInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierDocumentsRegistryInput;
    upsert?: Prisma.FileUpsertWithoutSupplierDocumentsRegistryInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutSupplierDocumentsRegistryInput, Prisma.FileUpdateWithoutSupplierDocumentsRegistryInput>, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsRegistryInput>;
};
export type FileCreateNestedOneWithoutSupplierBankProofsInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierBankProofsInput, Prisma.FileUncheckedCreateWithoutSupplierBankProofsInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierBankProofsInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileUpdateOneWithoutSupplierBankProofsNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutSupplierBankProofsInput, Prisma.FileUncheckedCreateWithoutSupplierBankProofsInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutSupplierBankProofsInput;
    upsert?: Prisma.FileUpsertWithoutSupplierBankProofsInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutSupplierBankProofsInput, Prisma.FileUpdateWithoutSupplierBankProofsInput>, Prisma.FileUncheckedUpdateWithoutSupplierBankProofsInput>;
};
export type FileCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutProductsInput, Prisma.FileUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutProductsInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileUpdateOneWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutProductsInput, Prisma.FileUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.FileUpsertWithoutProductsInput;
    disconnect?: Prisma.FileWhereInput | boolean;
    delete?: Prisma.FileWhereInput | boolean;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutProductsInput, Prisma.FileUpdateWithoutProductsInput>, Prisma.FileUncheckedUpdateWithoutProductsInput>;
};
export type FileCreateNestedOneWithoutProductMediaInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutProductMediaInput, Prisma.FileUncheckedCreateWithoutProductMediaInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutProductMediaInput;
    connect?: Prisma.FileWhereUniqueInput;
};
export type FileUpdateOneRequiredWithoutProductMediaNestedInput = {
    create?: Prisma.XOR<Prisma.FileCreateWithoutProductMediaInput, Prisma.FileUncheckedCreateWithoutProductMediaInput>;
    connectOrCreate?: Prisma.FileCreateOrConnectWithoutProductMediaInput;
    upsert?: Prisma.FileUpsertWithoutProductMediaInput;
    connect?: Prisma.FileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.FileUpdateToOneWithWhereWithoutProductMediaInput, Prisma.FileUpdateWithoutProductMediaInput>, Prisma.FileUncheckedUpdateWithoutProductMediaInput>;
};
export type FileCreateWithoutUploaderInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutUploaderInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput>;
};
export type FileCreateManyUploaderInputEnvelope = {
    data: Prisma.FileCreateManyUploaderInput | Prisma.FileCreateManyUploaderInput[];
    skipDuplicates?: boolean;
};
export type FileUpsertWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    update: Prisma.XOR<Prisma.FileUpdateWithoutUploaderInput, Prisma.FileUncheckedUpdateWithoutUploaderInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutUploaderInput, Prisma.FileUncheckedCreateWithoutUploaderInput>;
};
export type FileUpdateWithWhereUniqueWithoutUploaderInput = {
    where: Prisma.FileWhereUniqueInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutUploaderInput, Prisma.FileUncheckedUpdateWithoutUploaderInput>;
};
export type FileUpdateManyWithWhereWithoutUploaderInput = {
    where: Prisma.FileScalarWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyWithoutUploaderInput>;
};
export type FileScalarWhereInput = {
    AND?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    OR?: Prisma.FileScalarWhereInput[];
    NOT?: Prisma.FileScalarWhereInput | Prisma.FileScalarWhereInput[];
    file_id?: Prisma.IntFilter<"File"> | number;
    storage_key?: Prisma.StringFilter<"File"> | string;
    original_filename?: Prisma.StringNullableFilter<"File"> | string | null;
    mime_type?: Prisma.StringNullableFilter<"File"> | string | null;
    size_bytes?: Prisma.BigIntNullableFilter<"File"> | bigint | number | null;
    uploaded_by?: Prisma.UuidNullableFilter<"File"> | string | null;
    uploaded_at?: Prisma.DateTimeFilter<"File"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"File">;
};
export type FileCreateWithoutSupplierDocumentsSignatureInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutSupplierDocumentsSignatureInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutSupplierDocumentsSignatureInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsSignatureInput>;
};
export type FileCreateWithoutSupplierDocumentsTaxInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutSupplierDocumentsTaxInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutSupplierDocumentsTaxInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsTaxInput>;
};
export type FileCreateWithoutSupplierDocumentsRegistryInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
};
export type FileUncheckedCreateWithoutSupplierDocumentsRegistryInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
};
export type FileCreateOrConnectWithoutSupplierDocumentsRegistryInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsRegistryInput>;
};
export type FileUpsertWithoutSupplierDocumentsSignatureInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsSignatureInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsSignatureInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutSupplierDocumentsSignatureInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsSignatureInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsSignatureInput>;
};
export type FileUpdateWithoutSupplierDocumentsSignatureInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutSupplierDocumentsSignatureInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUpsertWithoutSupplierDocumentsTaxInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsTaxInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsTaxInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutSupplierDocumentsTaxInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsTaxInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsTaxInput>;
};
export type FileUpdateWithoutSupplierDocumentsTaxInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutSupplierDocumentsTaxInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUpsertWithoutSupplierDocumentsRegistryInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsRegistryInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedCreateWithoutSupplierDocumentsRegistryInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutSupplierDocumentsRegistryInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutSupplierDocumentsRegistryInput, Prisma.FileUncheckedUpdateWithoutSupplierDocumentsRegistryInput>;
};
export type FileUpdateWithoutSupplierDocumentsRegistryInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
};
export type FileUncheckedUpdateWithoutSupplierDocumentsRegistryInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
};
export type FileCreateWithoutSupplierBankProofsInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutSupplierBankProofsInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutSupplierBankProofsInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierBankProofsInput, Prisma.FileUncheckedCreateWithoutSupplierBankProofsInput>;
};
export type FileUpsertWithoutSupplierBankProofsInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutSupplierBankProofsInput, Prisma.FileUncheckedUpdateWithoutSupplierBankProofsInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutSupplierBankProofsInput, Prisma.FileUncheckedCreateWithoutSupplierBankProofsInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutSupplierBankProofsInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutSupplierBankProofsInput, Prisma.FileUncheckedUpdateWithoutSupplierBankProofsInput>;
};
export type FileUpdateWithoutSupplierBankProofsInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutSupplierBankProofsInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileCreateWithoutProductsInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    productMedia?: Prisma.ProductMediaCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutProductsInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    productMedia?: Prisma.ProductMediaUncheckedCreateNestedManyWithoutFileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutProductsInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutProductsInput, Prisma.FileUncheckedCreateWithoutProductsInput>;
};
export type FileUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutProductsInput, Prisma.FileUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutProductsInput, Prisma.FileUncheckedCreateWithoutProductsInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutProductsInput, Prisma.FileUncheckedUpdateWithoutProductsInput>;
};
export type FileUpdateWithoutProductsInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutProductsInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileCreateWithoutProductMediaInput = {
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserCreateNestedOneWithoutUploadedFilesInput;
    products?: Prisma.ProductCreateNestedManyWithoutMain_image_fileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileUncheckedCreateWithoutProductMediaInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_by?: string | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutMain_image_fileInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutProof_fileInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutSignature_fileInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTax_sheet_fileInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedCreateNestedManyWithoutTrade_registry_fileInput;
};
export type FileCreateOrConnectWithoutProductMediaInput = {
    where: Prisma.FileWhereUniqueInput;
    create: Prisma.XOR<Prisma.FileCreateWithoutProductMediaInput, Prisma.FileUncheckedCreateWithoutProductMediaInput>;
};
export type FileUpsertWithoutProductMediaInput = {
    update: Prisma.XOR<Prisma.FileUpdateWithoutProductMediaInput, Prisma.FileUncheckedUpdateWithoutProductMediaInput>;
    create: Prisma.XOR<Prisma.FileCreateWithoutProductMediaInput, Prisma.FileUncheckedCreateWithoutProductMediaInput>;
    where?: Prisma.FileWhereInput;
};
export type FileUpdateToOneWithWhereWithoutProductMediaInput = {
    where?: Prisma.FileWhereInput;
    data: Prisma.XOR<Prisma.FileUpdateWithoutProductMediaInput, Prisma.FileUncheckedUpdateWithoutProductMediaInput>;
};
export type FileUpdateWithoutProductMediaInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    uploader?: Prisma.AuthUserUpdateOneWithoutUploadedFilesNestedInput;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutProductMediaInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_by?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileCreateManyUploaderInput = {
    file_id?: number;
    storage_key: string;
    original_filename?: string | null;
    mime_type?: string | null;
    size_bytes?: bigint | number | null;
    uploaded_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type FileUpdateWithoutUploaderInput = {
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateWithoutUploaderInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    products?: Prisma.ProductUncheckedUpdateManyWithoutMain_image_fileNestedInput;
    productMedia?: Prisma.ProductMediaUncheckedUpdateManyWithoutFileNestedInput;
    supplierBankProofs?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutProof_fileNestedInput;
    supplierDocumentsSignature?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutSignature_fileNestedInput;
    supplierDocumentsTax?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTax_sheet_fileNestedInput;
    supplierDocumentsRegistry?: Prisma.SupplierDocumentUncheckedUpdateManyWithoutTrade_registry_fileNestedInput;
};
export type FileUncheckedUpdateManyWithoutUploaderInput = {
    file_id?: Prisma.IntFieldUpdateOperationsInput | number;
    storage_key?: Prisma.StringFieldUpdateOperationsInput | string;
    original_filename?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mime_type?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    size_bytes?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    uploaded_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
/**
 * Count Type FileCountOutputType
 */
export type FileCountOutputType = {
    products: number;
    productMedia: number;
    supplierBankProofs: number;
    supplierDocumentsSignature: number;
    supplierDocumentsTax: number;
    supplierDocumentsRegistry: number;
};
export type FileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    products?: boolean | FileCountOutputTypeCountProductsArgs;
    productMedia?: boolean | FileCountOutputTypeCountProductMediaArgs;
    supplierBankProofs?: boolean | FileCountOutputTypeCountSupplierBankProofsArgs;
    supplierDocumentsSignature?: boolean | FileCountOutputTypeCountSupplierDocumentsSignatureArgs;
    supplierDocumentsTax?: boolean | FileCountOutputTypeCountSupplierDocumentsTaxArgs;
    supplierDocumentsRegistry?: boolean | FileCountOutputTypeCountSupplierDocumentsRegistryArgs;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: Prisma.FileCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountProductMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductMediaWhereInput;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountSupplierBankProofsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierBankAccountWhereInput;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountSupplierDocumentsSignatureArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierDocumentWhereInput;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountSupplierDocumentsTaxArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierDocumentWhereInput;
};
/**
 * FileCountOutputType without action
 */
export type FileCountOutputTypeCountSupplierDocumentsRegistryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierDocumentWhereInput;
};
export type FileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    storage_key?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    uploaded_by?: boolean;
    uploaded_at?: boolean;
    metadata?: boolean;
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
    products?: boolean | Prisma.File$productsArgs<ExtArgs>;
    productMedia?: boolean | Prisma.File$productMediaArgs<ExtArgs>;
    supplierBankProofs?: boolean | Prisma.File$supplierBankProofsArgs<ExtArgs>;
    supplierDocumentsSignature?: boolean | Prisma.File$supplierDocumentsSignatureArgs<ExtArgs>;
    supplierDocumentsTax?: boolean | Prisma.File$supplierDocumentsTaxArgs<ExtArgs>;
    supplierDocumentsRegistry?: boolean | Prisma.File$supplierDocumentsRegistryArgs<ExtArgs>;
    _count?: boolean | Prisma.FileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    storage_key?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    uploaded_by?: boolean;
    uploaded_at?: boolean;
    metadata?: boolean;
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    file_id?: boolean;
    storage_key?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    uploaded_by?: boolean;
    uploaded_at?: boolean;
    metadata?: boolean;
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
}, ExtArgs["result"]["file"]>;
export type FileSelectScalar = {
    file_id?: boolean;
    storage_key?: boolean;
    original_filename?: boolean;
    mime_type?: boolean;
    size_bytes?: boolean;
    uploaded_by?: boolean;
    uploaded_at?: boolean;
    metadata?: boolean;
};
export type FileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"file_id" | "storage_key" | "original_filename" | "mime_type" | "size_bytes" | "uploaded_by" | "uploaded_at" | "metadata", ExtArgs["result"]["file"]>;
export type FileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
    products?: boolean | Prisma.File$productsArgs<ExtArgs>;
    productMedia?: boolean | Prisma.File$productMediaArgs<ExtArgs>;
    supplierBankProofs?: boolean | Prisma.File$supplierBankProofsArgs<ExtArgs>;
    supplierDocumentsSignature?: boolean | Prisma.File$supplierDocumentsSignatureArgs<ExtArgs>;
    supplierDocumentsTax?: boolean | Prisma.File$supplierDocumentsTaxArgs<ExtArgs>;
    supplierDocumentsRegistry?: boolean | Prisma.File$supplierDocumentsRegistryArgs<ExtArgs>;
    _count?: boolean | Prisma.FileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type FileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
};
export type FileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploader?: boolean | Prisma.File$uploaderArgs<ExtArgs>;
};
export type $FilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "File";
    objects: {
        uploader: Prisma.$AuthUserPayload<ExtArgs> | null;
        products: Prisma.$ProductPayload<ExtArgs>[];
        productMedia: Prisma.$ProductMediaPayload<ExtArgs>[];
        supplierBankProofs: Prisma.$SupplierBankAccountPayload<ExtArgs>[];
        supplierDocumentsSignature: Prisma.$SupplierDocumentPayload<ExtArgs>[];
        supplierDocumentsTax: Prisma.$SupplierDocumentPayload<ExtArgs>[];
        supplierDocumentsRegistry: Prisma.$SupplierDocumentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        file_id: number;
        storage_key: string;
        original_filename: string | null;
        mime_type: string | null;
        size_bytes: bigint | null;
        uploaded_by: string | null;
        uploaded_at: Date;
        metadata: runtime.JsonValue | null;
    }, ExtArgs["result"]["file"]>;
    composites: {};
};
export type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FilePayload, S>;
export type FileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FileCountAggregateInputType | true;
};
export interface FileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['File'];
        meta: {
            name: 'File';
        };
    };
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: Prisma.SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: Prisma.SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     *
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     *
     * // Only select the `file_id`
     * const fileWithFile_idOnly = await prisma.file.findMany({ select: { file_id: true } })
     *
     */
    findMany<T extends FileFindManyArgs>(args?: Prisma.SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     *
     */
    create<T extends FileCreateArgs>(args: Prisma.SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FileCreateManyArgs>(args?: Prisma.SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     *
     */
    delete<T extends FileDeleteArgs>(args: Prisma.SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FileUpdateArgs>(args: Prisma.SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: Prisma.SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FileUpdateManyArgs>(args: Prisma.SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.updateManyAndReturn({
     *   select: { file_id: true },
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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: Prisma.SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma.Prisma__FileClient<runtime.Types.Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(args?: Prisma.Subset<T, FileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FileCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Prisma.Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>;
    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
    groupBy<T extends FileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FileGroupByArgs['orderBy'];
    } : {
        orderBy?: FileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the File model
     */
    readonly fields: FileFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for File.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__FileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    uploader<T extends Prisma.File$uploaderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$uploaderArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    products<T extends Prisma.File$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    productMedia<T extends Prisma.File$productMediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$productMediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierBankProofs<T extends Prisma.File$supplierBankProofsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$supplierBankProofsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierDocumentsSignature<T extends Prisma.File$supplierDocumentsSignatureArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$supplierDocumentsSignatureArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierDocumentsTax<T extends Prisma.File$supplierDocumentsTaxArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$supplierDocumentsTaxArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    supplierDocumentsRegistry<T extends Prisma.File$supplierDocumentsRegistryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.File$supplierDocumentsRegistryArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the File model
 */
export interface FileFieldRefs {
    readonly file_id: Prisma.FieldRef<"File", 'Int'>;
    readonly storage_key: Prisma.FieldRef<"File", 'String'>;
    readonly original_filename: Prisma.FieldRef<"File", 'String'>;
    readonly mime_type: Prisma.FieldRef<"File", 'String'>;
    readonly size_bytes: Prisma.FieldRef<"File", 'BigInt'>;
    readonly uploaded_by: Prisma.FieldRef<"File", 'String'>;
    readonly uploaded_at: Prisma.FieldRef<"File", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"File", 'Json'>;
}
/**
 * File findUnique
 */
export type FileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which File to fetch.
     */
    where: Prisma.FileWhereUniqueInput;
};
/**
 * File findUniqueOrThrow
 */
export type FileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which File to fetch.
     */
    where: Prisma.FileWhereUniqueInput;
};
/**
 * File findFirst
 */
export type FileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which File to fetch.
     */
    where?: Prisma.FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Files.
     */
    cursor?: Prisma.FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Files.
     */
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
/**
 * File findFirstOrThrow
 */
export type FileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which File to fetch.
     */
    where?: Prisma.FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Files.
     */
    cursor?: Prisma.FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Files.
     */
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
/**
 * File findMany
 */
export type FileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Files to fetch.
     */
    where?: Prisma.FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: Prisma.FileOrderByWithRelationInput | Prisma.FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Files.
     */
    cursor?: Prisma.FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    distinct?: Prisma.FileScalarFieldEnum | Prisma.FileScalarFieldEnum[];
};
/**
 * File create
 */
export type FileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a File.
     */
    data: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
};
/**
 * File createMany
 */
export type FileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * File createManyAndReturn
 */
export type FileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: Prisma.FileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: Prisma.FileOmit<ExtArgs> | null;
    /**
     * The data used to create many Files.
     */
    data: Prisma.FileCreateManyInput | Prisma.FileCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * File update
 */
export type FileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a File.
     */
    data: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
    /**
     * Choose, which File to update.
     */
    where: Prisma.FileWhereUniqueInput;
};
/**
 * File updateMany
 */
export type FileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    /**
     * Filter which Files to update
     */
    where?: Prisma.FileWhereInput;
    /**
     * Limit how many Files to update.
     */
    limit?: number;
};
/**
 * File updateManyAndReturn
 */
export type FileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: Prisma.FileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: Prisma.FileOmit<ExtArgs> | null;
    /**
     * The data used to update Files.
     */
    data: Prisma.XOR<Prisma.FileUpdateManyMutationInput, Prisma.FileUncheckedUpdateManyInput>;
    /**
     * Filter which Files to update
     */
    where?: Prisma.FileWhereInput;
    /**
     * Limit how many Files to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.FileIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * File upsert
 */
export type FileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: Prisma.FileWhereUniqueInput;
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: Prisma.XOR<Prisma.FileCreateInput, Prisma.FileUncheckedCreateInput>;
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.FileUpdateInput, Prisma.FileUncheckedUpdateInput>;
};
/**
 * File delete
 */
export type FileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which File to delete.
     */
    where: Prisma.FileWhereUniqueInput;
};
/**
 * File deleteMany
 */
export type FileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: Prisma.FileWhereInput;
    /**
     * Limit how many Files to delete.
     */
    limit?: number;
};
/**
 * File.uploader
 */
export type File$uploaderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * File.products
 */
export type File$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: Prisma.ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: Prisma.ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductInclude<ExtArgs> | null;
    where?: Prisma.ProductWhereInput;
    orderBy?: Prisma.ProductOrderByWithRelationInput | Prisma.ProductOrderByWithRelationInput[];
    cursor?: Prisma.ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductScalarFieldEnum | Prisma.ProductScalarFieldEnum[];
};
/**
 * File.productMedia
 */
export type File$productMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductMedia
     */
    select?: Prisma.ProductMediaSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ProductMedia
     */
    omit?: Prisma.ProductMediaOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ProductMediaInclude<ExtArgs> | null;
    where?: Prisma.ProductMediaWhereInput;
    orderBy?: Prisma.ProductMediaOrderByWithRelationInput | Prisma.ProductMediaOrderByWithRelationInput[];
    cursor?: Prisma.ProductMediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProductMediaScalarFieldEnum | Prisma.ProductMediaScalarFieldEnum[];
};
/**
 * File.supplierBankProofs
 */
export type File$supplierBankProofsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierBankAccountWhereInput;
    orderBy?: Prisma.SupplierBankAccountOrderByWithRelationInput | Prisma.SupplierBankAccountOrderByWithRelationInput[];
    cursor?: Prisma.SupplierBankAccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierBankAccountScalarFieldEnum | Prisma.SupplierBankAccountScalarFieldEnum[];
};
/**
 * File.supplierDocumentsSignature
 */
export type File$supplierDocumentsSignatureArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierDocumentWhereInput;
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * File.supplierDocumentsTax
 */
export type File$supplierDocumentsTaxArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierDocumentWhereInput;
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * File.supplierDocumentsRegistry
 */
export type File$supplierDocumentsRegistryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierDocumentWhereInput;
    orderBy?: Prisma.SupplierDocumentOrderByWithRelationInput | Prisma.SupplierDocumentOrderByWithRelationInput[];
    cursor?: Prisma.SupplierDocumentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierDocumentScalarFieldEnum | Prisma.SupplierDocumentScalarFieldEnum[];
};
/**
 * File without action
 */
export type FileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=File.d.ts.map