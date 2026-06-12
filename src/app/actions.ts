'use server';

import { revalidatePath } from 'next/cache';

export async function createActivityAction(prevState: any, formData: FormData) {
  // Simulate network delay to demonstrate Server Action loading state
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const blockName = formData.get('blockName');
  const activity = formData.get('activity');
  const date = formData.get('date');
  const yieldKg = formData.get('yieldKg');
  const costRp = formData.get('costRp');
  const status = formData.get('status');

  // Dalam aplikasi produksi, kita akan memvalidasi data dan menyimpannya ke database (misal: Prisma/Drizzle).
  console.log('New Activity Data Saved:', { blockName, activity, date, yieldKg, costRp, status });

  // Me-revalidate path home agar fetch data ulang
  revalidatePath('/');

  return { 
    message: `Aktivitas ${activity} di ${blockName} berhasil ditambahkan!`,
    success: true,
    timestamp: Date.now() // Trigger useEffect untuk auto-close modal
  };
}
