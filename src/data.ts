export const IMAGES = {
  academy: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
  toolbox: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800',
  ideas: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
  events: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  journey: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
  library: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
  film1: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800',
  film2: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
  film3: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
  tool1: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800',
  tool2: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800',
  tool3: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800',
  event1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
  event2: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
  journey1: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800',
  journey2: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800',
  book1: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800',
  book2: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=800',
  idea1: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800'
};

export const DATA: Record<string, any[]> = {
  academy: [
    { id: 'a1', title: 'شناخت مسئله اجتماعی', category: 'شناخت مسئله', duration: '۴۵ دقیقه', level: 'مقدماتی', desc: 'یادگیری روش‌های شناسایی و تحلیل مسائل اجتماعی با رویکرد سیستمی.', tags: ['تحلیل','مسئله'], points: 20, views: 1240, date: '۱۴۰۴', image: IMAGES.film1 },
    { id: 'a2', title: 'طراحی فکر برای مسائل اجتماعی', category: 'تفکر طراحی', duration: '۶۰ دقیقه', level: 'متوسط', desc: 'یادگیری متدولوژی Design Thinking و کاربرد آن در حل مسائل پیچیده اجتماعی.', tags: ['طراحی','متدولوژی'], points: 35, views: 890, date: '۱۴۰۴', image: IMAGES.film2 },
    { id: 'a3', title: 'ایده‌پردازی خلاقانه', category: 'ایده‌پردازی و خلاقیت', duration: '۳۰ دقیقه', level: 'مقدماتی', desc: 'تکنیک‌های تولید ایده‌های نوآورانه برای مسائل اجتماعی.', tags: ['خلاقیت','ایده'], points: 25, views: 670, date: '۱۴۰۴', image: IMAGES.idea1 },
    { id: 'a4', title: 'مدل کسب‌وکار اجتماعی', category: 'نوآوری و کارآفرینی اجتماعی', duration: '۴۵ دقیقه', level: 'پیشرفته', desc: 'چگونه یک مدل کسب‌وکار اجتماعی پایدار طراحی کنیم؟', tags: ['کسب‌وکار','پایداری'], points: 40, views: 520, date: '۱۴۰۴', image: IMAGES.film3 },
    { id: 'a5', title: 'تفکر سیستمی در نوآوری', category: 'شناخت مسئله', duration: '۴۰ دقیقه', level: 'متوسط', desc: 'نگاه سیستمی به مسائل اجتماعی و شناسایی نقاط مداخله.', tags: ['سیستم','تحلیل'], points: 35, views: 460, date: '۱۴۰۴', image: IMAGES.journey1 },
    { id: 'a6', title: 'اعتبارسنجی ایده', category: 'ایده‌پردازی و خلاقیت', duration: '۳۵ دقیقه', level: 'متوسط', desc: 'روش‌های تست و اعتبارسنجی ایده‌های اجتماعی قبل از اجرا.', tags: ['اعتبارسنجی','تست'], points: 30, views: 380, date: '۱۴۰۴', image: IMAGES.tool1 }
  ],
  toolbox: [
    { id: 't1', title: 'بوم مدل کسب‌وکار اجتماعی', category: 'اجرای ایده', format: 'بوم', difficulty: 'متوسط', duration: '۹۰ دقیقه', desc: 'ابزار تعاملی برای طراحی مدل کسب‌وکار اجتماعی با ۹ بخش اصلی.', tags: ['بوم','استراتژی'], points: 50, digital: true, image: IMAGES.tool1 },
    { id: 't2', title: 'نقشه همدلی', category: 'مخاطب‌شناسی', format: 'بوم', difficulty: 'آسان', duration: '۴۵ دقیقه', desc: 'ابزار تعاملی برای درک عمیق کاربران و ذی‌نفعان.', tags: ['همدلی','تحقیق'], points: 30, digital: true, image: IMAGES.journey2 },
    { id: 't3', title: 'بازی نقش‌آفرینی', category: 'مخاطب‌شناسی', format: 'بازی', difficulty: 'متوسط', duration: '۶۰ دقیقه', desc: 'بازی تعاملی برای درک عمیق‌تر نیازهای ذی‌نفعان.', tags: ['بازی','نقش'], points: 35, digital: false, image: IMAGES.events },
    { id: 't4', title: 'سناریوی آینده', category: 'ایده‌پردازی و خلاقیت', format: 'سناریو', difficulty: 'پیشرفته', duration: '۱۲۰ دقیقه', desc: 'تدوین سناریوهای محتمل برای آینده مسئله اجتماعی.', tags: ['سناریو','آینده'], points: 45, digital: false, image: IMAGES.film2 },
    { id: 't5', title: 'بوم ارزش پیشنهادی', category: 'ایده‌پردازی و خلاقیت', format: 'بوم', difficulty: 'متوسط', duration: '۶۰ دقیقه', desc: 'طراحی ارزش پیشنهادی منطبق با نیاز ذی‌نفعان.', tags: ['ارزش','پیشنهاد'], points: 40, digital: true, image: IMAGES.idea1 },
    { id: 't6', title: 'پرسشنامه میدانی', category: 'شناخت و تعریف مسئله', format: 'فایل', difficulty: 'آسان', duration: '۳۰ دقیقه', desc: 'قالب آماده پرسشنامه برای تحقیقات میدانی.', tags: ['پرسشنامه','میدانی'], points: 20, printable: true, image: IMAGES.tool3 },
    { id: 't7', title: 'نقشه سفر ذی‌نفعان', category: 'مخاطب‌شناسی', format: 'بوم', difficulty: 'متوسط', duration: '۷۵ دقیقه', desc: 'ترسیم سفر ذی‌نفعان و شناسایی نقاط درد.', tags: ['سفر','نقشه'], points: 35, printable: true, image: IMAGES.journey1 },
    { id: 't8', title: 'پروتوتایپ سریع', category: 'نمونه‌سازی و اعتبارسنجی ایده', format: 'فایل', difficulty: 'پیشرفته', duration: '۱۸۰ دقیقه', desc: 'ساخت نمونه اولیه سریع برای تست ایده.', tags: ['پروتوتایپ','نمونه'], points: 55, digital: true, image: IMAGES.tool2 },
    { id: 't9', title: 'بوم ذی‌نفعان', category: 'شناخت و تعریف مسئله', format: 'بوم', difficulty: 'آسان', duration: '۴۵ دقیقه', desc: 'شناسایی و تحلیل ذی‌نفعان کلیدی پروژه.', tags: ['ذی‌نفعان','تحلیل'], points: 25, digital: true, image: IMAGES.film3 }
  ],
  ideas: [
    { id: 'i1', title: 'کتابخانه سیار برای مناطق محروم', author: 'سارا احمدی', category: 'تعلیم و تربیت', status: 'تایید شده', desc: 'ایده ایجاد کتابخانه‌های سیار با دوچرخه برای روستاهای دورافتاده.', tags: ['آموزش','روستا'], points: 80, likes: 234, comments: 18, date: '۱۴۰۴', image: IMAGES.idea1 },
    { id: 'i2', title: 'اپلیکیشن مهارت‌آموزی محلی', author: 'علی رضایی', category: 'اشتغال و معیشت', status: 'در حال بررسی', desc: 'پلتفرمی برای اتصال استادان محلی به جوانان جویای مهارت.', tags: ['فناوری','مهارت'], points: 45, likes: 156, comments: 12, date: '۱۴۰۴', image: IMAGES.film2 },
    { id: 'i3', title: 'باغچه‌های اشتراکی شهری', author: 'مریم کریمی', category: 'محیط‌زیست', status: 'تایید شده', desc: 'ایجاد باغچه‌های اشتراکی در پشت‌بام‌ها و فضاهای خالی شهری.', tags: ['محیط زیست','شهری'], points: 95, likes: 312, comments: 27, date: '۱۴۰۴', image: IMAGES.journey1 },
    { id: 'i4', title: 'مدرسه والدین نوجوان', author: 'حسین محمدی', category: 'خانواده و سبک زندگی', status: 'در حال بررسی', desc: 'مرکزی برای آموزش و حمایت از والدین نوجوان.', tags: ['خانواده','حمایت'], points: 60, likes: 189, comments: 15, date: '۱۴۰۴', image: IMAGES.journey2 },
    { id: 'i5', title: 'بانک زمان محلی', author: 'زهرا نوری', category: 'اشتغال و معیشت', status: 'تایید شده', desc: 'سیستمی برای تبادل خدمات بر اساس زمان به جای پول.', tags: ['اقتصاد','محله'], points: 110, likes: 421, comments: 34, date: '۱۴۰۴', image: IMAGES.tool1 }
  ],
  events: [
    { id: 'ev1', title: 'کارگاه طراحی فکر برای مسائل اجتماعی', type: 'کارگاه حضوری', status: 'آینده', location: 'تهران', date: '۱۴۰۴/۰۲/۱۵', duration: '۴ ساعت', desc: 'کارگاه عملی طراحی فکر با تمرکز بر مسائل اجتماعی ایران.', tags: ['کارگاه','طراحی'], points: 50, capacity: 30, registered: 18, image: IMAGES.event1 },
    { id: 'ev2', title: 'وبینار نوآوری اجتماعی در عصر دیجیتال', type: 'وبینار آنلاین', status: 'آینده', location: 'آنلاین', date: '۱۴۰۴/۰۲/۲۲', duration: '۲ ساعت', desc: 'بررسی فرصت‌ها و چالش‌های نوآوری اجتماعی در فضای دیجیتال.', tags: ['وبینار','دیجیتال'], points: 30, capacity: 100, registered: 67, image: IMAGES.events },
    { id: 'ev3', title: 'گزارش: رویداد استارتاپ اجتماعی ۱۴۰۴', type: 'گزارش رویداد', status: 'برگزار شده', location: 'اصفهان', date: '۱۴۰۴/۱۱/۱۰', duration: '۲ روز', desc: 'گزارش کامل رویداد استارتاپ اجتماعی با حضور ۵۰ تیم.', tags: ['گزارش','استارتاپ'], points: 0, image: IMAGES.film3 },
    { id: 'ev4', title: 'گزارش: همایش سالانه نوآفر', type: 'گزارش رویداد', status: 'برگزار شده', location: 'تهران', date: '۱۴۰۴/۰۹/۲۰', duration: '۱ روز', desc: 'گزارش همایش سالانه نوآفر با حضور فعالان حوزه نوآوری اجتماعی.', tags: ['گزارش','همایش'], points: 0, image: IMAGES.journey2 }
  ],
  journey: [
    { id: 'j1', title: 'سفر من از مهندسی به نوآوری اجتماعی', author: 'رضا کاظمی', category: 'رسانه و فضای دیجیتال', readTime: '۸ دقیقه', desc: 'چگونه از یک مهندس نرم‌افزار به موسس یک استارتاپ اجتماعی تبدیل شدم.', tags: ['مسیر','شخصی'], points: 40, likes: 178, comments: 22, date: '۱۴۰۴', image: IMAGES.journey1 },
    { id: 'j2', title: '۶ ماه کار در یک روستا', author: 'فاطمه عباسی', category: 'تعلیم و تربیت', readTime: '۱۲ دقیقه', desc: 'تجربه زندگی و کار در یک روستای محروم و درس‌هایی که گرفتم.', tags: ['روستا','میدانی'], points: 55, likes: 245, comments: 31, date: '۱۴۰۴', image: IMAGES.journey2 },
    { id: 'j3', title: 'چگونه اولین پروژه اجتماعی‌ام را شروع کردم', author: 'محمد جعفری', category: 'اشتغال و معیشت', readTime: '۶ دقیقه', desc: 'گام‌به‌گام از ایده تا اجرای اولین پروژه اجتماعی.', tags: ['شروع','عملی'], points: 45, likes: 198, comments: 19, date: '۱۴۰۴', image: IMAGES.idea1 },
    { id: 'j4', title: 'همکاری با دولت: چالش‌ها و فرصت‌ها', author: 'نرگس صادقی', category: 'حکمرانی محلی و سیاست‌گذاری', readTime: '۱۰ دقیقه', desc: 'تجربه همکاری با سازمان‌های دولتی در پروژه‌های اجتماعی.', tags: ['دولت','همکاری'], points: 50, likes: 134, comments: 14, date: '۱۴۰۴', image: IMAGES.events },
    { id: 'j5', title: 'هنر به عنوان ابزار تغییر اجتماعی', author: 'امیر حسینی', category: 'هنر و صنایع خلاق', readTime: '۹ دقیقه', desc: 'تجربه استفاده از هنر برای ایجاد تغییرات اجتماعی در محلات.', tags: ['هنر','تغییر'], points: 48, likes: 167, comments: 18, date: '۱۴۰۴', image: IMAGES.book1 }
  ],
  library: [
    { id: 'b1', title: 'طراحی برای دنیای واقعی', author: 'ویکتور پاپانک', category: 'طراحی', pages: 280, desc: 'کلاسیک‌ترین کتاب در زمینه طراحی مسئولانه اجتماعی.', tags: ['طراحی','پایداری'], points: 60, rating: 4.7, image: IMAGES.book1 },
    { id: 'b2', title: 'نوآوری اجتماعی در عمل', author: 'مایکل نورتون', category: 'نوآوری', pages: 320, desc: 'راهنمای عملی برای شروع و اجرای پروژه‌های نوآوری اجتماعی.', tags: ['نوآوری','عملی'], points: 70, rating: 4.5, image: IMAGES.idea1 },
    { id: 'b3', title: 'اقتصاد چرخشی', author: 'الن مک‌آرتور', category: 'اقتصاد', pages: 240, desc: 'معرفی مدل اقتصاد چرخشی و کاربرد آن در کسب‌وکارهای اجتماعی.', tags: ['اقتصاد','چرخشی'], points: 55, rating: 4.6, image: IMAGES.tool1 },
    { id: 'b4', title: 'تفکر سیستمی', author: 'پیتر سنگه', category: 'تفکر', pages: 400, desc: 'اصول و کاربردهای تفکر سیستمی در سازمان‌ها و جوامع.', tags: ['سیستم','تفکر'], points: 65, rating: 4.8, image: IMAGES.film2 },
    { id: 'b5', title: 'سازمان یادگیرنده', author: 'پیتر سنگه', category: 'مدیریت', pages: 360, desc: 'چگونه سازمان‌هایی بسازیم که دائماً در حال یادگیری باشند.', tags: ['مدیریت','یادگیری'], points: 60, rating: 4.7, image: IMAGES.journey1 }
  ]
};

export const SECTIONS: Record<string, any> = {
  academy: { key: 'academy', title: 'آکادمی نوآوری', subtitle: 'آکادمی نوآوری نوآفر', color: '#ED3F86', colorLight: '#F472A6', desc: 'مجموعه‌ای از دوره‌های آموزشی برای یادگیری مفاهیم و مهارت‌های نوآوری اجتماعی', icon: 'academy' },
  toolbox: { key: 'toolbox', title: 'جعبه ابزار', subtitle: 'جعبه ابزار نوآوری', color: '#FFCC6D', colorLight: '#FFD98C', desc: 'ابزارها، تکنیک‌ها و روش‌های عملی برای طراحی و اجرای پروژه‌های اجتماعی', icon: 'toolbox' },
  ideas: { key: 'ideas', title: 'ایده‌ها', subtitle: 'بانک ایده‌های نوآورانه', color: '#FFCC6D', colorLight: '#FFD98C', desc: 'ایده‌های نوآورانه برای حل مسائل اجتماعی که می‌توانید از آنها الهام بگیرید', icon: 'ideas' },
  events: { key: 'events', title: 'رویدادها', subtitle: 'دورهمی نوآوری', color: '#73CFED', colorLight: '#9DDCF0', desc: 'کارگاه‌ها، وبینارها و رویدادهای حضوری و آنلاین نوآوری اجتماعی', icon: 'events' },
  journey: { key: 'journey', title: 'سفر نوآوری', subtitle: 'تجربه‌های نوآورانه', color: '#ED3F86', colorLight: '#F472A6', desc: 'تجربه‌های واقعی فعالان حوزه نوآوری اجتماعی از مسیر موفقیت و شکست', icon: 'journey' },
  library: { key: 'library', title: 'کتابخانه', subtitle: 'کتابخانه نوآوری', color: '#73CFED', colorLight: '#9DDCF0', desc: 'کتاب‌ها، جزوات و منابع خواندنی در حوزه نوآوری اجتماعی', icon: 'library' }
};

export const ACADEMY_CATEGORIES = ['همه', 'شناخت مسئله', 'ایده‌پردازی و خلاقیت', 'تفکر طراحی', 'نوآوری و کارآفرینی اجتماعی'];
export const TOOLBOX_CATEGORIES = ['همه', 'شناخت و تعریف مسئله', 'مخاطب‌شناسی', 'ایده‌پردازی و خلاقیت', 'نمونه‌سازی و اعتبارسنجی ایده', 'اجرای ایده'];
export const TOOLBOX_FORMATS = ['همه', 'بوم', 'بازی', 'سناریو', 'دیجیتال', 'فایل'];
export const JOURNEY_CATEGORIES = ['همه', 'اشتغال و معیشت', 'سلامت و بهداشت', 'خانواده و سبک زندگی', 'تعلیم و تربیت', 'محیط‌زیست', 'حکمرانی محلی و سیاست‌گذاری', 'رسانه و فضای دیجیتال', 'تفریح و سرگرمی و نشاط اجتماعی', 'فرهنگ و آئین‌ها', 'هنر و صنایع خلاق'];
