import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "./prismaNamespace.ts";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AuthUsers
   * const authUsers = await prisma.authUser.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AuthUsers
 * const authUsers = await prisma.authUser.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    /**
       * Executes a prepared raw query and returns the number of affected rows.
       * @example
       * ```
       * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
       * ```
       *
       * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
       */
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Executes a raw query and returns the number of affected rows.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    /**
     * Performs a prepared raw query and returns the `SELECT` data.
     * @example
     * ```
     * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Performs a raw query and returns the `SELECT` data.
     * Susceptible to SQL injections, see documentation.
     * @example
     * ```
     * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    /**
     * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
     * @example
     * ```
     * const [george, bob, alice] = await prisma.$transaction([
     *   prisma.user.create({ data: { name: 'George' } }),
     *   prisma.user.create({ data: { name: 'Bob' } }),
     *   prisma.user.create({ data: { name: 'Alice' } }),
     * ])
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
     */
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.authUser`: Exposes CRUD operations for the **AuthUser** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more AuthUsers
  * const authUsers = await prisma.authUser.findMany()
  * ```
  */
    get authUser(): Prisma.AuthUserDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.authToken`: Exposes CRUD operations for the **AuthToken** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuthTokens
      * const authTokens = await prisma.authToken.findMany()
      * ```
      */
    get authToken(): Prisma.AuthTokenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more UserProfiles
      * const userProfiles = await prisma.userProfile.findMany()
      * ```
      */
    get userProfile(): Prisma.UserProfileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.file`: Exposes CRUD operations for the **File** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Files
      * const files = await prisma.file.findMany()
      * ```
      */
    get file(): Prisma.FileDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Suppliers
      * const suppliers = await prisma.supplier.findMany()
      * ```
      */
    get supplier(): Prisma.SupplierDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierStatus`: Exposes CRUD operations for the **SupplierStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierStatuses
      * const supplierStatuses = await prisma.supplierStatus.findMany()
      * ```
      */
    get supplierStatus(): Prisma.SupplierStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierDocument`: Exposes CRUD operations for the **SupplierDocument** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierDocuments
      * const supplierDocuments = await prisma.supplierDocument.findMany()
      * ```
      */
    get supplierDocument(): Prisma.SupplierDocumentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierBankAccount`: Exposes CRUD operations for the **SupplierBankAccount** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierBankAccounts
      * const supplierBankAccounts = await prisma.supplierBankAccount.findMany()
      * ```
      */
    get supplierBankAccount(): Prisma.SupplierBankAccountDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierContactAddress`: Exposes CRUD operations for the **SupplierContactAddress** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierContactAddresses
      * const supplierContactAddresses = await prisma.supplierContactAddress.findMany()
      * ```
      */
    get supplierContactAddress(): Prisma.SupplierContactAddressDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierSkillActivity`: Exposes CRUD operations for the **SupplierSkillActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierSkillActivities
      * const supplierSkillActivities = await prisma.supplierSkillActivity.findMany()
      * ```
      */
    get supplierSkillActivity(): Prisma.SupplierSkillActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierMainActivity`: Exposes CRUD operations for the **SupplierMainActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierMainActivities
      * const supplierMainActivities = await prisma.supplierMainActivity.findMany()
      * ```
      */
    get supplierMainActivity(): Prisma.SupplierMainActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierSubActivity`: Exposes CRUD operations for the **SupplierSubActivity** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierSubActivities
      * const supplierSubActivities = await prisma.supplierSubActivity.findMany()
      * ```
      */
    get supplierSubActivity(): Prisma.SupplierSubActivityDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierBrandMapping`: Exposes CRUD operations for the **SupplierBrandMapping** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierBrandMappings
      * const supplierBrandMappings = await prisma.supplierBrandMapping.findMany()
      * ```
      */
    get supplierBrandMapping(): Prisma.SupplierBrandMappingDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.supplierType`: Exposes CRUD operations for the **SupplierType** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more SupplierTypes
      * const supplierTypes = await prisma.supplierType.findMany()
      * ```
      */
    get supplierType(): Prisma.SupplierTypeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.activityCategory`: Exposes CRUD operations for the **ActivityCategory** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ActivityCategories
      * const activityCategories = await prisma.activityCategory.findMany()
      * ```
      */
    get activityCategory(): Prisma.ActivityCategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.adminAssignment`: Exposes CRUD operations for the **AdminAssignment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AdminAssignments
      * const adminAssignments = await prisma.adminAssignment.findMany()
      * ```
      */
    get adminAssignment(): Prisma.AdminAssignmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.product`: Exposes CRUD operations for the **Product** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Products
      * const products = await prisma.product.findMany()
      * ```
      */
    get product(): Prisma.ProductDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productLike`: Exposes CRUD operations for the **ProductLike** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductLikes
      * const productLikes = await prisma.productLike.findMany()
      * ```
      */
    get productLike(): Prisma.ProductLikeDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productStatus`: Exposes CRUD operations for the **ProductStatus** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductStatuses
      * const productStatuses = await prisma.productStatus.findMany()
      * ```
      */
    get productStatus(): Prisma.ProductStatusDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.productMedia`: Exposes CRUD operations for the **ProductMedia** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more ProductMedias
      * const productMedias = await prisma.productMedia.findMany()
      * ```
      */
    get productMedia(): Prisma.ProductMediaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Customers
      * const customers = await prisma.customer.findMany()
      * ```
      */
    get customer(): Prisma.CustomerDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.order`: Exposes CRUD operations for the **Order** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Orders
      * const orders = await prisma.order.findMany()
      * ```
      */
    get order(): Prisma.OrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more OrderItems
      * const orderItems = await prisma.orderItem.findMany()
      * ```
      */
    get orderItem(): Prisma.OrderItemDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.adminProductOrder`: Exposes CRUD operations for the **AdminProductOrder** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AdminProductOrders
      * const adminProductOrders = await prisma.adminProductOrder.findMany()
      * ```
      */
    get adminProductOrder(): Prisma.AdminProductOrderDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Notifications
      * const notifications = await prisma.notification.findMany()
      * ```
      */
    get notification(): Prisma.NotificationDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more AuditLogs
      * const auditLogs = await prisma.auditLog.findMany()
      * ```
      */
    get auditLog(): Prisma.AuditLogDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map