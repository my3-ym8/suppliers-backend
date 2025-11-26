import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Supplier
 *
 */
export type SupplierModel = runtime.Types.Result.DefaultSelection<Prisma.$SupplierPayload>;
export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null;
    _avg: SupplierAvgAggregateOutputType | null;
    _sum: SupplierSumAggregateOutputType | null;
    _min: SupplierMinAggregateOutputType | null;
    _max: SupplierMaxAggregateOutputType | null;
};
export type SupplierAvgAggregateOutputType = {
    supplier_id: number | null;
};
export type SupplierSumAggregateOutputType = {
    supplier_id: number | null;
};
export type SupplierMinAggregateOutputType = {
    supplier_id: number | null;
    auth_user_id: string | null;
    legal_name: string | null;
    company_type: $Enums.CompanyType | null;
    tax_number: string | null;
    tax_office: string | null;
    trade_registry_no: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierMaxAggregateOutputType = {
    supplier_id: number | null;
    auth_user_id: string | null;
    legal_name: string | null;
    company_type: $Enums.CompanyType | null;
    tax_number: string | null;
    tax_office: string | null;
    trade_registry_no: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type SupplierCountAggregateOutputType = {
    supplier_id: number;
    auth_user_id: number;
    legal_name: number;
    company_type: number;
    tax_number: number;
    tax_office: number;
    trade_registry_no: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type SupplierAvgAggregateInputType = {
    supplier_id?: true;
};
export type SupplierSumAggregateInputType = {
    supplier_id?: true;
};
export type SupplierMinAggregateInputType = {
    supplier_id?: true;
    auth_user_id?: true;
    legal_name?: true;
    company_type?: true;
    tax_number?: true;
    tax_office?: true;
    trade_registry_no?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierMaxAggregateInputType = {
    supplier_id?: true;
    auth_user_id?: true;
    legal_name?: true;
    company_type?: true;
    tax_number?: true;
    tax_office?: true;
    trade_registry_no?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type SupplierCountAggregateInputType = {
    supplier_id?: true;
    auth_user_id?: true;
    legal_name?: true;
    company_type?: true;
    tax_number?: true;
    tax_office?: true;
    trade_registry_no?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type SupplierAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SupplierOrderByWithRelationInput | Prisma.SupplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SupplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType;
};
export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSupplier[P]> : Prisma.GetScalarType<T[P], AggregateSupplier[P]>;
};
export type SupplierGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierWhereInput;
    orderBy?: Prisma.SupplierOrderByWithAggregationInput | Prisma.SupplierOrderByWithAggregationInput[];
    by: Prisma.SupplierScalarFieldEnum[] | Prisma.SupplierScalarFieldEnum;
    having?: Prisma.SupplierScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierCountAggregateInputType | true;
    _avg?: SupplierAvgAggregateInputType;
    _sum?: SupplierSumAggregateInputType;
    _min?: SupplierMinAggregateInputType;
    _max?: SupplierMaxAggregateInputType;
};
export type SupplierGroupByOutputType = {
    supplier_id: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office: string | null;
    trade_registry_no: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: SupplierCountAggregateOutputType | null;
    _avg: SupplierAvgAggregateOutputType | null;
    _sum: SupplierSumAggregateOutputType | null;
    _min: SupplierMinAggregateOutputType | null;
    _max: SupplierMaxAggregateOutputType | null;
};
type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SupplierGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SupplierGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SupplierGroupByOutputType[P]>;
}>>;
export type SupplierWhereInput = {
    AND?: Prisma.SupplierWhereInput | Prisma.SupplierWhereInput[];
    OR?: Prisma.SupplierWhereInput[];
    NOT?: Prisma.SupplierWhereInput | Prisma.SupplierWhereInput[];
    supplier_id?: Prisma.IntFilter<"Supplier"> | number;
    auth_user_id?: Prisma.UuidFilter<"Supplier"> | string;
    legal_name?: Prisma.StringFilter<"Supplier"> | string;
    company_type?: Prisma.EnumCompanyTypeFilter<"Supplier"> | $Enums.CompanyType;
    tax_number?: Prisma.StringFilter<"Supplier"> | string;
    tax_office?: Prisma.StringNullableFilter<"Supplier"> | string | null;
    trade_registry_no?: Prisma.StringNullableFilter<"Supplier"> | string | null;
    is_active?: Prisma.BoolFilter<"Supplier"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Supplier"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Supplier"> | Date | string;
    adminAssignments?: Prisma.AdminAssignmentListRelationFilter;
    adminProductOrders?: Prisma.AdminProductOrderListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    customersOrders?: Prisma.OrderListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    auth_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    bankAccounts?: Prisma.SupplierBankAccountListRelationFilter;
    contacts?: Prisma.SupplierContactAddressListRelationFilter;
    documents?: Prisma.XOR<Prisma.SupplierDocumentNullableScalarRelationFilter, Prisma.SupplierDocumentWhereInput> | null;
    skills?: Prisma.SupplierSkillActivityListRelationFilter;
    status?: Prisma.XOR<Prisma.SupplierStatusNullableScalarRelationFilter, Prisma.SupplierStatusWhereInput> | null;
};
export type SupplierOrderByWithRelationInput = {
    supplier_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    company_type?: Prisma.SortOrder;
    tax_number?: Prisma.SortOrder;
    tax_office?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_registry_no?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    adminAssignments?: Prisma.AdminAssignmentOrderByRelationAggregateInput;
    adminProductOrders?: Prisma.AdminProductOrderOrderByRelationAggregateInput;
    notifications?: Prisma.NotificationOrderByRelationAggregateInput;
    customersOrders?: Prisma.OrderOrderByRelationAggregateInput;
    products?: Prisma.ProductOrderByRelationAggregateInput;
    auth_user?: Prisma.AuthUserOrderByWithRelationInput;
    bankAccounts?: Prisma.SupplierBankAccountOrderByRelationAggregateInput;
    contacts?: Prisma.SupplierContactAddressOrderByRelationAggregateInput;
    documents?: Prisma.SupplierDocumentOrderByWithRelationInput;
    skills?: Prisma.SupplierSkillActivityOrderByRelationAggregateInput;
    status?: Prisma.SupplierStatusOrderByWithRelationInput;
};
export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    supplier_id?: number;
    auth_user_id?: string;
    tax_number?: string;
    AND?: Prisma.SupplierWhereInput | Prisma.SupplierWhereInput[];
    OR?: Prisma.SupplierWhereInput[];
    NOT?: Prisma.SupplierWhereInput | Prisma.SupplierWhereInput[];
    legal_name?: Prisma.StringFilter<"Supplier"> | string;
    company_type?: Prisma.EnumCompanyTypeFilter<"Supplier"> | $Enums.CompanyType;
    tax_office?: Prisma.StringNullableFilter<"Supplier"> | string | null;
    trade_registry_no?: Prisma.StringNullableFilter<"Supplier"> | string | null;
    is_active?: Prisma.BoolFilter<"Supplier"> | boolean;
    created_at?: Prisma.DateTimeFilter<"Supplier"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Supplier"> | Date | string;
    adminAssignments?: Prisma.AdminAssignmentListRelationFilter;
    adminProductOrders?: Prisma.AdminProductOrderListRelationFilter;
    notifications?: Prisma.NotificationListRelationFilter;
    customersOrders?: Prisma.OrderListRelationFilter;
    products?: Prisma.ProductListRelationFilter;
    auth_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
    bankAccounts?: Prisma.SupplierBankAccountListRelationFilter;
    contacts?: Prisma.SupplierContactAddressListRelationFilter;
    documents?: Prisma.XOR<Prisma.SupplierDocumentNullableScalarRelationFilter, Prisma.SupplierDocumentWhereInput> | null;
    skills?: Prisma.SupplierSkillActivityListRelationFilter;
    status?: Prisma.XOR<Prisma.SupplierStatusNullableScalarRelationFilter, Prisma.SupplierStatusWhereInput> | null;
}, "supplier_id" | "auth_user_id" | "tax_number">;
export type SupplierOrderByWithAggregationInput = {
    supplier_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    company_type?: Prisma.SortOrder;
    tax_number?: Prisma.SortOrder;
    tax_office?: Prisma.SortOrderInput | Prisma.SortOrder;
    trade_registry_no?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.SupplierCountOrderByAggregateInput;
    _avg?: Prisma.SupplierAvgOrderByAggregateInput;
    _max?: Prisma.SupplierMaxOrderByAggregateInput;
    _min?: Prisma.SupplierMinOrderByAggregateInput;
    _sum?: Prisma.SupplierSumOrderByAggregateInput;
};
export type SupplierScalarWhereWithAggregatesInput = {
    AND?: Prisma.SupplierScalarWhereWithAggregatesInput | Prisma.SupplierScalarWhereWithAggregatesInput[];
    OR?: Prisma.SupplierScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SupplierScalarWhereWithAggregatesInput | Prisma.SupplierScalarWhereWithAggregatesInput[];
    supplier_id?: Prisma.IntWithAggregatesFilter<"Supplier"> | number;
    auth_user_id?: Prisma.UuidWithAggregatesFilter<"Supplier"> | string;
    legal_name?: Prisma.StringWithAggregatesFilter<"Supplier"> | string;
    company_type?: Prisma.EnumCompanyTypeWithAggregatesFilter<"Supplier"> | $Enums.CompanyType;
    tax_number?: Prisma.StringWithAggregatesFilter<"Supplier"> | string;
    tax_office?: Prisma.StringNullableWithAggregatesFilter<"Supplier"> | string | null;
    trade_registry_no?: Prisma.StringNullableWithAggregatesFilter<"Supplier"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"Supplier"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Supplier"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Supplier"> | Date | string;
};
export type SupplierCreateInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierUpdateInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateManyInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type SupplierUpdateManyMutationInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierUncheckedUpdateManyInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SupplierNullableScalarRelationFilter = {
    is?: Prisma.SupplierWhereInput | null;
    isNot?: Prisma.SupplierWhereInput | null;
};
export type SupplierCountOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    company_type?: Prisma.SortOrder;
    tax_number?: Prisma.SortOrder;
    tax_office?: Prisma.SortOrder;
    trade_registry_no?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierAvgOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type SupplierMaxOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    company_type?: Prisma.SortOrder;
    tax_number?: Prisma.SortOrder;
    tax_office?: Prisma.SortOrder;
    trade_registry_no?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierMinOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    legal_name?: Prisma.SortOrder;
    company_type?: Prisma.SortOrder;
    tax_number?: Prisma.SortOrder;
    tax_office?: Prisma.SortOrder;
    trade_registry_no?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type SupplierSumOrderByAggregateInput = {
    supplier_id?: Prisma.SortOrder;
};
export type SupplierScalarRelationFilter = {
    is?: Prisma.SupplierWhereInput;
    isNot?: Prisma.SupplierWhereInput;
};
export type SupplierCreateNestedOneWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAuth_userInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUncheckedCreateNestedOneWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAuth_userInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAuth_userInput;
    upsert?: Prisma.SupplierUpsertWithoutAuth_userInput;
    disconnect?: Prisma.SupplierWhereInput | boolean;
    delete?: Prisma.SupplierWhereInput | boolean;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutAuth_userInput, Prisma.SupplierUpdateWithoutAuth_userInput>, Prisma.SupplierUncheckedUpdateWithoutAuth_userInput>;
};
export type SupplierUncheckedUpdateOneWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAuth_userInput;
    upsert?: Prisma.SupplierUpsertWithoutAuth_userInput;
    disconnect?: Prisma.SupplierWhereInput | boolean;
    delete?: Prisma.SupplierWhereInput | boolean;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutAuth_userInput, Prisma.SupplierUpdateWithoutAuth_userInput>, Prisma.SupplierUncheckedUpdateWithoutAuth_userInput>;
};
export type EnumCompanyTypeFieldUpdateOperationsInput = {
    set?: $Enums.CompanyType;
};
export type SupplierCreateNestedOneWithoutStatusInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutStatusInput, Prisma.SupplierUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutStatusInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutStatusNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutStatusInput, Prisma.SupplierUncheckedCreateWithoutStatusInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutStatusInput;
    upsert?: Prisma.SupplierUpsertWithoutStatusInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutStatusInput, Prisma.SupplierUpdateWithoutStatusInput>, Prisma.SupplierUncheckedUpdateWithoutStatusInput>;
};
export type SupplierCreateNestedOneWithoutDocumentsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutDocumentsInput, Prisma.SupplierUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutDocumentsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutDocumentsInput, Prisma.SupplierUncheckedCreateWithoutDocumentsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutDocumentsInput;
    upsert?: Prisma.SupplierUpsertWithoutDocumentsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutDocumentsInput, Prisma.SupplierUpdateWithoutDocumentsInput>, Prisma.SupplierUncheckedUpdateWithoutDocumentsInput>;
};
export type SupplierCreateNestedOneWithoutBankAccountsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutBankAccountsInput, Prisma.SupplierUncheckedCreateWithoutBankAccountsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutBankAccountsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutBankAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutBankAccountsInput, Prisma.SupplierUncheckedCreateWithoutBankAccountsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutBankAccountsInput;
    upsert?: Prisma.SupplierUpsertWithoutBankAccountsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutBankAccountsInput, Prisma.SupplierUpdateWithoutBankAccountsInput>, Prisma.SupplierUncheckedUpdateWithoutBankAccountsInput>;
};
export type SupplierCreateNestedOneWithoutContactsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutContactsInput, Prisma.SupplierUncheckedCreateWithoutContactsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutContactsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutContactsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutContactsInput, Prisma.SupplierUncheckedCreateWithoutContactsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutContactsInput;
    upsert?: Prisma.SupplierUpsertWithoutContactsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutContactsInput, Prisma.SupplierUpdateWithoutContactsInput>, Prisma.SupplierUncheckedUpdateWithoutContactsInput>;
};
export type SupplierCreateNestedOneWithoutSkillsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutSkillsInput, Prisma.SupplierUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutSkillsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutSkillsInput, Prisma.SupplierUncheckedCreateWithoutSkillsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutSkillsInput;
    upsert?: Prisma.SupplierUpsertWithoutSkillsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutSkillsInput, Prisma.SupplierUpdateWithoutSkillsInput>, Prisma.SupplierUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierCreateNestedOneWithoutAdminAssignmentsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedCreateWithoutAdminAssignmentsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAdminAssignmentsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutAdminAssignmentsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedCreateWithoutAdminAssignmentsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAdminAssignmentsInput;
    upsert?: Prisma.SupplierUpsertWithoutAdminAssignmentsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutAdminAssignmentsInput, Prisma.SupplierUpdateWithoutAdminAssignmentsInput>, Prisma.SupplierUncheckedUpdateWithoutAdminAssignmentsInput>;
};
export type SupplierCreateNestedOneWithoutProductsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutProductsInput, Prisma.SupplierUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutProductsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutProductsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutProductsInput, Prisma.SupplierUncheckedCreateWithoutProductsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutProductsInput;
    upsert?: Prisma.SupplierUpsertWithoutProductsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutProductsInput, Prisma.SupplierUpdateWithoutProductsInput>, Prisma.SupplierUncheckedUpdateWithoutProductsInput>;
};
export type SupplierCreateNestedOneWithoutCustomersOrdersInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedCreateWithoutCustomersOrdersInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutCustomersOrdersInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneWithoutCustomersOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedCreateWithoutCustomersOrdersInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutCustomersOrdersInput;
    upsert?: Prisma.SupplierUpsertWithoutCustomersOrdersInput;
    disconnect?: Prisma.SupplierWhereInput | boolean;
    delete?: Prisma.SupplierWhereInput | boolean;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutCustomersOrdersInput, Prisma.SupplierUpdateWithoutCustomersOrdersInput>, Prisma.SupplierUncheckedUpdateWithoutCustomersOrdersInput>;
};
export type SupplierCreateNestedOneWithoutAdminProductOrdersInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedCreateWithoutAdminProductOrdersInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAdminProductOrdersInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneRequiredWithoutAdminProductOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedCreateWithoutAdminProductOrdersInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutAdminProductOrdersInput;
    upsert?: Prisma.SupplierUpsertWithoutAdminProductOrdersInput;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutAdminProductOrdersInput, Prisma.SupplierUpdateWithoutAdminProductOrdersInput>, Prisma.SupplierUncheckedUpdateWithoutAdminProductOrdersInput>;
};
export type SupplierCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutNotificationsInput, Prisma.SupplierUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.SupplierWhereUniqueInput;
};
export type SupplierUpdateOneWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.SupplierCreateWithoutNotificationsInput, Prisma.SupplierUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.SupplierCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.SupplierUpsertWithoutNotificationsInput;
    disconnect?: Prisma.SupplierWhereInput | boolean;
    delete?: Prisma.SupplierWhereInput | boolean;
    connect?: Prisma.SupplierWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SupplierUpdateToOneWithWhereWithoutNotificationsInput, Prisma.SupplierUpdateWithoutNotificationsInput>, Prisma.SupplierUncheckedUpdateWithoutNotificationsInput>;
};
export type SupplierCreateWithoutAuth_userInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutAuth_userInput = {
    supplier_id?: number;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutAuth_userInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
};
export type SupplierUpsertWithoutAuth_userInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutAuth_userInput, Prisma.SupplierUncheckedUpdateWithoutAuth_userInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAuth_userInput, Prisma.SupplierUncheckedCreateWithoutAuth_userInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutAuth_userInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutAuth_userInput, Prisma.SupplierUncheckedUpdateWithoutAuth_userInput>;
};
export type SupplierUpdateWithoutAuth_userInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutAuth_userInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutStatusInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutStatusInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutStatusInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutStatusInput, Prisma.SupplierUncheckedCreateWithoutStatusInput>;
};
export type SupplierUpsertWithoutStatusInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutStatusInput, Prisma.SupplierUncheckedUpdateWithoutStatusInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutStatusInput, Prisma.SupplierUncheckedCreateWithoutStatusInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutStatusInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutStatusInput, Prisma.SupplierUncheckedUpdateWithoutStatusInput>;
};
export type SupplierUpdateWithoutStatusInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutStatusInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutDocumentsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutDocumentsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutDocumentsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutDocumentsInput, Prisma.SupplierUncheckedCreateWithoutDocumentsInput>;
};
export type SupplierUpsertWithoutDocumentsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutDocumentsInput, Prisma.SupplierUncheckedUpdateWithoutDocumentsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutDocumentsInput, Prisma.SupplierUncheckedCreateWithoutDocumentsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutDocumentsInput, Prisma.SupplierUncheckedUpdateWithoutDocumentsInput>;
};
export type SupplierUpdateWithoutDocumentsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutDocumentsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutBankAccountsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutBankAccountsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutBankAccountsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutBankAccountsInput, Prisma.SupplierUncheckedCreateWithoutBankAccountsInput>;
};
export type SupplierUpsertWithoutBankAccountsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutBankAccountsInput, Prisma.SupplierUncheckedUpdateWithoutBankAccountsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutBankAccountsInput, Prisma.SupplierUncheckedCreateWithoutBankAccountsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutBankAccountsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutBankAccountsInput, Prisma.SupplierUncheckedUpdateWithoutBankAccountsInput>;
};
export type SupplierUpdateWithoutBankAccountsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutBankAccountsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutContactsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutContactsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutContactsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutContactsInput, Prisma.SupplierUncheckedCreateWithoutContactsInput>;
};
export type SupplierUpsertWithoutContactsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutContactsInput, Prisma.SupplierUncheckedUpdateWithoutContactsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutContactsInput, Prisma.SupplierUncheckedCreateWithoutContactsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutContactsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutContactsInput, Prisma.SupplierUncheckedUpdateWithoutContactsInput>;
};
export type SupplierUpdateWithoutContactsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutContactsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutSkillsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutSkillsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutSkillsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutSkillsInput, Prisma.SupplierUncheckedCreateWithoutSkillsInput>;
};
export type SupplierUpsertWithoutSkillsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutSkillsInput, Prisma.SupplierUncheckedUpdateWithoutSkillsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutSkillsInput, Prisma.SupplierUncheckedCreateWithoutSkillsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutSkillsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutSkillsInput, Prisma.SupplierUncheckedUpdateWithoutSkillsInput>;
};
export type SupplierUpdateWithoutSkillsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutSkillsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutAdminAssignmentsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutAdminAssignmentsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutAdminAssignmentsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedCreateWithoutAdminAssignmentsInput>;
};
export type SupplierUpsertWithoutAdminAssignmentsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedUpdateWithoutAdminAssignmentsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedCreateWithoutAdminAssignmentsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutAdminAssignmentsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutAdminAssignmentsInput, Prisma.SupplierUncheckedUpdateWithoutAdminAssignmentsInput>;
};
export type SupplierUpdateWithoutAdminAssignmentsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutAdminAssignmentsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutProductsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutProductsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutProductsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutProductsInput, Prisma.SupplierUncheckedCreateWithoutProductsInput>;
};
export type SupplierUpsertWithoutProductsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutProductsInput, Prisma.SupplierUncheckedUpdateWithoutProductsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutProductsInput, Prisma.SupplierUncheckedCreateWithoutProductsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutProductsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutProductsInput, Prisma.SupplierUncheckedUpdateWithoutProductsInput>;
};
export type SupplierUpdateWithoutProductsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutProductsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutCustomersOrdersInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutCustomersOrdersInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutCustomersOrdersInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedCreateWithoutCustomersOrdersInput>;
};
export type SupplierUpsertWithoutCustomersOrdersInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedUpdateWithoutCustomersOrdersInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedCreateWithoutCustomersOrdersInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutCustomersOrdersInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutCustomersOrdersInput, Prisma.SupplierUncheckedUpdateWithoutCustomersOrdersInput>;
};
export type SupplierUpdateWithoutCustomersOrdersInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutCustomersOrdersInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutAdminProductOrdersInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutAdminProductOrdersInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    notifications?: Prisma.NotificationUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutAdminProductOrdersInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedCreateWithoutAdminProductOrdersInput>;
};
export type SupplierUpsertWithoutAdminProductOrdersInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedUpdateWithoutAdminProductOrdersInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedCreateWithoutAdminProductOrdersInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutAdminProductOrdersInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutAdminProductOrdersInput, Prisma.SupplierUncheckedUpdateWithoutAdminProductOrdersInput>;
};
export type SupplierUpdateWithoutAdminProductOrdersInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutAdminProductOrdersInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    notifications?: Prisma.NotificationUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
export type SupplierCreateWithoutNotificationsInput = {
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductCreateNestedManyWithoutSupplierInput;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutSuppliersInput;
    bankAccounts?: Prisma.SupplierBankAccountCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusCreateNestedOneWithoutSupplierInput;
};
export type SupplierUncheckedCreateWithoutNotificationsInput = {
    supplier_id?: number;
    auth_user_id: string;
    legal_name: string;
    company_type: $Enums.CompanyType;
    tax_number: string;
    tax_office?: string | null;
    trade_registry_no?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedCreateNestedManyWithoutSupplierInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedCreateNestedManyWithoutSupplierInput;
    customersOrders?: Prisma.OrderUncheckedCreateNestedManyWithoutSupplierInput;
    products?: Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedCreateNestedManyWithoutSupplierInput;
    contacts?: Prisma.SupplierContactAddressUncheckedCreateNestedManyWithoutSupplierInput;
    documents?: Prisma.SupplierDocumentUncheckedCreateNestedOneWithoutSupplierInput;
    skills?: Prisma.SupplierSkillActivityUncheckedCreateNestedManyWithoutSupplierInput;
    status?: Prisma.SupplierStatusUncheckedCreateNestedOneWithoutSupplierInput;
};
export type SupplierCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.SupplierWhereUniqueInput;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutNotificationsInput, Prisma.SupplierUncheckedCreateWithoutNotificationsInput>;
};
export type SupplierUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.SupplierUpdateWithoutNotificationsInput, Prisma.SupplierUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.SupplierCreateWithoutNotificationsInput, Prisma.SupplierUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.SupplierWhereInput;
};
export type SupplierUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.SupplierWhereInput;
    data: Prisma.XOR<Prisma.SupplierUpdateWithoutNotificationsInput, Prisma.SupplierUncheckedUpdateWithoutNotificationsInput>;
};
export type SupplierUpdateWithoutNotificationsInput = {
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUpdateManyWithoutSupplierNestedInput;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutSuppliersNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUpdateOneWithoutSupplierNestedInput;
};
export type SupplierUncheckedUpdateWithoutNotificationsInput = {
    supplier_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    legal_name?: Prisma.StringFieldUpdateOperationsInput | string;
    company_type?: Prisma.EnumCompanyTypeFieldUpdateOperationsInput | $Enums.CompanyType;
    tax_number?: Prisma.StringFieldUpdateOperationsInput | string;
    tax_office?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trade_registry_no?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    adminAssignments?: Prisma.AdminAssignmentUncheckedUpdateManyWithoutSupplierNestedInput;
    adminProductOrders?: Prisma.AdminProductOrderUncheckedUpdateManyWithoutSupplierNestedInput;
    customersOrders?: Prisma.OrderUncheckedUpdateManyWithoutSupplierNestedInput;
    products?: Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput;
    bankAccounts?: Prisma.SupplierBankAccountUncheckedUpdateManyWithoutSupplierNestedInput;
    contacts?: Prisma.SupplierContactAddressUncheckedUpdateManyWithoutSupplierNestedInput;
    documents?: Prisma.SupplierDocumentUncheckedUpdateOneWithoutSupplierNestedInput;
    skills?: Prisma.SupplierSkillActivityUncheckedUpdateManyWithoutSupplierNestedInput;
    status?: Prisma.SupplierStatusUncheckedUpdateOneWithoutSupplierNestedInput;
};
/**
 * Count Type SupplierCountOutputType
 */
export type SupplierCountOutputType = {
    adminAssignments: number;
    adminProductOrders: number;
    notifications: number;
    customersOrders: number;
    products: number;
    bankAccounts: number;
    contacts: number;
    skills: number;
};
export type SupplierCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminAssignments?: boolean | SupplierCountOutputTypeCountAdminAssignmentsArgs;
    adminProductOrders?: boolean | SupplierCountOutputTypeCountAdminProductOrdersArgs;
    notifications?: boolean | SupplierCountOutputTypeCountNotificationsArgs;
    customersOrders?: boolean | SupplierCountOutputTypeCountCustomersOrdersArgs;
    products?: boolean | SupplierCountOutputTypeCountProductsArgs;
    bankAccounts?: boolean | SupplierCountOutputTypeCountBankAccountsArgs;
    contacts?: boolean | SupplierCountOutputTypeCountContactsArgs;
    skills?: boolean | SupplierCountOutputTypeCountSkillsArgs;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: Prisma.SupplierCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountAdminAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminAssignmentWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountAdminProductOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AdminProductOrderWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.NotificationWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountCustomersOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountProductsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProductWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountBankAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierBankAccountWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountContactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierContactAddressWhereInput;
};
/**
 * SupplierCountOutputType without action
 */
export type SupplierCountOutputTypeCountSkillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SupplierSkillActivityWhereInput;
};
export type SupplierSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    auth_user_id?: boolean;
    legal_name?: boolean;
    company_type?: boolean;
    tax_number?: boolean;
    tax_office?: boolean;
    trade_registry_no?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    adminAssignments?: boolean | Prisma.Supplier$adminAssignmentsArgs<ExtArgs>;
    adminProductOrders?: boolean | Prisma.Supplier$adminProductOrdersArgs<ExtArgs>;
    notifications?: boolean | Prisma.Supplier$notificationsArgs<ExtArgs>;
    customersOrders?: boolean | Prisma.Supplier$customersOrdersArgs<ExtArgs>;
    products?: boolean | Prisma.Supplier$productsArgs<ExtArgs>;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    bankAccounts?: boolean | Prisma.Supplier$bankAccountsArgs<ExtArgs>;
    contacts?: boolean | Prisma.Supplier$contactsArgs<ExtArgs>;
    documents?: boolean | Prisma.Supplier$documentsArgs<ExtArgs>;
    skills?: boolean | Prisma.Supplier$skillsArgs<ExtArgs>;
    status?: boolean | Prisma.Supplier$statusArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier"]>;
export type SupplierSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    auth_user_id?: boolean;
    legal_name?: boolean;
    company_type?: boolean;
    tax_number?: boolean;
    tax_office?: boolean;
    trade_registry_no?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier"]>;
export type SupplierSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    supplier_id?: boolean;
    auth_user_id?: boolean;
    legal_name?: boolean;
    company_type?: boolean;
    tax_number?: boolean;
    tax_office?: boolean;
    trade_registry_no?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["supplier"]>;
export type SupplierSelectScalar = {
    supplier_id?: boolean;
    auth_user_id?: boolean;
    legal_name?: boolean;
    company_type?: boolean;
    tax_number?: boolean;
    tax_office?: boolean;
    trade_registry_no?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type SupplierOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"supplier_id" | "auth_user_id" | "legal_name" | "company_type" | "tax_number" | "tax_office" | "trade_registry_no" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["supplier"]>;
export type SupplierInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    adminAssignments?: boolean | Prisma.Supplier$adminAssignmentsArgs<ExtArgs>;
    adminProductOrders?: boolean | Prisma.Supplier$adminProductOrdersArgs<ExtArgs>;
    notifications?: boolean | Prisma.Supplier$notificationsArgs<ExtArgs>;
    customersOrders?: boolean | Prisma.Supplier$customersOrdersArgs<ExtArgs>;
    products?: boolean | Prisma.Supplier$productsArgs<ExtArgs>;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
    bankAccounts?: boolean | Prisma.Supplier$bankAccountsArgs<ExtArgs>;
    contacts?: boolean | Prisma.Supplier$contactsArgs<ExtArgs>;
    documents?: boolean | Prisma.Supplier$documentsArgs<ExtArgs>;
    skills?: boolean | Prisma.Supplier$skillsArgs<ExtArgs>;
    status?: boolean | Prisma.Supplier$statusArgs<ExtArgs>;
    _count?: boolean | Prisma.SupplierCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SupplierIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
};
export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
};
export type $SupplierPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Supplier";
    objects: {
        adminAssignments: Prisma.$AdminAssignmentPayload<ExtArgs>[];
        adminProductOrders: Prisma.$AdminProductOrderPayload<ExtArgs>[];
        notifications: Prisma.$NotificationPayload<ExtArgs>[];
        customersOrders: Prisma.$OrderPayload<ExtArgs>[];
        products: Prisma.$ProductPayload<ExtArgs>[];
        auth_user: Prisma.$AuthUserPayload<ExtArgs>;
        bankAccounts: Prisma.$SupplierBankAccountPayload<ExtArgs>[];
        contacts: Prisma.$SupplierContactAddressPayload<ExtArgs>[];
        documents: Prisma.$SupplierDocumentPayload<ExtArgs> | null;
        skills: Prisma.$SupplierSkillActivityPayload<ExtArgs>[];
        status: Prisma.$SupplierStatusPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        supplier_id: number;
        auth_user_id: string;
        legal_name: string;
        company_type: $Enums.CompanyType;
        tax_number: string;
        tax_office: string | null;
        trade_registry_no: string | null;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["supplier"]>;
    composites: {};
};
export type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SupplierPayload, S>;
export type SupplierCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SupplierCountAggregateInputType | true;
};
export interface SupplierDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Supplier'];
        meta: {
            name: 'Supplier';
        };
    };
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: Prisma.SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: Prisma.SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     *
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     *
     * // Only select the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.findMany({ select: { supplier_id: true } })
     *
     */
    findMany<T extends SupplierFindManyArgs>(args?: Prisma.SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     *
     */
    create<T extends SupplierCreateArgs>(args: Prisma.SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SupplierCreateManyArgs>(args?: Prisma.SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Suppliers and only return the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.createManyAndReturn({
     *   select: { supplier_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     *
     */
    delete<T extends SupplierDeleteArgs>(args: Prisma.SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SupplierUpdateArgs>(args: Prisma.SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: Prisma.SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: Prisma.SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Suppliers and only return the `supplier_id`
     * const supplierWithSupplier_idOnly = await prisma.supplier.updateManyAndReturn({
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
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: Prisma.SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma.Prisma__SupplierClient<runtime.Types.Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(args?: Prisma.Subset<T, SupplierCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SupplierCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Prisma.Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>;
    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SupplierGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SupplierGroupByArgs['orderBy'];
    } : {
        orderBy?: SupplierGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Supplier model
     */
    readonly fields: SupplierFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Supplier.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    adminAssignments<T extends Prisma.Supplier$adminAssignmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$adminAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    adminProductOrders<T extends Prisma.Supplier$adminProductOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$adminProductOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AdminProductOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.Supplier$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    customersOrders<T extends Prisma.Supplier$customersOrdersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$customersOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    products<T extends Prisma.Supplier$productsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$productsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    auth_user<T extends Prisma.AuthUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bankAccounts<T extends Prisma.Supplier$bankAccountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$bankAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierBankAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    contacts<T extends Prisma.Supplier$contactsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierContactAddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    documents<T extends Prisma.Supplier$documentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$documentsArgs<ExtArgs>>): Prisma.Prisma__SupplierDocumentClient<runtime.Types.Result.GetResult<Prisma.$SupplierDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    skills<T extends Prisma.Supplier$skillsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SupplierSkillActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    status<T extends Prisma.Supplier$statusArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Supplier$statusArgs<ExtArgs>>): Prisma.Prisma__SupplierStatusClient<runtime.Types.Result.GetResult<Prisma.$SupplierStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Supplier model
 */
export interface SupplierFieldRefs {
    readonly supplier_id: Prisma.FieldRef<"Supplier", 'Int'>;
    readonly auth_user_id: Prisma.FieldRef<"Supplier", 'String'>;
    readonly legal_name: Prisma.FieldRef<"Supplier", 'String'>;
    readonly company_type: Prisma.FieldRef<"Supplier", 'CompanyType'>;
    readonly tax_number: Prisma.FieldRef<"Supplier", 'String'>;
    readonly tax_office: Prisma.FieldRef<"Supplier", 'String'>;
    readonly trade_registry_no: Prisma.FieldRef<"Supplier", 'String'>;
    readonly is_active: Prisma.FieldRef<"Supplier", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"Supplier", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Supplier", 'DateTime'>;
}
/**
 * Supplier findUnique
 */
export type SupplierFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter, which Supplier to fetch.
     */
    where: Prisma.SupplierWhereUniqueInput;
};
/**
 * Supplier findUniqueOrThrow
 */
export type SupplierFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter, which Supplier to fetch.
     */
    where: Prisma.SupplierWhereUniqueInput;
};
/**
 * Supplier findFirst
 */
export type SupplierFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter, which Supplier to fetch.
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SupplierOrderByWithRelationInput | Prisma.SupplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suppliers.
     */
    cursor?: Prisma.SupplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Prisma.SupplierScalarFieldEnum | Prisma.SupplierScalarFieldEnum[];
};
/**
 * Supplier findFirstOrThrow
 */
export type SupplierFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter, which Supplier to fetch.
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SupplierOrderByWithRelationInput | Prisma.SupplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Suppliers.
     */
    cursor?: Prisma.SupplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Suppliers.
     */
    distinct?: Prisma.SupplierScalarFieldEnum | Prisma.SupplierScalarFieldEnum[];
};
/**
 * Supplier findMany
 */
export type SupplierFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: Prisma.SupplierOrderByWithRelationInput | Prisma.SupplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Suppliers.
     */
    cursor?: Prisma.SupplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Suppliers.
     */
    skip?: number;
    distinct?: Prisma.SupplierScalarFieldEnum | Prisma.SupplierScalarFieldEnum[];
};
/**
 * Supplier create
 */
export type SupplierCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * The data needed to create a Supplier.
     */
    data: Prisma.XOR<Prisma.SupplierCreateInput, Prisma.SupplierUncheckedCreateInput>;
};
/**
 * Supplier createMany
 */
export type SupplierCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: Prisma.SupplierCreateManyInput | Prisma.SupplierCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Supplier createManyAndReturn
 */
export type SupplierCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * The data used to create many Suppliers.
     */
    data: Prisma.SupplierCreateManyInput | Prisma.SupplierCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Supplier update
 */
export type SupplierUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * The data needed to update a Supplier.
     */
    data: Prisma.XOR<Prisma.SupplierUpdateInput, Prisma.SupplierUncheckedUpdateInput>;
    /**
     * Choose, which Supplier to update.
     */
    where: Prisma.SupplierWhereUniqueInput;
};
/**
 * Supplier updateMany
 */
export type SupplierUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: Prisma.XOR<Prisma.SupplierUpdateManyMutationInput, Prisma.SupplierUncheckedUpdateManyInput>;
    /**
     * Filter which Suppliers to update
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number;
};
/**
 * Supplier updateManyAndReturn
 */
export type SupplierUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * The data used to update Suppliers.
     */
    data: Prisma.XOR<Prisma.SupplierUpdateManyMutationInput, Prisma.SupplierUncheckedUpdateManyInput>;
    /**
     * Filter which Suppliers to update
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Supplier upsert
 */
export type SupplierUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: Prisma.SupplierWhereUniqueInput;
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: Prisma.XOR<Prisma.SupplierCreateInput, Prisma.SupplierUncheckedCreateInput>;
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SupplierUpdateInput, Prisma.SupplierUncheckedUpdateInput>;
};
/**
 * Supplier delete
 */
export type SupplierDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
    /**
     * Filter which Supplier to delete.
     */
    where: Prisma.SupplierWhereUniqueInput;
};
/**
 * Supplier deleteMany
 */
export type SupplierDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: Prisma.SupplierWhereInput;
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number;
};
/**
 * Supplier.adminAssignments
 */
export type Supplier$adminAssignmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminAssignment
     */
    select?: Prisma.AdminAssignmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminAssignment
     */
    omit?: Prisma.AdminAssignmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminAssignmentInclude<ExtArgs> | null;
    where?: Prisma.AdminAssignmentWhereInput;
    orderBy?: Prisma.AdminAssignmentOrderByWithRelationInput | Prisma.AdminAssignmentOrderByWithRelationInput[];
    cursor?: Prisma.AdminAssignmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminAssignmentScalarFieldEnum | Prisma.AdminAssignmentScalarFieldEnum[];
};
/**
 * Supplier.adminProductOrders
 */
export type Supplier$adminProductOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminProductOrder
     */
    select?: Prisma.AdminProductOrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AdminProductOrder
     */
    omit?: Prisma.AdminProductOrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AdminProductOrderInclude<ExtArgs> | null;
    where?: Prisma.AdminProductOrderWhereInput;
    orderBy?: Prisma.AdminProductOrderOrderByWithRelationInput | Prisma.AdminProductOrderOrderByWithRelationInput[];
    cursor?: Prisma.AdminProductOrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminProductOrderScalarFieldEnum | Prisma.AdminProductOrderScalarFieldEnum[];
};
/**
 * Supplier.notifications
 */
export type Supplier$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: Prisma.NotificationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Notification
     */
    omit?: Prisma.NotificationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.NotificationInclude<ExtArgs> | null;
    where?: Prisma.NotificationWhereInput;
    orderBy?: Prisma.NotificationOrderByWithRelationInput | Prisma.NotificationOrderByWithRelationInput[];
    cursor?: Prisma.NotificationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationScalarFieldEnum | Prisma.NotificationScalarFieldEnum[];
};
/**
 * Supplier.customersOrders
 */
export type Supplier$customersOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
/**
 * Supplier.products
 */
export type Supplier$productsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Supplier.bankAccounts
 */
export type Supplier$bankAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Supplier.contacts
 */
export type Supplier$contactsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierContactAddressWhereInput;
    orderBy?: Prisma.SupplierContactAddressOrderByWithRelationInput | Prisma.SupplierContactAddressOrderByWithRelationInput[];
    cursor?: Prisma.SupplierContactAddressWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SupplierContactAddressScalarFieldEnum | Prisma.SupplierContactAddressScalarFieldEnum[];
};
/**
 * Supplier.documents
 */
export type Supplier$documentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Supplier.skills
 */
export type Supplier$skillsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Supplier.status
 */
export type Supplier$statusArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.SupplierStatusWhereInput;
};
/**
 * Supplier without action
 */
export type SupplierDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: Prisma.SupplierSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Supplier
     */
    omit?: Prisma.SupplierOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SupplierInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Supplier.d.ts.map