// Seed script: Süperadmin kullanıcısını DB'ye ekler
import { PrismaClient } from '../generated/prisma/client.ts';
import dotenv from 'dotenv';
import { hashPassword } from '../src/core/utils/crypto.ts';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// .env dosyasını yükle
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seed işlemi başlatılıyor...');

  const superadminEmail = process.env.SUPERADMIN_EMAIL || 'admin@example.com';
  const superadminPassword = process.env.SUPERADMIN_PASSWORD;

  if (!superadminPassword) {
    throw new Error(
      '❌ SUPERADMIN_PASSWORD environment variable bulunamadı! Seed işlemi için geçici bir şifre belirleyin.'
    );
  }

  // Şifreyi hash'le
  console.log('🔐 Şifre hash\'leniyor...');
  const passwordHash = await hashPassword(superadminPassword);

  // Email ile mevcut kullanıcıyı kontrol et
  const existingUserByEmail = await prisma.authUser.findUnique({
    where: {
      email: superadminEmail,
    },
  });

  // Mevcut süperadmin'i kontrol et
  const existingSuperadmin = await prisma.authUser.findFirst({
    where: {
      is_superadmin: true,
    },
  });

  if (existingUserByEmail) {
    // Email ile kullanıcı varsa, onu süperadmin yap veya güncelle
    if (existingSuperadmin && existingSuperadmin.auth_user_id !== existingUserByEmail.auth_user_id) {
      // Başka bir süperadmin varsa, onu false yap
      await prisma.authUser.update({
        where: { auth_user_id: existingSuperadmin.auth_user_id },
        data: { is_superadmin: false },
      });
      console.log(`⚠️  Eski süperadmin (${existingSuperadmin.email}) false yapıldı`);
    }

    // Mevcut kullanıcıyı süperadmin yap ve şifresini güncelle
    await prisma.authUser.update({
      where: { auth_user_id: existingUserByEmail.auth_user_id },
      data: {
        password_hash: passwordHash,
        is_superadmin: true,
        email_verified: true,
        is_active: true,
        role: 'superadmin',
      },
    });
    
    console.log(`✅ Mevcut kullanıcı süperadmin yapıldı: ${superadminEmail}`);
  } else {
    // Email ile kullanıcı yoksa
    if (existingSuperadmin) {
      // Mevcut süperadmin varsa, onu false yap
      await prisma.authUser.update({
        where: { auth_user_id: existingSuperadmin.auth_user_id },
        data: { is_superadmin: false },
      });
      console.log(`⚠️  Eski süperadmin (${existingSuperadmin.email}) false yapıldı`);
    }

    // Yeni süperadmin oluştur - application_id için benzersiz değer oluştur
    // Önce '01' kontrol et, varsa timestamp kullan
    const existingAppId01 = await prisma.authUser.findUnique({
      where: { application_id: '01' },
    });

    const applicationId = existingAppId01 ? `superadmin-${Date.now()}` : '01';

    await prisma.authUser.create({
      data: {
        email: superadminEmail,
        password_hash: passwordHash,
        is_superadmin: true,
        email_verified: true,
        is_active: true,
        role: 'superadmin',
        application_id: applicationId,
      },
    });
    
    console.log(`✅ Süperadmin oluşturuldu: ${superadminEmail}`);
  }

  console.log('✅ Seed işlemi tamamlandı!');
  
  // .env dosyasından SUPERADMIN_PASSWORD'ü temizle
  console.log('🧹 .env dosyasından SUPERADMIN_PASSWORD temizleniyor...');
  const envPath = path.join(process.cwd(), '.env');
  
  if (fs.existsSync(envPath)) {
    let envContent = fs.readFileSync(envPath, 'utf-8');
    
    // SUPERADMIN_PASSWORD satırını kaldır veya boş bırak
    envContent = envContent
      .split('\n')
      .map((line) => {
        // SUPERADMIN_PASSWORD satırını bul ve sil veya yorum satırına çevir
        if (line.trim().startsWith('SUPERADMIN_PASSWORD=')) {
          return '# SUPERADMIN_PASSWORD - Seed işlemi sonrası temizlendi. Hash artık sadece DB\'de saklanıyor.';
        }
        return line;
      })
      .join('\n');
    
    fs.writeFileSync(envPath, envContent, 'utf-8');
    console.log('✅ .env dosyasından SUPERADMIN_PASSWORD temizlendi!');
  } else {
    console.log('⚠️  .env dosyası bulunamadı, temizleme atlandı.');
  }
  
  console.log(`\n📌 Hash artık sadece veritabanında saklanıyor.\n`);
}

main()
  .catch((e) => {
    console.error('❌ Seed hatası:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

