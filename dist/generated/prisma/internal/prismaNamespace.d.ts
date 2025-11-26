import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models.ts";
import { type PrismaClient } from "./class.ts";
export type * from '../models.ts';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
/**
 * Prisma Errors
 */
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
/**
 * Re-export of sql-template-tag
 */
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
/**
 * Decimal.js
 */
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
/**
 * Metrics
 */
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
/**
* Extensions
*/
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
/**
 * Prisma Client JS version: 6.19.0
 * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
 */
export declare const prismaVersion: PrismaVersion;
/**
 * Utility Types
 */
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
/**
 * SelectSubset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
 * Additionally, it validates, if both select and include are present. If the case, it errors.
 */
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
/**
 * Subset + Intersection
 * @desc From `T` pick properties that exist in `U` and intersect `K`
 */
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
/**
 * Is T a Record?
 */
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
/**
 * If it's T[], return T
 */
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
/**
 * From ts-toolbelt
 */
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
/** Helper Types for "Merge" **/
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
/** End Helper Types for "Merge" **/
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
/**
 * Convert tuple to union
 */
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
/**
 * Like `Pick`, but additionally can also accept an array of keys
 */
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
/**
 * Exclude all keys with underscores
 */
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly AuthUser: "AuthUser";
    readonly AuthToken: "AuthToken";
    readonly UserProfile: "UserProfile";
    readonly File: "File";
    readonly Supplier: "Supplier";
    readonly SupplierStatus: "SupplierStatus";
    readonly SupplierDocument: "SupplierDocument";
    readonly SupplierBankAccount: "SupplierBankAccount";
    readonly SupplierContactAddress: "SupplierContactAddress";
    readonly SupplierSkillActivity: "SupplierSkillActivity";
    readonly SupplierMainActivity: "SupplierMainActivity";
    readonly SupplierSubActivity: "SupplierSubActivity";
    readonly SupplierBrandMapping: "SupplierBrandMapping";
    readonly SupplierType: "SupplierType";
    readonly ActivityCategory: "ActivityCategory";
    readonly AdminAssignment: "AdminAssignment";
    readonly Product: "Product";
    readonly ProductLike: "ProductLike";
    readonly ProductStatus: "ProductStatus";
    readonly ProductMedia: "ProductMedia";
    readonly Customer: "Customer";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly AdminProductOrder: "AdminProductOrder";
    readonly Notification: "Notification";
    readonly AuditLog: "AuditLog";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "authUser" | "authToken" | "userProfile" | "file" | "supplier" | "supplierStatus" | "supplierDocument" | "supplierBankAccount" | "supplierContactAddress" | "supplierSkillActivity" | "supplierMainActivity" | "supplierSubActivity" | "supplierBrandMapping" | "supplierType" | "activityCategory" | "adminAssignment" | "product" | "productLike" | "productStatus" | "productMedia" | "customer" | "order" | "orderItem" | "adminProductOrder" | "notification" | "auditLog";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        AuthUser: {
            payload: Prisma.$AuthUserPayload<ExtArgs>;
            fields: Prisma.AuthUserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuthUserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuthUserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                findFirst: {
                    args: Prisma.AuthUserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuthUserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                findMany: {
                    args: Prisma.AuthUserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>[];
                };
                create: {
                    args: Prisma.AuthUserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                createMany: {
                    args: Prisma.AuthUserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuthUserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>[];
                };
                delete: {
                    args: Prisma.AuthUserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                update: {
                    args: Prisma.AuthUserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                deleteMany: {
                    args: Prisma.AuthUserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuthUserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuthUserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>[];
                };
                upsert: {
                    args: Prisma.AuthUserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthUserPayload>;
                };
                aggregate: {
                    args: Prisma.AuthUserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuthUser>;
                };
                groupBy: {
                    args: Prisma.AuthUserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthUserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuthUserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthUserCountAggregateOutputType> | number;
                };
            };
        };
        AuthToken: {
            payload: Prisma.$AuthTokenPayload<ExtArgs>;
            fields: Prisma.AuthTokenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuthTokenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuthTokenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                findFirst: {
                    args: Prisma.AuthTokenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuthTokenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                findMany: {
                    args: Prisma.AuthTokenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>[];
                };
                create: {
                    args: Prisma.AuthTokenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                createMany: {
                    args: Prisma.AuthTokenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuthTokenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>[];
                };
                delete: {
                    args: Prisma.AuthTokenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                update: {
                    args: Prisma.AuthTokenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                deleteMany: {
                    args: Prisma.AuthTokenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuthTokenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuthTokenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>[];
                };
                upsert: {
                    args: Prisma.AuthTokenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthTokenPayload>;
                };
                aggregate: {
                    args: Prisma.AuthTokenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuthToken>;
                };
                groupBy: {
                    args: Prisma.AuthTokenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthTokenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuthTokenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthTokenCountAggregateOutputType> | number;
                };
            };
        };
        UserProfile: {
            payload: Prisma.$UserProfilePayload<ExtArgs>;
            fields: Prisma.UserProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                findFirst: {
                    args: Prisma.UserProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                findMany: {
                    args: Prisma.UserProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                create: {
                    args: Prisma.UserProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                createMany: {
                    args: Prisma.UserProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                delete: {
                    args: Prisma.UserProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                update: {
                    args: Prisma.UserProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.UserProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>[];
                };
                upsert: {
                    args: Prisma.UserProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserProfilePayload>;
                };
                aggregate: {
                    args: Prisma.UserProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUserProfile>;
                };
                groupBy: {
                    args: Prisma.UserProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserProfileCountAggregateOutputType> | number;
                };
            };
        };
        File: {
            payload: Prisma.$FilePayload<ExtArgs>;
            fields: Prisma.FileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findFirst: {
                    args: Prisma.FileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                findMany: {
                    args: Prisma.FileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                create: {
                    args: Prisma.FileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                createMany: {
                    args: Prisma.FileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                delete: {
                    args: Prisma.FileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                update: {
                    args: Prisma.FileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                deleteMany: {
                    args: Prisma.FileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
                };
                upsert: {
                    args: Prisma.FileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
                };
                aggregate: {
                    args: Prisma.FileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFile>;
                };
                groupBy: {
                    args: Prisma.FileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FileCountAggregateOutputType> | number;
                };
            };
        };
        Supplier: {
            payload: Prisma.$SupplierPayload<ExtArgs>;
            fields: Prisma.SupplierFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                findMany: {
                    args: Prisma.SupplierFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                create: {
                    args: Prisma.SupplierCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                createMany: {
                    args: Prisma.SupplierCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                delete: {
                    args: Prisma.SupplierDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                update: {
                    args: Prisma.SupplierUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplier>;
                };
                groupBy: {
                    args: Prisma.SupplierGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierCountAggregateOutputType> | number;
                };
            };
        };
        SupplierStatus: {
            payload: Prisma.$SupplierStatusPayload<ExtArgs>;
            fields: Prisma.SupplierStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                findMany: {
                    args: Prisma.SupplierStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>[];
                };
                create: {
                    args: Prisma.SupplierStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                createMany: {
                    args: Prisma.SupplierStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>[];
                };
                delete: {
                    args: Prisma.SupplierStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                update: {
                    args: Prisma.SupplierStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierStatusPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierStatus>;
                };
                groupBy: {
                    args: Prisma.SupplierStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierStatusCountAggregateOutputType> | number;
                };
            };
        };
        SupplierDocument: {
            payload: Prisma.$SupplierDocumentPayload<ExtArgs>;
            fields: Prisma.SupplierDocumentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierDocumentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierDocumentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierDocumentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierDocumentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                findMany: {
                    args: Prisma.SupplierDocumentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>[];
                };
                create: {
                    args: Prisma.SupplierDocumentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                createMany: {
                    args: Prisma.SupplierDocumentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierDocumentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>[];
                };
                delete: {
                    args: Prisma.SupplierDocumentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                update: {
                    args: Prisma.SupplierDocumentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierDocumentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierDocumentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierDocumentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierDocumentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierDocumentPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierDocumentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierDocument>;
                };
                groupBy: {
                    args: Prisma.SupplierDocumentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierDocumentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierDocumentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierDocumentCountAggregateOutputType> | number;
                };
            };
        };
        SupplierBankAccount: {
            payload: Prisma.$SupplierBankAccountPayload<ExtArgs>;
            fields: Prisma.SupplierBankAccountFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierBankAccountFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierBankAccountFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierBankAccountFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierBankAccountFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                findMany: {
                    args: Prisma.SupplierBankAccountFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>[];
                };
                create: {
                    args: Prisma.SupplierBankAccountCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                createMany: {
                    args: Prisma.SupplierBankAccountCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierBankAccountCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>[];
                };
                delete: {
                    args: Prisma.SupplierBankAccountDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                update: {
                    args: Prisma.SupplierBankAccountUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierBankAccountDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierBankAccountUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierBankAccountUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierBankAccountUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBankAccountPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierBankAccountAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierBankAccount>;
                };
                groupBy: {
                    args: Prisma.SupplierBankAccountGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierBankAccountGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierBankAccountCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierBankAccountCountAggregateOutputType> | number;
                };
            };
        };
        SupplierContactAddress: {
            payload: Prisma.$SupplierContactAddressPayload<ExtArgs>;
            fields: Prisma.SupplierContactAddressFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierContactAddressFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierContactAddressFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierContactAddressFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierContactAddressFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                findMany: {
                    args: Prisma.SupplierContactAddressFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>[];
                };
                create: {
                    args: Prisma.SupplierContactAddressCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                createMany: {
                    args: Prisma.SupplierContactAddressCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierContactAddressCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>[];
                };
                delete: {
                    args: Prisma.SupplierContactAddressDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                update: {
                    args: Prisma.SupplierContactAddressUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierContactAddressDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierContactAddressUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierContactAddressUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierContactAddressUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierContactAddressPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierContactAddressAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierContactAddress>;
                };
                groupBy: {
                    args: Prisma.SupplierContactAddressGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierContactAddressGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierContactAddressCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierContactAddressCountAggregateOutputType> | number;
                };
            };
        };
        SupplierSkillActivity: {
            payload: Prisma.$SupplierSkillActivityPayload<ExtArgs>;
            fields: Prisma.SupplierSkillActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierSkillActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierSkillActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierSkillActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierSkillActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                findMany: {
                    args: Prisma.SupplierSkillActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>[];
                };
                create: {
                    args: Prisma.SupplierSkillActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                createMany: {
                    args: Prisma.SupplierSkillActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierSkillActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>[];
                };
                delete: {
                    args: Prisma.SupplierSkillActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                update: {
                    args: Prisma.SupplierSkillActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierSkillActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierSkillActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierSkillActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierSkillActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSkillActivityPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierSkillActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierSkillActivity>;
                };
                groupBy: {
                    args: Prisma.SupplierSkillActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierSkillActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierSkillActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierSkillActivityCountAggregateOutputType> | number;
                };
            };
        };
        SupplierMainActivity: {
            payload: Prisma.$SupplierMainActivityPayload<ExtArgs>;
            fields: Prisma.SupplierMainActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierMainActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierMainActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierMainActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierMainActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                findMany: {
                    args: Prisma.SupplierMainActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>[];
                };
                create: {
                    args: Prisma.SupplierMainActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                createMany: {
                    args: Prisma.SupplierMainActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierMainActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>[];
                };
                delete: {
                    args: Prisma.SupplierMainActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                update: {
                    args: Prisma.SupplierMainActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierMainActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierMainActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierMainActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierMainActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierMainActivityPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierMainActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierMainActivity>;
                };
                groupBy: {
                    args: Prisma.SupplierMainActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierMainActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierMainActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierMainActivityCountAggregateOutputType> | number;
                };
            };
        };
        SupplierSubActivity: {
            payload: Prisma.$SupplierSubActivityPayload<ExtArgs>;
            fields: Prisma.SupplierSubActivityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierSubActivityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierSubActivityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierSubActivityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierSubActivityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                findMany: {
                    args: Prisma.SupplierSubActivityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>[];
                };
                create: {
                    args: Prisma.SupplierSubActivityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                createMany: {
                    args: Prisma.SupplierSubActivityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierSubActivityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>[];
                };
                delete: {
                    args: Prisma.SupplierSubActivityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                update: {
                    args: Prisma.SupplierSubActivityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierSubActivityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierSubActivityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierSubActivityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierSubActivityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierSubActivityPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierSubActivityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierSubActivity>;
                };
                groupBy: {
                    args: Prisma.SupplierSubActivityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierSubActivityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierSubActivityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierSubActivityCountAggregateOutputType> | number;
                };
            };
        };
        SupplierBrandMapping: {
            payload: Prisma.$SupplierBrandMappingPayload<ExtArgs>;
            fields: Prisma.SupplierBrandMappingFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierBrandMappingFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierBrandMappingFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                findFirst: {
                    args: Prisma.SupplierBrandMappingFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierBrandMappingFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                findMany: {
                    args: Prisma.SupplierBrandMappingFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>[];
                };
                create: {
                    args: Prisma.SupplierBrandMappingCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                createMany: {
                    args: Prisma.SupplierBrandMappingCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierBrandMappingCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>[];
                };
                delete: {
                    args: Prisma.SupplierBrandMappingDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                update: {
                    args: Prisma.SupplierBrandMappingUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierBrandMappingDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierBrandMappingUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierBrandMappingUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>[];
                };
                upsert: {
                    args: Prisma.SupplierBrandMappingUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierBrandMappingPayload>;
                };
                aggregate: {
                    args: Prisma.SupplierBrandMappingAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierBrandMapping>;
                };
                groupBy: {
                    args: Prisma.SupplierBrandMappingGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierBrandMappingGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierBrandMappingCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierBrandMappingCountAggregateOutputType> | number;
                };
            };
        };
        SupplierType: {
            payload: Prisma.$SupplierTypePayload<ExtArgs>;
            fields: Prisma.SupplierTypeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SupplierTypeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SupplierTypeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                findFirst: {
                    args: Prisma.SupplierTypeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SupplierTypeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                findMany: {
                    args: Prisma.SupplierTypeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>[];
                };
                create: {
                    args: Prisma.SupplierTypeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                createMany: {
                    args: Prisma.SupplierTypeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SupplierTypeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>[];
                };
                delete: {
                    args: Prisma.SupplierTypeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                update: {
                    args: Prisma.SupplierTypeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                deleteMany: {
                    args: Prisma.SupplierTypeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SupplierTypeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SupplierTypeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>[];
                };
                upsert: {
                    args: Prisma.SupplierTypeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SupplierTypePayload>;
                };
                aggregate: {
                    args: Prisma.SupplierTypeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSupplierType>;
                };
                groupBy: {
                    args: Prisma.SupplierTypeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierTypeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SupplierTypeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SupplierTypeCountAggregateOutputType> | number;
                };
            };
        };
        ActivityCategory: {
            payload: Prisma.$ActivityCategoryPayload<ExtArgs>;
            fields: Prisma.ActivityCategoryFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ActivityCategoryFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ActivityCategoryFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                findFirst: {
                    args: Prisma.ActivityCategoryFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ActivityCategoryFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                findMany: {
                    args: Prisma.ActivityCategoryFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>[];
                };
                create: {
                    args: Prisma.ActivityCategoryCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                createMany: {
                    args: Prisma.ActivityCategoryCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ActivityCategoryCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>[];
                };
                delete: {
                    args: Prisma.ActivityCategoryDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                update: {
                    args: Prisma.ActivityCategoryUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                deleteMany: {
                    args: Prisma.ActivityCategoryDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ActivityCategoryUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ActivityCategoryUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>[];
                };
                upsert: {
                    args: Prisma.ActivityCategoryUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ActivityCategoryPayload>;
                };
                aggregate: {
                    args: Prisma.ActivityCategoryAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateActivityCategory>;
                };
                groupBy: {
                    args: Prisma.ActivityCategoryGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityCategoryGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ActivityCategoryCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ActivityCategoryCountAggregateOutputType> | number;
                };
            };
        };
        AdminAssignment: {
            payload: Prisma.$AdminAssignmentPayload<ExtArgs>;
            fields: Prisma.AdminAssignmentFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminAssignmentFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminAssignmentFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                findFirst: {
                    args: Prisma.AdminAssignmentFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminAssignmentFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                findMany: {
                    args: Prisma.AdminAssignmentFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>[];
                };
                create: {
                    args: Prisma.AdminAssignmentCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                createMany: {
                    args: Prisma.AdminAssignmentCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminAssignmentCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>[];
                };
                delete: {
                    args: Prisma.AdminAssignmentDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                update: {
                    args: Prisma.AdminAssignmentUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminAssignmentDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminAssignmentUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminAssignmentUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>[];
                };
                upsert: {
                    args: Prisma.AdminAssignmentUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminAssignmentPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAssignmentAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminAssignment>;
                };
                groupBy: {
                    args: Prisma.AdminAssignmentGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminAssignmentGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminAssignmentCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminAssignmentCountAggregateOutputType> | number;
                };
            };
        };
        Product: {
            payload: Prisma.$ProductPayload<ExtArgs>;
            fields: Prisma.ProductFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findFirst: {
                    args: Prisma.ProductFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                findMany: {
                    args: Prisma.ProductFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                create: {
                    args: Prisma.ProductCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                createMany: {
                    args: Prisma.ProductCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                delete: {
                    args: Prisma.ProductDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                update: {
                    args: Prisma.ProductUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>[];
                };
                upsert: {
                    args: Prisma.ProductUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductPayload>;
                };
                aggregate: {
                    args: Prisma.ProductAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProduct>;
                };
                groupBy: {
                    args: Prisma.ProductGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductCountAggregateOutputType> | number;
                };
            };
        };
        ProductLike: {
            payload: Prisma.$ProductLikePayload<ExtArgs>;
            fields: Prisma.ProductLikeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductLikeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductLikeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                findFirst: {
                    args: Prisma.ProductLikeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductLikeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                findMany: {
                    args: Prisma.ProductLikeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>[];
                };
                create: {
                    args: Prisma.ProductLikeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                createMany: {
                    args: Prisma.ProductLikeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductLikeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>[];
                };
                delete: {
                    args: Prisma.ProductLikeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                update: {
                    args: Prisma.ProductLikeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                deleteMany: {
                    args: Prisma.ProductLikeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductLikeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductLikeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>[];
                };
                upsert: {
                    args: Prisma.ProductLikeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductLikePayload>;
                };
                aggregate: {
                    args: Prisma.ProductLikeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductLike>;
                };
                groupBy: {
                    args: Prisma.ProductLikeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductLikeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductLikeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductLikeCountAggregateOutputType> | number;
                };
            };
        };
        ProductStatus: {
            payload: Prisma.$ProductStatusPayload<ExtArgs>;
            fields: Prisma.ProductStatusFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductStatusFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductStatusFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                findFirst: {
                    args: Prisma.ProductStatusFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductStatusFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                findMany: {
                    args: Prisma.ProductStatusFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>[];
                };
                create: {
                    args: Prisma.ProductStatusCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                createMany: {
                    args: Prisma.ProductStatusCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductStatusCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>[];
                };
                delete: {
                    args: Prisma.ProductStatusDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                update: {
                    args: Prisma.ProductStatusUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductStatusDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductStatusUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductStatusUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>[];
                };
                upsert: {
                    args: Prisma.ProductStatusUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductStatusPayload>;
                };
                aggregate: {
                    args: Prisma.ProductStatusAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductStatus>;
                };
                groupBy: {
                    args: Prisma.ProductStatusGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductStatusGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductStatusCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductStatusCountAggregateOutputType> | number;
                };
            };
        };
        ProductMedia: {
            payload: Prisma.$ProductMediaPayload<ExtArgs>;
            fields: Prisma.ProductMediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProductMediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProductMediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                findFirst: {
                    args: Prisma.ProductMediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProductMediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                findMany: {
                    args: Prisma.ProductMediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>[];
                };
                create: {
                    args: Prisma.ProductMediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                createMany: {
                    args: Prisma.ProductMediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProductMediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>[];
                };
                delete: {
                    args: Prisma.ProductMediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                update: {
                    args: Prisma.ProductMediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                deleteMany: {
                    args: Prisma.ProductMediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProductMediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProductMediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>[];
                };
                upsert: {
                    args: Prisma.ProductMediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProductMediaPayload>;
                };
                aggregate: {
                    args: Prisma.ProductMediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProductMedia>;
                };
                groupBy: {
                    args: Prisma.ProductMediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductMediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProductMediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProductMediaCountAggregateOutputType> | number;
                };
            };
        };
        Customer: {
            payload: Prisma.$CustomerPayload<ExtArgs>;
            fields: Prisma.CustomerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CustomerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findFirst: {
                    args: Prisma.CustomerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                findMany: {
                    args: Prisma.CustomerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                create: {
                    args: Prisma.CustomerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                createMany: {
                    args: Prisma.CustomerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                delete: {
                    args: Prisma.CustomerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                update: {
                    args: Prisma.CustomerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                deleteMany: {
                    args: Prisma.CustomerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CustomerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>[];
                };
                upsert: {
                    args: Prisma.CustomerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CustomerPayload>;
                };
                aggregate: {
                    args: Prisma.CustomerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCustomer>;
                };
                groupBy: {
                    args: Prisma.CustomerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CustomerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CustomerCountAggregateOutputType> | number;
                };
            };
        };
        Order: {
            payload: Prisma.$OrderPayload<ExtArgs>;
            fields: Prisma.OrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findFirst: {
                    args: Prisma.OrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                findMany: {
                    args: Prisma.OrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                create: {
                    args: Prisma.OrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                createMany: {
                    args: Prisma.OrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                delete: {
                    args: Prisma.OrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                update: {
                    args: Prisma.OrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>[];
                };
                upsert: {
                    args: Prisma.OrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderPayload>;
                };
                aggregate: {
                    args: Prisma.OrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrder>;
                };
                groupBy: {
                    args: Prisma.OrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderCountAggregateOutputType> | number;
                };
            };
        };
        OrderItem: {
            payload: Prisma.$OrderItemPayload<ExtArgs>;
            fields: Prisma.OrderItemFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrderItemFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findFirst: {
                    args: Prisma.OrderItemFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                findMany: {
                    args: Prisma.OrderItemFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                create: {
                    args: Prisma.OrderItemCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                createMany: {
                    args: Prisma.OrderItemCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                delete: {
                    args: Prisma.OrderItemDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                update: {
                    args: Prisma.OrderItemUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                deleteMany: {
                    args: Prisma.OrderItemDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrderItemUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>[];
                };
                upsert: {
                    args: Prisma.OrderItemUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrderItemPayload>;
                };
                aggregate: {
                    args: Prisma.OrderItemAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrderItem>;
                };
                groupBy: {
                    args: Prisma.OrderItemGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrderItemCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrderItemCountAggregateOutputType> | number;
                };
            };
        };
        AdminProductOrder: {
            payload: Prisma.$AdminProductOrderPayload<ExtArgs>;
            fields: Prisma.AdminProductOrderFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AdminProductOrderFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AdminProductOrderFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                findFirst: {
                    args: Prisma.AdminProductOrderFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AdminProductOrderFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                findMany: {
                    args: Prisma.AdminProductOrderFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>[];
                };
                create: {
                    args: Prisma.AdminProductOrderCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                createMany: {
                    args: Prisma.AdminProductOrderCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AdminProductOrderCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>[];
                };
                delete: {
                    args: Prisma.AdminProductOrderDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                update: {
                    args: Prisma.AdminProductOrderUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                deleteMany: {
                    args: Prisma.AdminProductOrderDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AdminProductOrderUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AdminProductOrderUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>[];
                };
                upsert: {
                    args: Prisma.AdminProductOrderUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AdminProductOrderPayload>;
                };
                aggregate: {
                    args: Prisma.AdminProductOrderAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdminProductOrder>;
                };
                groupBy: {
                    args: Prisma.AdminProductOrderGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminProductOrderGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AdminProductOrderCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminProductOrderCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
/**
 * Enums
 */
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AuthUserScalarFieldEnum: {
    readonly auth_user_id: "auth_user_id";
    readonly application_id: "application_id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly phone: "phone";
    readonly role: "role";
    readonly email_verified: "email_verified";
    readonly is_active: "is_active";
    readonly is_superadmin: "is_superadmin";
    readonly last_login_at: "last_login_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type AuthUserScalarFieldEnum = (typeof AuthUserScalarFieldEnum)[keyof typeof AuthUserScalarFieldEnum];
export declare const AuthTokenScalarFieldEnum: {
    readonly token_id: "token_id";
    readonly auth_user_id: "auth_user_id";
    readonly token_hash: "token_hash";
    readonly token_type: "token_type";
    readonly is_single_use: "is_single_use";
    readonly expires_at: "expires_at";
    readonly used_at: "used_at";
    readonly created_at: "created_at";
    readonly metadata: "metadata";
};
export type AuthTokenScalarFieldEnum = (typeof AuthTokenScalarFieldEnum)[keyof typeof AuthTokenScalarFieldEnum];
export declare const UserProfileScalarFieldEnum: {
    readonly user_profile_id: "user_profile_id";
    readonly auth_user_id: "auth_user_id";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly kvkk_accepted: "kvkk_accepted";
    readonly kvkk_accepted_at: "kvkk_accepted_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum];
export declare const FileScalarFieldEnum: {
    readonly file_id: "file_id";
    readonly storage_key: "storage_key";
    readonly original_filename: "original_filename";
    readonly mime_type: "mime_type";
    readonly size_bytes: "size_bytes";
    readonly uploaded_by: "uploaded_by";
    readonly uploaded_at: "uploaded_at";
    readonly metadata: "metadata";
};
export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];
export declare const SupplierScalarFieldEnum: {
    readonly supplier_id: "supplier_id";
    readonly auth_user_id: "auth_user_id";
    readonly legal_name: "legal_name";
    readonly company_type: "company_type";
    readonly tax_number: "tax_number";
    readonly tax_office: "tax_office";
    readonly trade_registry_no: "trade_registry_no";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum];
export declare const SupplierStatusScalarFieldEnum: {
    readonly supplier_id: "supplier_id";
    readonly current_status: "current_status";
    readonly status_note: "status_note";
    readonly changed_by: "changed_by";
    readonly changed_at: "changed_at";
};
export type SupplierStatusScalarFieldEnum = (typeof SupplierStatusScalarFieldEnum)[keyof typeof SupplierStatusScalarFieldEnum];
export declare const SupplierDocumentScalarFieldEnum: {
    readonly supplier_document_id: "supplier_document_id";
    readonly supplier_id: "supplier_id";
    readonly tax_sheet_file_id: "tax_sheet_file_id";
    readonly trade_registry_file_id: "trade_registry_file_id";
    readonly signature_declaration_file_id: "signature_declaration_file_id";
    readonly uploaded_at: "uploaded_at";
};
export type SupplierDocumentScalarFieldEnum = (typeof SupplierDocumentScalarFieldEnum)[keyof typeof SupplierDocumentScalarFieldEnum];
export declare const SupplierBankAccountScalarFieldEnum: {
    readonly bank_account_id: "bank_account_id";
    readonly supplier_id: "supplier_id";
    readonly bank_name: "bank_name";
    readonly iban: "iban";
    readonly account_holder_name: "account_holder_name";
    readonly proof_file_id: "proof_file_id";
    readonly is_primary: "is_primary";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierBankAccountScalarFieldEnum = (typeof SupplierBankAccountScalarFieldEnum)[keyof typeof SupplierBankAccountScalarFieldEnum];
export declare const SupplierContactAddressScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_id: "supplier_id";
    readonly is_billing: "is_billing";
    readonly country: "country";
    readonly province: "province";
    readonly district: "district";
    readonly address: "address";
    readonly phone: "phone";
    readonly website: "website";
    readonly contact_full_name: "contact_full_name";
    readonly contact_title: "contact_title";
    readonly contact_email: "contact_email";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierContactAddressScalarFieldEnum = (typeof SupplierContactAddressScalarFieldEnum)[keyof typeof SupplierContactAddressScalarFieldEnum];
export declare const SupplierSkillActivityScalarFieldEnum: {
    readonly supplier_skills_id: "supplier_skills_id";
    readonly supplier_id: "supplier_id";
    readonly supplier_type_id: "supplier_type_id";
    readonly expertise_level: "expertise_level";
    readonly why_choose_us: "why_choose_us";
    readonly is_featured: "is_featured";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type SupplierSkillActivityScalarFieldEnum = (typeof SupplierSkillActivityScalarFieldEnum)[keyof typeof SupplierSkillActivityScalarFieldEnum];
export declare const SupplierMainActivityScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_skills_id: "supplier_skills_id";
    readonly activity_category_id: "activity_category_id";
};
export type SupplierMainActivityScalarFieldEnum = (typeof SupplierMainActivityScalarFieldEnum)[keyof typeof SupplierMainActivityScalarFieldEnum];
export declare const SupplierSubActivityScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_main_activity_id: "supplier_main_activity_id";
    readonly sub_category_name: "sub_category_name";
};
export type SupplierSubActivityScalarFieldEnum = (typeof SupplierSubActivityScalarFieldEnum)[keyof typeof SupplierSubActivityScalarFieldEnum];
export declare const SupplierBrandMappingScalarFieldEnum: {
    readonly id: "id";
    readonly supplier_skills_id: "supplier_skills_id";
    readonly brand_name: "brand_name";
};
export type SupplierBrandMappingScalarFieldEnum = (typeof SupplierBrandMappingScalarFieldEnum)[keyof typeof SupplierBrandMappingScalarFieldEnum];
export declare const SupplierTypeScalarFieldEnum: {
    readonly supplier_type_id: "supplier_type_id";
    readonly name: "name";
    readonly is_active: "is_active";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type SupplierTypeScalarFieldEnum = (typeof SupplierTypeScalarFieldEnum)[keyof typeof SupplierTypeScalarFieldEnum];
export declare const ActivityCategoryScalarFieldEnum: {
    readonly activity_category_id: "activity_category_id";
    readonly name: "name";
    readonly parent_id: "parent_id";
    readonly is_active: "is_active";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
};
export type ActivityCategoryScalarFieldEnum = (typeof ActivityCategoryScalarFieldEnum)[keyof typeof ActivityCategoryScalarFieldEnum];
export declare const AdminAssignmentScalarFieldEnum: {
    readonly id: "id";
    readonly admin_user_id: "admin_user_id";
    readonly supplier_id: "supplier_id";
    readonly assigned_by: "assigned_by";
    readonly assigned_at: "assigned_at";
    readonly is_active: "is_active";
};
export type AdminAssignmentScalarFieldEnum = (typeof AdminAssignmentScalarFieldEnum)[keyof typeof AdminAssignmentScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly product_code: "product_code";
    readonly supplier_id: "supplier_id";
    readonly name: "name";
    readonly slug: "slug";
    readonly short_description: "short_description";
    readonly full_description: "full_description";
    readonly main_image_file_id: "main_image_file_id";
    readonly price: "price";
    readonly currency: "currency";
    readonly stock: "stock";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const ProductLikeScalarFieldEnum: {
    readonly like_id: "like_id";
    readonly product_id: "product_id";
    readonly customer_id: "customer_id";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type ProductLikeScalarFieldEnum = (typeof ProductLikeScalarFieldEnum)[keyof typeof ProductLikeScalarFieldEnum];
export declare const ProductStatusScalarFieldEnum: {
    readonly product_id: "product_id";
    readonly publication_status: "publication_status";
    readonly order_status: "order_status";
    readonly status_note: "status_note";
    readonly quantity: "quantity";
    readonly changed_by: "changed_by";
    readonly changed_at: "changed_at";
};
export type ProductStatusScalarFieldEnum = (typeof ProductStatusScalarFieldEnum)[keyof typeof ProductStatusScalarFieldEnum];
export declare const ProductMediaScalarFieldEnum: {
    readonly media_id: "media_id";
    readonly product_id: "product_id";
    readonly file_id: "file_id";
    readonly media_type: "media_type";
    readonly sort_order: "sort_order";
    readonly created_at: "created_at";
};
export type ProductMediaScalarFieldEnum = (typeof ProductMediaScalarFieldEnum)[keyof typeof ProductMediaScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly customer_id: "customer_id";
    readonly auth_user_id: "auth_user_id";
    readonly customer_type: "customer_type";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly order_id: "order_id";
    readonly order_code: "order_code";
    readonly customer_id: "customer_id";
    readonly supplier_id: "supplier_id";
    readonly total_amount: "total_amount";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly order_id: "order_id";
    readonly product_id: "product_id";
    readonly unit_price: "unit_price";
    readonly quantity: "quantity";
    readonly created_at: "created_at";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const AdminProductOrderScalarFieldEnum: {
    readonly admin_order_id: "admin_order_id";
    readonly supplier_id: "supplier_id";
    readonly product_id: "product_id";
    readonly quantity: "quantity";
    readonly ordered_by: "ordered_by";
    readonly order_note: "order_note";
    readonly created_at: "created_at";
};
export type AdminProductOrderScalarFieldEnum = (typeof AdminProductOrderScalarFieldEnum)[keyof typeof AdminProductOrderScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly notification_id: "notification_id";
    readonly recipient_user_id: "recipient_user_id";
    readonly notification_type: "notification_type";
    readonly notification_category: "notification_category";
    readonly status: "status";
    readonly title: "title";
    readonly message: "message";
    readonly supplier_id: "supplier_id";
    readonly product_id: "product_id";
    readonly order_id: "order_id";
    readonly admin_order_id: "admin_order_id";
    readonly related_user_id: "related_user_id";
    readonly quantity: "quantity";
    readonly status_before: "status_before";
    readonly status_after: "status_after";
    readonly metadata: "metadata";
    readonly sent_at: "sent_at";
    readonly read_at: "read_at";
    readonly created_at: "created_at";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly audit_id: "audit_id";
    readonly actor_user_id: "actor_user_id";
    readonly action: "action";
    readonly target_table: "target_table";
    readonly target_id: "target_id";
    readonly changes: "changes";
    readonly ip_address: "ip_address";
    readonly user_agent: "user_agent";
    readonly created_at: "created_at";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly JsonNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
    readonly AnyNull: {
        "__#private@#private": any;
        _getNamespace(): string;
        _getName(): string;
        toString(): string;
    };
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
/**
 * Field references
 */
/**
 * Reference to a field of type 'String'
 */
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
/**
 * Reference to a field of type 'String[]'
 */
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
/**
 * Reference to a field of type 'UserRole'
 */
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
/**
 * Reference to a field of type 'UserRole[]'
 */
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
/**
 * Reference to a field of type 'Boolean'
 */
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
/**
 * Reference to a field of type 'DateTime'
 */
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
/**
 * Reference to a field of type 'DateTime[]'
 */
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
/**
 * Reference to a field of type 'Int'
 */
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
/**
 * Reference to a field of type 'Int[]'
 */
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
/**
 * Reference to a field of type 'Json'
 */
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
/**
 * Reference to a field of type 'QueryMode'
 */
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
/**
 * Reference to a field of type 'BigInt'
 */
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
/**
 * Reference to a field of type 'BigInt[]'
 */
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
/**
 * Reference to a field of type 'CompanyType'
 */
export type EnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType'>;
/**
 * Reference to a field of type 'CompanyType[]'
 */
export type ListEnumCompanyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CompanyType[]'>;
/**
 * Reference to a field of type 'SupplierVerificationStatus'
 */
export type EnumSupplierVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplierVerificationStatus'>;
/**
 * Reference to a field of type 'SupplierVerificationStatus[]'
 */
export type ListEnumSupplierVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SupplierVerificationStatus[]'>;
/**
 * Reference to a field of type 'Decimal'
 */
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
/**
 * Reference to a field of type 'Decimal[]'
 */
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
/**
 * Reference to a field of type 'ProductPublicationStatus'
 */
export type EnumProductPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductPublicationStatus'>;
/**
 * Reference to a field of type 'ProductPublicationStatus[]'
 */
export type ListEnumProductPublicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductPublicationStatus[]'>;
/**
 * Reference to a field of type 'ProductOrderStatus'
 */
export type EnumProductOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductOrderStatus'>;
/**
 * Reference to a field of type 'ProductOrderStatus[]'
 */
export type ListEnumProductOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductOrderStatus[]'>;
/**
 * Reference to a field of type 'NotificationType'
 */
export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>;
/**
 * Reference to a field of type 'NotificationType[]'
 */
export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>;
/**
 * Reference to a field of type 'NotificationCategory'
 */
export type EnumNotificationCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationCategory'>;
/**
 * Reference to a field of type 'NotificationCategory[]'
 */
export type ListEnumNotificationCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationCategory[]'>;
/**
 * Reference to a field of type 'NotificationStatus'
 */
export type EnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus'>;
/**
 * Reference to a field of type 'NotificationStatus[]'
 */
export type ListEnumNotificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationStatus[]'>;
/**
 * Reference to a field of type 'Float'
 */
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
/**
 * Reference to a field of type 'Float[]'
 */
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
/**
 * Batch Payload for updateMany & deleteMany & createMany
 */
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     *
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     *
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null;
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    authUser?: Prisma.AuthUserOmit;
    authToken?: Prisma.AuthTokenOmit;
    userProfile?: Prisma.UserProfileOmit;
    file?: Prisma.FileOmit;
    supplier?: Prisma.SupplierOmit;
    supplierStatus?: Prisma.SupplierStatusOmit;
    supplierDocument?: Prisma.SupplierDocumentOmit;
    supplierBankAccount?: Prisma.SupplierBankAccountOmit;
    supplierContactAddress?: Prisma.SupplierContactAddressOmit;
    supplierSkillActivity?: Prisma.SupplierSkillActivityOmit;
    supplierMainActivity?: Prisma.SupplierMainActivityOmit;
    supplierSubActivity?: Prisma.SupplierSubActivityOmit;
    supplierBrandMapping?: Prisma.SupplierBrandMappingOmit;
    supplierType?: Prisma.SupplierTypeOmit;
    activityCategory?: Prisma.ActivityCategoryOmit;
    adminAssignment?: Prisma.AdminAssignmentOmit;
    product?: Prisma.ProductOmit;
    productLike?: Prisma.ProductLikeOmit;
    productStatus?: Prisma.ProductStatusOmit;
    productMedia?: Prisma.ProductMediaOmit;
    customer?: Prisma.CustomerOmit;
    order?: Prisma.OrderOmit;
    orderItem?: Prisma.OrderItemOmit;
    adminProductOrder?: Prisma.AdminProductOrderOmit;
    notification?: Prisma.NotificationOmit;
    auditLog?: Prisma.AuditLogOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
/**
 * `PrismaClient` proxy available in interactive transactions.
 */
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
//# sourceMappingURL=prismaNamespace.d.ts.map