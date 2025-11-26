-- Partial unique index: Sadece bir tane is_superadmin = TRUE kaydına izin verir
-- Bu sayede veritabanı seviyesinde süperadmin tekilleştirilir
CREATE UNIQUE INDEX "AuthUser_is_superadmin_unique" 
ON "AuthUser" ("is_superadmin") 
WHERE "is_superadmin" = true;