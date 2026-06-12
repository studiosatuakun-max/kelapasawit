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

export async function updateBlockDataAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const blockName = formData.get('blockName');
  
  // Dalam aplikasi nyata, ambil ID blok, validasi input yang diubah (tidak wajib diisi semua), lalu perbarui database.
  const payload = {
    blockName,
    harvestDate: formData.get('harvestDate'),
    yieldKg: formData.get('yieldKg'),
    nextHarvestDate: formData.get('nextHarvestDate'),
    harvestStatus: formData.get('harvestStatus'),
    fertilizationDate: formData.get('fertilizationDate'),
    fertilizerType: formData.get('fertilizerType'),
    pruningDate: formData.get('pruningDate'),
    pruningNotes: formData.get('pruningNotes'),
  };

  console.log('Update Block Data:', payload);

  revalidatePath('/');
  revalidatePath('/input');

  return { 
    message: `Pembaruan data untuk ${blockName} telah berhasil disimpan ke dalam sistem.`,
    success: true,
    timestamp: Date.now()
  };
}

export async function updateFinancialDataAction(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const period = formData.get('period');
  const revenue = formData.get('revenue');
  const expenses = formData.get('expenses');
  const cpoPrice = formData.get('cpoPrice');

  console.log('Update Financial Data:', { period, revenue, expenses, cpoPrice });

  revalidatePath('/');
  revalidatePath('/input');

  return { 
    message: `Laporan Keuangan periode ${period} berhasil diperbarui.`,
    success: true,
    timestamp: Date.now()
  };
}
