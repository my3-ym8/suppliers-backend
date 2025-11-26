import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model AuthToken
 *
 */
export type AuthTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$AuthTokenPayload>;
export type AggregateAuthToken = {
    _count: AuthTokenCountAggregateOutputType | null;
    _avg: AuthTokenAvgAggregateOutputType | null;
    _sum: AuthTokenSumAggregateOutputType | null;
    _min: AuthTokenMinAggregateOutputType | null;
    _max: AuthTokenMaxAggregateOutputType | null;
};
export type AuthTokenAvgAggregateOutputType = {
    token_id: number | null;
};
export type AuthTokenSumAggregateOutputType = {
    token_id: number | null;
};
export type AuthTokenMinAggregateOutputType = {
    token_id: number | null;
    auth_user_id: string | null;
    token_hash: string | null;
    token_type: string | null;
    is_single_use: boolean | null;
    expires_at: Date | null;
    used_at: Date | null;
    created_at: Date | null;
};
export type AuthTokenMaxAggregateOutputType = {
    token_id: number | null;
    auth_user_id: string | null;
    token_hash: string | null;
    token_type: string | null;
    is_single_use: boolean | null;
    expires_at: Date | null;
    used_at: Date | null;
    created_at: Date | null;
};
export type AuthTokenCountAggregateOutputType = {
    token_id: number;
    auth_user_id: number;
    token_hash: number;
    token_type: number;
    is_single_use: number;
    expires_at: number;
    used_at: number;
    created_at: number;
    metadata: number;
    _all: number;
};
export type AuthTokenAvgAggregateInputType = {
    token_id?: true;
};
export type AuthTokenSumAggregateInputType = {
    token_id?: true;
};
export type AuthTokenMinAggregateInputType = {
    token_id?: true;
    auth_user_id?: true;
    token_hash?: true;
    token_type?: true;
    is_single_use?: true;
    expires_at?: true;
    used_at?: true;
    created_at?: true;
};
export type AuthTokenMaxAggregateInputType = {
    token_id?: true;
    auth_user_id?: true;
    token_hash?: true;
    token_type?: true;
    is_single_use?: true;
    expires_at?: true;
    used_at?: true;
    created_at?: true;
};
export type AuthTokenCountAggregateInputType = {
    token_id?: true;
    auth_user_id?: true;
    token_hash?: true;
    token_type?: true;
    is_single_use?: true;
    expires_at?: true;
    used_at?: true;
    created_at?: true;
    metadata?: true;
    _all?: true;
};
export type AuthTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuthToken to aggregate.
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: Prisma.AuthTokenOrderByWithRelationInput | Prisma.AuthTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AuthTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AuthTokens
    **/
    _count?: true | AuthTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AuthTokenAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AuthTokenSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AuthTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AuthTokenMaxAggregateInputType;
};
export type GetAuthTokenAggregateType<T extends AuthTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateAuthToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAuthToken[P]> : Prisma.GetScalarType<T[P], AggregateAuthToken[P]>;
};
export type AuthTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AuthTokenWhereInput;
    orderBy?: Prisma.AuthTokenOrderByWithAggregationInput | Prisma.AuthTokenOrderByWithAggregationInput[];
    by: Prisma.AuthTokenScalarFieldEnum[] | Prisma.AuthTokenScalarFieldEnum;
    having?: Prisma.AuthTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AuthTokenCountAggregateInputType | true;
    _avg?: AuthTokenAvgAggregateInputType;
    _sum?: AuthTokenSumAggregateInputType;
    _min?: AuthTokenMinAggregateInputType;
    _max?: AuthTokenMaxAggregateInputType;
};
export type AuthTokenGroupByOutputType = {
    token_id: number;
    auth_user_id: string;
    token_hash: string;
    token_type: string;
    is_single_use: boolean;
    expires_at: Date;
    used_at: Date | null;
    created_at: Date;
    metadata: runtime.JsonValue | null;
    _count: AuthTokenCountAggregateOutputType | null;
    _avg: AuthTokenAvgAggregateOutputType | null;
    _sum: AuthTokenSumAggregateOutputType | null;
    _min: AuthTokenMinAggregateOutputType | null;
    _max: AuthTokenMaxAggregateOutputType | null;
};
type GetAuthTokenGroupByPayload<T extends AuthTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AuthTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AuthTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AuthTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AuthTokenGroupByOutputType[P]>;
}>>;
export type AuthTokenWhereInput = {
    AND?: Prisma.AuthTokenWhereInput | Prisma.AuthTokenWhereInput[];
    OR?: Prisma.AuthTokenWhereInput[];
    NOT?: Prisma.AuthTokenWhereInput | Prisma.AuthTokenWhereInput[];
    token_id?: Prisma.IntFilter<"AuthToken"> | number;
    auth_user_id?: Prisma.UuidFilter<"AuthToken"> | string;
    token_hash?: Prisma.StringFilter<"AuthToken"> | string;
    token_type?: Prisma.StringFilter<"AuthToken"> | string;
    is_single_use?: Prisma.BoolFilter<"AuthToken"> | boolean;
    expires_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    used_at?: Prisma.DateTimeNullableFilter<"AuthToken"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"AuthToken">;
    auth_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
};
export type AuthTokenOrderByWithRelationInput = {
    token_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    is_single_use?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    auth_user?: Prisma.AuthUserOrderByWithRelationInput;
};
export type AuthTokenWhereUniqueInput = Prisma.AtLeast<{
    token_id?: number;
    token_hash?: string;
    AND?: Prisma.AuthTokenWhereInput | Prisma.AuthTokenWhereInput[];
    OR?: Prisma.AuthTokenWhereInput[];
    NOT?: Prisma.AuthTokenWhereInput | Prisma.AuthTokenWhereInput[];
    auth_user_id?: Prisma.UuidFilter<"AuthToken"> | string;
    token_type?: Prisma.StringFilter<"AuthToken"> | string;
    is_single_use?: Prisma.BoolFilter<"AuthToken"> | boolean;
    expires_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    used_at?: Prisma.DateTimeNullableFilter<"AuthToken"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"AuthToken">;
    auth_user?: Prisma.XOR<Prisma.AuthUserScalarRelationFilter, Prisma.AuthUserWhereInput>;
}, "token_id" | "token_hash">;
export type AuthTokenOrderByWithAggregationInput = {
    token_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    is_single_use?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    used_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AuthTokenCountOrderByAggregateInput;
    _avg?: Prisma.AuthTokenAvgOrderByAggregateInput;
    _max?: Prisma.AuthTokenMaxOrderByAggregateInput;
    _min?: Prisma.AuthTokenMinOrderByAggregateInput;
    _sum?: Prisma.AuthTokenSumOrderByAggregateInput;
};
export type AuthTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.AuthTokenScalarWhereWithAggregatesInput | Prisma.AuthTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.AuthTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AuthTokenScalarWhereWithAggregatesInput | Prisma.AuthTokenScalarWhereWithAggregatesInput[];
    token_id?: Prisma.IntWithAggregatesFilter<"AuthToken"> | number;
    auth_user_id?: Prisma.UuidWithAggregatesFilter<"AuthToken"> | string;
    token_hash?: Prisma.StringWithAggregatesFilter<"AuthToken"> | string;
    token_type?: Prisma.StringWithAggregatesFilter<"AuthToken"> | string;
    is_single_use?: Prisma.BoolWithAggregatesFilter<"AuthToken"> | boolean;
    expires_at?: Prisma.DateTimeWithAggregatesFilter<"AuthToken"> | Date | string;
    used_at?: Prisma.DateTimeNullableWithAggregatesFilter<"AuthToken"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"AuthToken"> | Date | string;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"AuthToken">;
};
export type AuthTokenCreateInput = {
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    auth_user: Prisma.AuthUserCreateNestedOneWithoutTokensInput;
};
export type AuthTokenUncheckedCreateInput = {
    token_id?: number;
    auth_user_id: string;
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUpdateInput = {
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    auth_user?: Prisma.AuthUserUpdateOneRequiredWithoutTokensNestedInput;
};
export type AuthTokenUncheckedUpdateInput = {
    token_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenCreateManyInput = {
    token_id?: number;
    auth_user_id: string;
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUpdateManyMutationInput = {
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUncheckedUpdateManyInput = {
    token_id?: Prisma.IntFieldUpdateOperationsInput | number;
    auth_user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenListRelationFilter = {
    every?: Prisma.AuthTokenWhereInput;
    some?: Prisma.AuthTokenWhereInput;
    none?: Prisma.AuthTokenWhereInput;
};
export type AuthTokenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AuthTokenCountOrderByAggregateInput = {
    token_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    is_single_use?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
};
export type AuthTokenAvgOrderByAggregateInput = {
    token_id?: Prisma.SortOrder;
};
export type AuthTokenMaxOrderByAggregateInput = {
    token_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    is_single_use?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AuthTokenMinOrderByAggregateInput = {
    token_id?: Prisma.SortOrder;
    auth_user_id?: Prisma.SortOrder;
    token_hash?: Prisma.SortOrder;
    token_type?: Prisma.SortOrder;
    is_single_use?: Prisma.SortOrder;
    expires_at?: Prisma.SortOrder;
    used_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type AuthTokenSumOrderByAggregateInput = {
    token_id?: Prisma.SortOrder;
};
export type AuthTokenCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput> | Prisma.AuthTokenCreateWithoutAuth_userInput[] | Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput | Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.AuthTokenCreateManyAuth_userInputEnvelope;
    connect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
};
export type AuthTokenUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput> | Prisma.AuthTokenCreateWithoutAuth_userInput[] | Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput | Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput[];
    createMany?: Prisma.AuthTokenCreateManyAuth_userInputEnvelope;
    connect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
};
export type AuthTokenUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput> | Prisma.AuthTokenCreateWithoutAuth_userInput[] | Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput | Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.AuthTokenUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.AuthTokenUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.AuthTokenCreateManyAuth_userInputEnvelope;
    set?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    disconnect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    delete?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    connect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    update?: Prisma.AuthTokenUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.AuthTokenUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.AuthTokenUpdateManyWithWhereWithoutAuth_userInput | Prisma.AuthTokenUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.AuthTokenScalarWhereInput | Prisma.AuthTokenScalarWhereInput[];
};
export type AuthTokenUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput> | Prisma.AuthTokenCreateWithoutAuth_userInput[] | Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput[];
    connectOrCreate?: Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput | Prisma.AuthTokenCreateOrConnectWithoutAuth_userInput[];
    upsert?: Prisma.AuthTokenUpsertWithWhereUniqueWithoutAuth_userInput | Prisma.AuthTokenUpsertWithWhereUniqueWithoutAuth_userInput[];
    createMany?: Prisma.AuthTokenCreateManyAuth_userInputEnvelope;
    set?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    disconnect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    delete?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    connect?: Prisma.AuthTokenWhereUniqueInput | Prisma.AuthTokenWhereUniqueInput[];
    update?: Prisma.AuthTokenUpdateWithWhereUniqueWithoutAuth_userInput | Prisma.AuthTokenUpdateWithWhereUniqueWithoutAuth_userInput[];
    updateMany?: Prisma.AuthTokenUpdateManyWithWhereWithoutAuth_userInput | Prisma.AuthTokenUpdateManyWithWhereWithoutAuth_userInput[];
    deleteMany?: Prisma.AuthTokenScalarWhereInput | Prisma.AuthTokenScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type AuthTokenCreateWithoutAuth_userInput = {
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUncheckedCreateWithoutAuth_userInput = {
    token_id?: number;
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenCreateOrConnectWithoutAuth_userInput = {
    where: Prisma.AuthTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput>;
};
export type AuthTokenCreateManyAuth_userInputEnvelope = {
    data: Prisma.AuthTokenCreateManyAuth_userInput | Prisma.AuthTokenCreateManyAuth_userInput[];
    skipDuplicates?: boolean;
};
export type AuthTokenUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.AuthTokenWhereUniqueInput;
    update: Prisma.XOR<Prisma.AuthTokenUpdateWithoutAuth_userInput, Prisma.AuthTokenUncheckedUpdateWithoutAuth_userInput>;
    create: Prisma.XOR<Prisma.AuthTokenCreateWithoutAuth_userInput, Prisma.AuthTokenUncheckedCreateWithoutAuth_userInput>;
};
export type AuthTokenUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: Prisma.AuthTokenWhereUniqueInput;
    data: Prisma.XOR<Prisma.AuthTokenUpdateWithoutAuth_userInput, Prisma.AuthTokenUncheckedUpdateWithoutAuth_userInput>;
};
export type AuthTokenUpdateManyWithWhereWithoutAuth_userInput = {
    where: Prisma.AuthTokenScalarWhereInput;
    data: Prisma.XOR<Prisma.AuthTokenUpdateManyMutationInput, Prisma.AuthTokenUncheckedUpdateManyWithoutAuth_userInput>;
};
export type AuthTokenScalarWhereInput = {
    AND?: Prisma.AuthTokenScalarWhereInput | Prisma.AuthTokenScalarWhereInput[];
    OR?: Prisma.AuthTokenScalarWhereInput[];
    NOT?: Prisma.AuthTokenScalarWhereInput | Prisma.AuthTokenScalarWhereInput[];
    token_id?: Prisma.IntFilter<"AuthToken"> | number;
    auth_user_id?: Prisma.UuidFilter<"AuthToken"> | string;
    token_hash?: Prisma.StringFilter<"AuthToken"> | string;
    token_type?: Prisma.StringFilter<"AuthToken"> | string;
    is_single_use?: Prisma.BoolFilter<"AuthToken"> | boolean;
    expires_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    used_at?: Prisma.DateTimeNullableFilter<"AuthToken"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"AuthToken"> | Date | string;
    metadata?: Prisma.JsonNullableFilter<"AuthToken">;
};
export type AuthTokenCreateManyAuth_userInput = {
    token_id?: number;
    token_hash: string;
    token_type?: string;
    is_single_use?: boolean;
    expires_at: Date | string;
    used_at?: Date | string | null;
    created_at?: Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUpdateWithoutAuth_userInput = {
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUncheckedUpdateWithoutAuth_userInput = {
    token_id?: Prisma.IntFieldUpdateOperationsInput | number;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenUncheckedUpdateManyWithoutAuth_userInput = {
    token_id?: Prisma.IntFieldUpdateOperationsInput | number;
    token_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    token_type?: Prisma.StringFieldUpdateOperationsInput | string;
    is_single_use?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    expires_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    used_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
};
export type AuthTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token_id?: boolean;
    auth_user_id?: boolean;
    token_hash?: boolean;
    token_type?: boolean;
    is_single_use?: boolean;
    expires_at?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    metadata?: boolean;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["authToken"]>;
export type AuthTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token_id?: boolean;
    auth_user_id?: boolean;
    token_hash?: boolean;
    token_type?: boolean;
    is_single_use?: boolean;
    expires_at?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    metadata?: boolean;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["authToken"]>;
export type AuthTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    token_id?: boolean;
    auth_user_id?: boolean;
    token_hash?: boolean;
    token_type?: boolean;
    is_single_use?: boolean;
    expires_at?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    metadata?: boolean;
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["authToken"]>;
export type AuthTokenSelectScalar = {
    token_id?: boolean;
    auth_user_id?: boolean;
    token_hash?: boolean;
    token_type?: boolean;
    is_single_use?: boolean;
    expires_at?: boolean;
    used_at?: boolean;
    created_at?: boolean;
    metadata?: boolean;
};
export type AuthTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"token_id" | "auth_user_id" | "token_hash" | "token_type" | "is_single_use" | "expires_at" | "used_at" | "created_at" | "metadata", ExtArgs["result"]["authToken"]>;
export type AuthTokenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
};
export type AuthTokenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
};
export type AuthTokenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    auth_user?: boolean | Prisma.AuthUserDefaultArgs<ExtArgs>;
};
export type $AuthTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AuthToken";
    objects: {
        auth_user: Prisma.$AuthUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        token_id: number;
        auth_user_id: string;
        token_hash: string;
        token_type: string;
        is_single_use: boolean;
        expires_at: Date;
        used_at: Date | null;
        created_at: Date;
        metadata: runtime.JsonValue | null;
    }, ExtArgs["result"]["authToken"]>;
    composites: {};
};
export type AuthTokenGetPayload<S extends boolean | null | undefined | AuthTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload, S>;
export type AuthTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AuthTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AuthTokenCountAggregateInputType | true;
};
export interface AuthTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AuthToken'];
        meta: {
            name: 'AuthToken';
        };
    };
    /**
     * Find zero or one AuthToken that matches the filter.
     * @param {AuthTokenFindUniqueArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, AuthTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one AuthToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthTokenFindUniqueOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AuthTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuthToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, AuthTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first AuthToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindFirstOrThrowArgs} args - Arguments to find a AuthToken
     * @example
     * // Get one AuthToken
     * const authToken = await prisma.authToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AuthTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more AuthTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthTokens
     * const authTokens = await prisma.authToken.findMany()
     *
     * // Get first 10 AuthTokens
     * const authTokens = await prisma.authToken.findMany({ take: 10 })
     *
     * // Only select the `token_id`
     * const authTokenWithToken_idOnly = await prisma.authToken.findMany({ select: { token_id: true } })
     *
     */
    findMany<T extends AuthTokenFindManyArgs>(args?: Prisma.SelectSubset<T, AuthTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a AuthToken.
     * @param {AuthTokenCreateArgs} args - Arguments to create a AuthToken.
     * @example
     * // Create one AuthToken
     * const AuthToken = await prisma.authToken.create({
     *   data: {
     *     // ... data to create a AuthToken
     *   }
     * })
     *
     */
    create<T extends AuthTokenCreateArgs>(args: Prisma.SelectSubset<T, AuthTokenCreateArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many AuthTokens.
     * @param {AuthTokenCreateManyArgs} args - Arguments to create many AuthTokens.
     * @example
     * // Create many AuthTokens
     * const authToken = await prisma.authToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AuthTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, AuthTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many AuthTokens and returns the data saved in the database.
     * @param {AuthTokenCreateManyAndReturnArgs} args - Arguments to create many AuthTokens.
     * @example
     * // Create many AuthTokens
     * const authToken = await prisma.authToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many AuthTokens and only return the `token_id`
     * const authTokenWithToken_idOnly = await prisma.authToken.createManyAndReturn({
     *   select: { token_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AuthTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AuthTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a AuthToken.
     * @param {AuthTokenDeleteArgs} args - Arguments to delete one AuthToken.
     * @example
     * // Delete one AuthToken
     * const AuthToken = await prisma.authToken.delete({
     *   where: {
     *     // ... filter to delete one AuthToken
     *   }
     * })
     *
     */
    delete<T extends AuthTokenDeleteArgs>(args: Prisma.SelectSubset<T, AuthTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one AuthToken.
     * @param {AuthTokenUpdateArgs} args - Arguments to update one AuthToken.
     * @example
     * // Update one AuthToken
     * const authToken = await prisma.authToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AuthTokenUpdateArgs>(args: Prisma.SelectSubset<T, AuthTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more AuthTokens.
     * @param {AuthTokenDeleteManyArgs} args - Arguments to filter AuthTokens to delete.
     * @example
     * // Delete a few AuthTokens
     * const { count } = await prisma.authToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AuthTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, AuthTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthTokens
     * const authToken = await prisma.authToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AuthTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, AuthTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more AuthTokens and returns the data updated in the database.
     * @param {AuthTokenUpdateManyAndReturnArgs} args - Arguments to update many AuthTokens.
     * @example
     * // Update many AuthTokens
     * const authToken = await prisma.authToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more AuthTokens and only return the `token_id`
     * const authTokenWithToken_idOnly = await prisma.authToken.updateManyAndReturn({
     *   select: { token_id: true },
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
    updateManyAndReturn<T extends AuthTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AuthTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one AuthToken.
     * @param {AuthTokenUpsertArgs} args - Arguments to update or create a AuthToken.
     * @example
     * // Update or create a AuthToken
     * const authToken = await prisma.authToken.upsert({
     *   create: {
     *     // ... data to create a AuthToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthToken we want to update
     *   }
     * })
     */
    upsert<T extends AuthTokenUpsertArgs>(args: Prisma.SelectSubset<T, AuthTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__AuthTokenClient<runtime.Types.Result.GetResult<Prisma.$AuthTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of AuthTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenCountArgs} args - Arguments to filter AuthTokens to count.
     * @example
     * // Count the number of AuthTokens
     * const count = await prisma.authToken.count({
     *   where: {
     *     // ... the filter for the AuthTokens we want to count
     *   }
     * })
    **/
    count<T extends AuthTokenCountArgs>(args?: Prisma.Subset<T, AuthTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AuthTokenCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AuthTokenAggregateArgs>(args: Prisma.Subset<T, AuthTokenAggregateArgs>): Prisma.PrismaPromise<GetAuthTokenAggregateType<T>>;
    /**
     * Group by AuthToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthTokenGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AuthTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AuthTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: AuthTokenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AuthTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AuthToken model
     */
    readonly fields: AuthTokenFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for AuthToken.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AuthTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    auth_user<T extends Prisma.AuthUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AuthUserClient<runtime.Types.Result.GetResult<Prisma.$AuthUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the AuthToken model
 */
export interface AuthTokenFieldRefs {
    readonly token_id: Prisma.FieldRef<"AuthToken", 'Int'>;
    readonly auth_user_id: Prisma.FieldRef<"AuthToken", 'String'>;
    readonly token_hash: Prisma.FieldRef<"AuthToken", 'String'>;
    readonly token_type: Prisma.FieldRef<"AuthToken", 'String'>;
    readonly is_single_use: Prisma.FieldRef<"AuthToken", 'Boolean'>;
    readonly expires_at: Prisma.FieldRef<"AuthToken", 'DateTime'>;
    readonly used_at: Prisma.FieldRef<"AuthToken", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"AuthToken", 'DateTime'>;
    readonly metadata: Prisma.FieldRef<"AuthToken", 'Json'>;
}
/**
 * AuthToken findUnique
 */
export type AuthTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter, which AuthToken to fetch.
     */
    where: Prisma.AuthTokenWhereUniqueInput;
};
/**
 * AuthToken findUniqueOrThrow
 */
export type AuthTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter, which AuthToken to fetch.
     */
    where: Prisma.AuthTokenWhereUniqueInput;
};
/**
 * AuthToken findFirst
 */
export type AuthTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: Prisma.AuthTokenOrderByWithRelationInput | Prisma.AuthTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuthTokens.
     */
    cursor?: Prisma.AuthTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: Prisma.AuthTokenScalarFieldEnum | Prisma.AuthTokenScalarFieldEnum[];
};
/**
 * AuthToken findFirstOrThrow
 */
export type AuthTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter, which AuthToken to fetch.
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: Prisma.AuthTokenOrderByWithRelationInput | Prisma.AuthTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AuthTokens.
     */
    cursor?: Prisma.AuthTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AuthTokens.
     */
    distinct?: Prisma.AuthTokenScalarFieldEnum | Prisma.AuthTokenScalarFieldEnum[];
};
/**
 * AuthToken findMany
 */
export type AuthTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter, which AuthTokens to fetch.
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AuthTokens to fetch.
     */
    orderBy?: Prisma.AuthTokenOrderByWithRelationInput | Prisma.AuthTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AuthTokens.
     */
    cursor?: Prisma.AuthTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AuthTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AuthTokens.
     */
    skip?: number;
    distinct?: Prisma.AuthTokenScalarFieldEnum | Prisma.AuthTokenScalarFieldEnum[];
};
/**
 * AuthToken create
 */
export type AuthTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a AuthToken.
     */
    data: Prisma.XOR<Prisma.AuthTokenCreateInput, Prisma.AuthTokenUncheckedCreateInput>;
};
/**
 * AuthToken createMany
 */
export type AuthTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthTokens.
     */
    data: Prisma.AuthTokenCreateManyInput | Prisma.AuthTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * AuthToken createManyAndReturn
 */
export type AuthTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many AuthTokens.
     */
    data: Prisma.AuthTokenCreateManyInput | Prisma.AuthTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * AuthToken update
 */
export type AuthTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a AuthToken.
     */
    data: Prisma.XOR<Prisma.AuthTokenUpdateInput, Prisma.AuthTokenUncheckedUpdateInput>;
    /**
     * Choose, which AuthToken to update.
     */
    where: Prisma.AuthTokenWhereUniqueInput;
};
/**
 * AuthToken updateMany
 */
export type AuthTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthTokens.
     */
    data: Prisma.XOR<Prisma.AuthTokenUpdateManyMutationInput, Prisma.AuthTokenUncheckedUpdateManyInput>;
    /**
     * Filter which AuthTokens to update
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * Limit how many AuthTokens to update.
     */
    limit?: number;
};
/**
 * AuthToken updateManyAndReturn
 */
export type AuthTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * The data used to update AuthTokens.
     */
    data: Prisma.XOR<Prisma.AuthTokenUpdateManyMutationInput, Prisma.AuthTokenUncheckedUpdateManyInput>;
    /**
     * Filter which AuthTokens to update
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * Limit how many AuthTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * AuthToken upsert
 */
export type AuthTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the AuthToken to update in case it exists.
     */
    where: Prisma.AuthTokenWhereUniqueInput;
    /**
     * In case the AuthToken found by the `where` argument doesn't exist, create a new AuthToken with this data.
     */
    create: Prisma.XOR<Prisma.AuthTokenCreateInput, Prisma.AuthTokenUncheckedCreateInput>;
    /**
     * In case the AuthToken was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AuthTokenUpdateInput, Prisma.AuthTokenUncheckedUpdateInput>;
};
/**
 * AuthToken delete
 */
export type AuthTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
    /**
     * Filter which AuthToken to delete.
     */
    where: Prisma.AuthTokenWhereUniqueInput;
};
/**
 * AuthToken deleteMany
 */
export type AuthTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which AuthTokens to delete
     */
    where?: Prisma.AuthTokenWhereInput;
    /**
     * Limit how many AuthTokens to delete.
     */
    limit?: number;
};
/**
 * AuthToken without action
 */
export type AuthTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthToken
     */
    select?: Prisma.AuthTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the AuthToken
     */
    omit?: Prisma.AuthTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AuthTokenInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=AuthToken.d.ts.map