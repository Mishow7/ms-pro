export type Booking = {
  id: string;
  name: string;
  phone: string;
  service: string;
  message: string;
  at: string;
  done?: boolean;
};

const KEY = "ms-bookings";
export const BOOKINGS_PIN = "2332";

export function loadBookings(): Booking[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]") as Booking[];
  } catch {
    return [];
  }
}

export function saveBooking(data: Omit<Booking, "id" | "at" | "done">): Booking {
  const item: Booking = {
    ...data,
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    at: new Date().toISOString(),
    done: false,
  };
  const all = [item, ...loadBookings()];
  localStorage.setItem(KEY, JSON.stringify(all));
  return item;
}

export function updateBooking(id: string, patch: Partial<Booking>) {
  const all = loadBookings().map((b) => (b.id === id ? { ...b, ...patch } : b));
  localStorage.setItem(KEY, JSON.stringify(all));
  return all;
}

export function whatsappBookingUrl(b: Omit<Booking, "id" | "at" | "done">) {
  const text = [
    "طلب استشارة جديد — MS Software",
    "",
    `الاسم: ${b.name}`,
    `الجوال: ${b.phone}`,
    `الخدمة: ${b.service}`,
    `التفاصيل: ${b.message}`,
  ].join("\n");
  return `https://wa.me/966547032332?text=${encodeURIComponent(text)}`;
}
