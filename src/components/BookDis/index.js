import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BookDis = ({ siteLang, userAuth }) => {
    const downloadLinks = {
        en: './PDF/book-En.pdf',
        ar: './PDF/book-Ar.pdf',
    };
    const downloadLink = downloadLinks[siteLang] || downloadLinks.ar;

    const bookCovers = {
        en: './img/bookEn.jpeg',
        ar: './img/bookAr.jpeg',
    };
    const bookCover = bookCovers[siteLang] || bookCovers.ar;

    const downloadLables = {
        en: 'Download',
        fa: 'دریافت کتاب',
        ar: 'تحميل الكتاب',
    };
    const downloadLabel = downloadLables[siteLang] || downloadLables.ar;

    const descriptions = {
        fa: `تصورش هم سخت است می‌گفت فکر کن! دیوارهای منزلت پائین می‌آیند و کسی که عامل ویرانی آن است با کمال خونسردی و وقاحت بگوید که برایش مهم نیست و اصلا مسئولیت خطایش را نپذیرد.
می گفت فکر کن! چه ترسی داشتم از دست خالی و بی پول، بی هیچ حامی و کمکی ، تنهای تنها و با آدمهایی که خودخواه هستند.
دروغ نمی‌گویم .خیلی نمی فهمیدمش. ماجرایش مسئله من نبود. اما خانه برای دوستم مسئله بود. خانه‌ای که با سختی و زحمت تهیه کرده و قرار بود مابقی روزهای عمر و زندگیش را در این خانه بگذراند.
خانه‌ای که دیوارهایش برای او مسئله شده بود.
ما چه می فهمیم وقتی یک خانه، منزل، یک زندگی یا خاطرات و خاکت را به زور و کشتار ، با وقاحت و پررویی از تو می گیرند. یعنی چه؟
این فقط از دست دادن اینهایی که گفتم نیست از دست رفتن همه آدم است . زخم خوردن غرور و تحقیر است. آدمی که خودش و نسل های قبل و احتمالا بعدش یکه و تنها در جهان معاصر تحقیر شده، زخمی ، بی خانمان و بی خاطرات می‌شود مملو از خشم است. خشمی که امیدوار است بالاخره روزی دامان ظالم را بگیرد. آدمهای سرخورده و عصبانی و اندوهگین ، اخراج شده از سرزمین آبا و اجدادی قرار است چگونه زندگی را تجربه کند؟ اصلا زندگی با همه جزئیاتش برای آنها چگونه جریانی است؟
زیستن در خاورمیانه تومنی صنار با هر جای دیگر دنیا ، حتی آفریقایی که گُرده‌اش از تازیانه نژادپرستی و آپارتاید زخمی است توفیر دارد.
زیستن در خاورمیانه قواعد خودش را دارد. با جنگ و تجاوز و خون و داغ تاریخش را نوشته‌اند. کافی است مدتی را در خارج از ایران زندگی کنید خاصه اروپا ، آمریکا و یا کانادا .خیلی زود متوجه روند متفاوت ریزش اطلاعات از سمت رسانه‌ها خواهید شد. بر خلاف آنجا تقریبا در همه بخش‌های خبری ایران اخباری از فلسطین و تقابل با اسرائیل خواهید شنید. آنقدر یکنواخت و شبیه به هم شنیده‌ایم که تصور می‌کنیم همه چیز را خوب و یا حتی کمی هم زیادی می‌دانیم. اما بگذارید صریح با شما بگویم که ما زیاد شنیده‌ایم اما خیلی کم می‌دانیم. این زیاده شنیدن و جریان بی‌خلاقیت اخبار فلسطین عملا دیده شدن رمانی با موضوع آن را با مخاطرات جدی روبرو می‌کند.
رمان من پناهنده نیستم در چهارصد و شصت نوشته شده است تا این تصور غلط در خواننده را از بین ببرد و یا حداقل با چالش جدی مواجه کند.
«رضوی عاشور» بانوی نویسنده فلسطینی داستان آوارگی و تجاوز به روح و غرور آدمها را از منظر و نگاهی زنانه روایت می‌کند.
من پناهنده نیستم، زندگی یک خانواده فلسطینی اهل طنطوره – روستایی ساحلی است که در 49 کیلومتری حیفا در جنوب فلسطین واقع شده – را به تصویر می‌کشد که به علت حمله اسرائیلی‌ها از سرزمین خود کوچ می‌کنند. شخصیت اصلی و قهرمان داستان زنی به نام رقیه است. او به اصرار پسرش حسن داستان زندگی خود را تعریف می‌کند.
این رمان روایت پناهندگی فلسطینیان و جنگ داخلی لبنان و حمله اسراییل به این کشور است، رنج هجرت و قتل عام و وقایع بزرگی که بعد از پیمان اوسلو بر سر فلسطین آمده است؛ همه این روایات چنان با جزئیات دقیقی بیان می‌شود که یکی از مهمترین رمان‌های مربوط به واقعه 1948 فلسطین در ادبیات روایی عرب را رقم می‌زند. حکایتی از مصیبت ملت فلسطین و اجبار آنان برای خروج از سرزمین و وطنشان و زندگی تلخ در نقاط مختلف جهان به امید بازگشت به وطن.
رضوی عاشور در این اثر چنان از فلسطین و سنت‌های آن می‌نویسد، که گویی در آنجا زندگی می‌کند. البته این یکی از ویژگی‌های مثبت و از ویژگی‌های سبک نوشتاری عاشور است که در دیگر آثار او نیز به خوبی قابل مشاهده است. پرداختن به جزئیات زندگی، سنت‌ها و آیین‌ها، دغدغه‌های یک فلسطینی به صورت پیوسته در کتاب دیده می‌شود؛ هرچند ممکن است گاه برای مخاطب ملال‌انگیز شود.
رقیه، شخصیت اصلی این داستان، قصه زندگی خانواده‌اش را از کودکی تا بزرگسالی روایت می‌کند. «رقیه» در واقع نمادی است از تمام جوانان فلسطینی که دوره تاریخی سختی را پشت سر می‌گذارند. «من پناهنده نیستم» نماینده‌ای است برای معرفی میراث فلسطین از عادات و سبک زندگی گرفته تا آهنگ‌ها و موسیقی.
رقیه راوی داستان به اصرار پسرش «حسن» خاطراتش را می‌نویسد. نظم حاکم بر داستان به ساختار خاطره نویسی تنه می‌زند اما در یک پلان کلی کاملا شکل رمان دارد برای علت این ادعا علاوه بر زاویه دید و شخصیت های داستان باید به رفت و برگشت های زمانی هم اشاره بکنم. گاهی رقیه سیزده ساله از سال 1948 به هفتاد سالگی و زمان حالش در کانادا می آید نویسنده با این ترفند علاوه بر تشدید فرم داستانی در کل اثر از ملال در طول داستان هم جلوگیری می‌کند.
نام فلسطین با جنگ و گلوله و فریاد و تلاش برای حفظ خانه و خاک گره خورده است. اخراج از خاک و خانه یک بخش ماجرای زندگی آنهاست؛ اسکان در اردوگاه‌های پناهندگی در چادر با حداقل امکانات در حالی که هیچ یاور و فریادرسی در هیچ جای جهان نداری( یک تنهایی عمیق و بی کف و سقف) بخش مهم‌تری از زیست فلسطینیهاست. برای همین نویسنده به واسطه زن بودن محور داستانش را دقیقا زندگی در همین شرایط قرار داده است یعنی علاوه بر روایت همه آنچه مسبب رنج ، خشم و اندوه است مانند مواجهه با فجایعی مانند کشتار در صبرا و شتیلا ، امید مادران برای بازگشت فرزندانی که در جریان اخراج و یا جنگ با متجاوز مفقود شده اند ؛ اشاره به بخش‌های دیگری از زندگی فلسطینی ها مانند غذاها و خوراکی های محلی و بومی ، ناجی علی کاریکاتوریست معروف ، گلدوزی لباس زنان فلسطینی با همه جزئیاتش به آشنا شدن با شکل گیری روند منطقی حیات با مختصات آوارگی کمک می‌کند . عنصر فرهنگ و هنر در کنار مولفه‌های سیاسی و نظامی قرار گرفته است تا با یک زندگی تمام عیار روبرو باشیم. این قدرت زندگی است که در سخت‌ترین و بدترین شرایط هم خودش را با همه جزئیات تحمیل می‌کند . در واقع خلاقیت نویسنده برای پرداخت داستانی همراه با روایتی لطیف و نرم و زنانه به درک رنج ناشی از زندگی در فلسطین اشغالی و اردوگاه های پناهندگی یاری‌گر خواننده برای درک درست و جامعی از حیات در بخشی از خاورمیانه است.
در کنار همه این موارد باید اضافه کنم هرچند «رقیه» راوی این داستان است، اما نویسنده در همه داستانش مجالی هم برای شخصیت‌های دیگر قصه فراهم می‌کند تا آنها هم حرف بزنند و این راویان متعدد عملا به چند صدایی و مناظر گوناگون در داستان منجر شده است.
در من پناهنده نیستم فقط خانه و سرزمین موضوعیت ندارد بلکه در کنار حفظ آنها ،روایت جنگ و تلاش مادران برای حفظ خانواده از فروپاشی حفظ هویت در میانه پناهندگی ، فرهنگ متفاوت و ساختار دنیای جدید جریان جدی و غالب است. مادران حفظ خانواده را برای برگشت و رجعت به خانه هایشان می خواهند و شاید به همین دلیل باشد که دنیا از منظر رقیه راوی قصه سیاه مطلق نیست. نشان به آن نشان که وقتی بعد از تداوم مبارزات جنبش مقاومت اسلامی لبنان علیه رژیم صهیونیستی و انجام عملیات ¬های موفقیت آمیز آنان و به جای ماندن تلفات سنگین نیروهای اشغالگر، این رژیم مجبور می¬ شود در 24می سال 2000 میلادی (4خرداد 1379) به اشغال 22 ساله لبنان خاتمه دهد و با حقارت از این سرزمین خارج شود نور و امیدی قوی و قدیمی در جان رقیه تابیدن می‌گیرد. همان که رقیه همه عمر پس از آوارگی منتظرش بود. و باز دقیقا به همین دلیل است که او در سن هفتاد سالگی، به آبادی بعد از ویرانی می‌اندیشد و امیدوار است. توصیف نویسنده از مواجهه رقیه با خبر پیروزی حزب‌الله بر اسرائیل، نشان از این امید دارد؛
«عجیب است. این همه اشک از کجا آمده؟ چرا اشک ها به غم و غصه وابسته اند؟ پس اشک های شادی چه؟ نه، نه غم و نه شادی. چیزی بزرگتر است. عمیق تر. پیچیده تر. مثل نگاهت وقتی نوزادی را که همین الآن از تو خارج شده به دست می گیرند. تو خسته و شاید معلق میان مرگ و زندگی با ضعف نگاه می کنی و اشک از چشمهایت جاری می شود. اشکی که نه اشک غم است، نه شادی، بلکه… بلکه چه؟ بالاتر از آن است که با کلمه توصیفش کنم. شاید سرچشمه ای است از یک جای پیچیده درون جسم یا روح یا زمین، مثل سرچشمه غار شرق روستایمان. مادرم می گوید، آب آن مثل آب کوثر گواراست. آب کوثر چیست مادر؟ می گوید، رودخانه ای در بهشت است. عجیب است. چطور طعم رودخانه بهشت را می داند؟ یعنی قبلاً آن را دیده؟»
آنچه جهان و زندگی را نجات می دهد امید همه مادران است و در این میانه سهم مادران فلسطینی بیشتر است.`,

        en: `It is hard to imagine, he said, think! The walls of dignity come down, and the person who is the cause of its destruction should calmly and rudely say that he does not care and does not accept responsibility for his mistake at all.
He said think! I was afraid of being empty-handed and without money, without any support or help, alone and with people who are selfish.
I won't lie. I didn't really understand it. His story was not my problem. But the house was an issue for my friend. A house that he prepared with difficulty and was supposed to spend the rest of his life in this house.
A house whose walls had become an issue for him.
What do we understand when a house, a home, a life or memories and your ashes are taken from you by force and murder, with arrogance and pride. what does it mean?
It's not just the loss of what I said, it's the loss of all people. Getting hurt is pride and humiliation. A person who himself and the generations before and probably after him is humiliated, wounded, homeless and without memories is full of anger. Anger that hopes to finally catch the oppressor one day. Disillusioned, angry and sad people, expelled from the land of their fathers and ancestors, how are they supposed to experience life? How is life with all its details for them?
Living in the Middle East, Tomani Sanar, is different from anywhere else in the world, even Africa, which is scarred by the whip of racism and apartheid.
Living in the Middle East has its own rules. They have written its history with war, aggression, blood and heat. It is enough to live outside of Iran for a while, especially in Europe, America or Canada. You will soon notice the different process of information leakage from the media. Unlike there, you will hear news about Palestine and the conflict with Israel in almost all Iranian news channels. We have heard so many monotonous and similar things that we think we know everything well or even a little too much. But let me tell you frankly that we have heard a lot but know very little. This over-hearing and uncreative flow of Palestinian news actually makes the publication of a novel about it face serious risks.
The novel "I am not a refugee" was written in 460 to eliminate this misconception in the reader or at least to face a serious challenge.
"Razavi Ashour", a Palestinian writer, narrates the story of displacement and violation of people's spirit and pride from a woman's point of view.
I Am Not a Refugee depicts the life of a Palestinian family from Tantourah - a coastal village located 49 kilometers from Haifa in the south of Palestine - who are displaced from their land due to an Israeli attack. The main character and heroine of the story is a woman named Ruqiya. At the insistence of his son Hassan, he tells his life story.
This novel tells the story of the refugees of Palestinians and the civil war in Lebanon and Israel's attack on this country, the suffering of the emigration and massacres and the great events that happened to Palestine after the Oslo Accords. All these narratives are expressed in such precise detail that it is one of the most important novels related to the 1948 incident in Palestine in Arab narrative literature. A story about the plight of the Palestinian nation and their compulsion to leave their land and homeland and live a bitter life in different parts of the world in the hope of returning to their homeland.
In this work, Razavi Ashour writes about Palestine and its traditions as if he lives there. Of course, this is one of the positive features and features of Ashour's writing style, which can also be seen in his other works. Dealing with the details of life, traditions and rituals, the concerns of a Palestinian are continuously seen in the book; However, it may sometimes become boring for the audience.
Ruqiyeh, the main character of this story, tells the story of her family's life from childhood to adulthood. "Ruqayyah" is actually a symbol of all Palestinian youth who are going through a difficult historical period. "I'm not a refugee" is a representation of Palestinian heritage from customs and lifestyle to songs and music.
Roqiyeh, the narrator of the story, writes her memoirs at the insistence of her son "Hasan". The order governing the story is based on the structure of memoir writing, but in a general plan, it has the shape of a novel. For the reason of this claim, in addition to the point of view and the characters of the story, I must also mention the back and forth in time. Sometimes the thirteen-year-old Ruqiyeh turns seventy years old from 1948 and the current time in Canada. With this trick, in addition to intensifying the story form in the whole work, the author also avoids boredom during the story.
The name of Palestine is tied to war, bullets, screams, and efforts to preserve the home and land. Expulsion from land and home is a part of their life story; Living in refugee camps in tents with minimal facilities while you have no helper or cry anywhere in the world (a deep and bottomless loneliness) is a more important part of Palestinian life. Therefore, due to the fact that the author is a woman, the focus of her story is exactly life in these conditions, that is, in addition to narrating everything that causes suffering, anger and sadness, such as facing tragedies such as the massacres in Sabra and Shatila, the hope of mothers for the return of their children who were Deportation or war with the aggressor are missing; Referring to other parts of Palestinian life, such as local and native foods, famous cartoonist Naji Ali, embroidery of Palestinian women's clothes with all its details, helps to get acquainted with the formation of the logical process of life with displacement coordinates. The element of culture and art is placed next to the political and military components so that we can face a full-fledged life. This is the power of life that imposes itself with all the details even in the most difficult and worst conditions. In fact, the author's creativity to tell a story with a gentle and soft and feminine narrative to understand the suffering caused by life in occupied Palestine and refugee camps helps the reader to have a correct and comprehensive understanding of life in a part of the Middle East.
In addition to all these things, I must add that although "Raqiyeh" is the narrator of this story, the author provides opportunities for other characters in the story to speak, and these multiple narrators actually lead to multiple voices and different scenes in the story. Is.
In me, I am not a refugee, only the home and the land are not the issue, but besides preserving them, the narrative of the war and the efforts of mothers to save the family from the collapse of maintaining identity in the middle of the refugee, different culture and the structure of the new world is a serious and dominant trend. Mothers want to preserve the family to return to their homes and maybe that is the reason why the world is not absolute from the perspective of Ruqiya, the narrator of the black story. It shows that after the continuation of the Lebanese Islamic Resistance Movement's campaign against the Zionist regime and their successful operations and instead of the heavy casualties of the occupying forces, this regime is forced on May 24, 2000 To end the 22-year occupation of Lebanon and leave this land with humiliation, a strong and old hope shines in the soul of Ruqiya. The one Ruqiya was waiting for all her life after being displaced. And again, this is precisely the reason why, at the age of 70, he thinks and hopes for a settlement after the destruction. The author's description of Ruqiya's encounter with the news of Hezbollah's victory over Israel shows this hope;
"It is strange. Where did all these tears come from? Why are tears related to sadness? So what about happy tears? No, neither sadness nor joy. Something bigger. deeper more complicated Like your look when they hold a baby that has just come out of you. You look tired and maybe suspended between life and death with weakness and tears flow from your eyes. A tear that is not a tear of sadness or happiness, but... but what? It is beyond words to describe. Maybe it is a source from a complex place inside the body or soul or the earth, like the source of the cave in the east of our village. My mother says, its water is like the water of Kausar Guvar. What is koshar water, mother? He says, there is a river in heaven. It is strange. How does he know the taste of the paradise river? You mean you've seen it before?"
What saves the world and life is the hope of all mothers, and in this middle the contribution of Palestinian mothers is more.`,

        ar: `وقال إنه من الصعب أن نتخيل، فكر! تسقط أسوار الكرامة، وعلى الشخص الذي كان سببا في هدمها أن يقول بهدوء ووقاحة إنه لا يبالي ولا يتحمل مسؤولية خطأه على الإطلاق.
قال فكر! كنت أخشى أن أكون خالي الوفاض، بلا مال، بلا أي دعم أو مساعدة، وحيدًا ومع أناس أنانيين.
لن أكذب، لم أفهم الأمر حقًا. قصته لم تكن مشكلتي. لكن المنزل كان مشكلة بالنسبة لصديقي. المنزل الذي أعده بصعوبة وكان من المفترض أن يقضي بقية حياته في هذا المنزل.
المنزل الذي أصبحت جدرانه مشكلة بالنسبة له.
ماذا نفهم عندما ينتزع منك بيت أو بيت أو حياة أو ذكريات ورمادك بالقوة والقتل بكل غطرسة وكبرياء. ماذا يعني ذلك؟
لا يتعلق الأمر بخسارة ما قلته فحسب، بل بخسارة جميع الأشخاص. التعرض للأذى هو فخر وإذلال. الشخص الذي يعاني هو نفسه والأجيال التي سبقته وربما بعده من الإذلال والجرحى والمشردين وبلا ذكريات، مليء بالغضب. الغضب الذي يأمل أن يمسك الظالم أخيرًا يومًا ما. شعب خائب الأمل، غاضب وحزين، مطرود من أرض آبائه وأجداده، كيف يفترض أن يعيش الحياة؟ كيف هي الحياة بكل تفاصيلها بالنسبة لهم؟
العيش في الشرق الأوسط، توماني سانار، يختلف عن أي مكان آخر في العالم، حتى أفريقيا، التي شوهتها سوط العنصرية والفصل العنصري.
العيش في الشرق الأوسط له قواعده الخاصة. لقد كتبوا تاريخها بالحرب والعدوان والدم والحرارة. يكفي أن تعيش خارج إيران لفترة من الوقت، خاصة في أوروبا أو أمريكا أو كندا، وستلاحظ قريبًا اختلاف عملية تسرب المعلومات من وسائل الإعلام. وعلى عكس ما يحدث هناك، ستسمع أخبارًا عن فلسطين والصراع مع إسرائيل في جميع القنوات الإخبارية الإيرانية تقريبًا. لقد سمعنا الكثير من الأشياء الرتيبة والمشابهة لدرجة أننا نعتقد أننا نعرف كل شيء جيدًا أو حتى أكثر من اللازم. ولكن اسمحوا لي أن أقول لكم بصراحة أننا سمعنا الكثير ولكننا نعرف القليل جدًا. إن هذا التدفق المفرط وغير الإبداعي للأخبار الفلسطينية يجعل نشر رواية عنها يواجه مخاطر جدية.
رواية "أنا لست لاجئاً" كتبت عام 460 لتزيل هذا الفهم الخاطئ لدى القارئ أو على الأقل لمواجهة تحدي جدي.
"رضوي عاشور" كاتبة فلسطينية تروي قصة التهجير وانتهاك روح الناس وكبريائهم من وجهة نظر المرأة.
"أنا لست لاجئًا" يصور حياة عائلة فلسطينية من الطنطورة - قرية ساحلية تقع على بعد 49 كيلومترًا من حيفا في جنوب فلسطين - نزحت من أراضيها بسبب هجوم إسرائيلي. الشخصية الرئيسية وبطلة القصة هي امرأة تدعى رقية. وبإصرار من ابنه حسن يروي قصة حياته.
تحكي هذه الرواية قصة اللاجئين الفلسطينيين والحرب الأهلية في لبنان والهجوم الإسرائيلي على هذا البلد ومعاناة الهجرة والمجازر والأحداث الكبيرة التي حدثت لفلسطين بعد اتفاقيات أوسلو. وقد تم التعبير عن كل هذه الروايات بتفصيل دقيق جعلها من أهم الروايات المرتبطة بحادثة فلسطين عام 1948 في الأدب السردي العربي. قصة عن محنة الشعب الفلسطيني وإجبارهم على ترك أرضهم ووطنهم وعيش حياة مريرة في أنحاء مختلفة من العالم على أمل العودة إلى وطنهم.
يكتب رضوي عاشور في هذا العمل عن فلسطين وتقاليدها وكأنه يعيش هناك. وبالطبع، هذه إحدى السمات والملامح الإيجابية لأسلوب عاشور في الكتابة، والتي يمكن رؤيتها أيضًا في أعماله الأخرى. يتناول الكتاب تفاصيل الحياة والتقاليد والطقوس، وهموم الفلسطيني تظهر بشكل مستمر في الكتاب؛ ومع ذلك، قد يصبح الأمر مملاً في بعض الأحيان للجمهور.
رقية، الشخصية الرئيسية في هذه القصة، تحكي قصة حياة عائلتها منذ الطفولة وحتى البلوغ. "رقية" هي في الواقع رمز لكل الشباب الفلسطيني الذي يمر بمرحلة تاريخية صعبة. "أنا لست لاجئا" هي تمثيل للتراث الفلسطيني من العادات وأسلوب الحياة إلى الأغاني والموسيقى.
رقية راوية القصة تكتب مذكراتها بإصرار من ابنها "حسن". إن الترتيب الذي يحكم القصة يعتمد على بنية كتابة المذكرات، ولكنها في المخطط العام لها شكل الرواية، ولهذا السبب، بالإضافة إلى وجهة النظر وشخصيات القصة، فإنني يجب أن أذكر أيضا ذهابا وإيابا في الوقت المناسب. أحيانًا تبلغ رقية البالغة من العمر ثلاثة عشر عامًا سبعين عامًا منذ عام 1948 والوقت الحالي في كندا، بهذه الحيلة، بالإضافة إلى تكثيف شكل القصة في العمل بأكمله، يتجنب المؤلف أيضًا الملل أثناء القصة.
اسم فلسطين مرتبط بالحرب والرصاص والصراخ والسعي للحفاظ على الوطن والأرض. الطرد من الأرض والوطن جزء من قصة حياتهم؛ إن العيش في مخيمات اللاجئين في خيام ذات الحد الأدنى من المرافق بينما لا يوجد لديك من يعينك أو تبكي في أي مكان في العالم (وحدة عميقة لا نهاية لها) هو جزء أكثر أهمية من الحياة الفلسطينية. لذلك، وبما أن الكاتبة امرأة، فإن محور قصتها هو بالضبط الحياة في هذه الظروف، أي بالإضافة إلى سرد كل ما يسبب المعاناة والغضب والحزن، مثل مواجهة المآسي مثل المجازر في صبرا وشاتيلا، أمل الأمهات في عودة أبنائهن الذين تعرضوا للتهجير أو الحرب مع المعتدي مفقود؛ وبالإشارة إلى أجزاء أخرى من الحياة الفلسطينية، مثل الأطعمة المحلية والوطنية، يساعد رسام الكاريكاتير الشهير ناجي علي، في تطريز ملابس المرأة الفلسطينية بكل تفاصيلها، على التعرف على تشكيل العملية المنطقية للحياة بإحداثيات النزوح. ويتم وضع عنصر الثقافة والفن بجانب العنصر السياسي والعسكري حتى نتمكن من مواجهة حياة كاملة الأركان. هذه هي قوة الحياة التي تفرض نفسها بكل تفاصيلها حتى في أصعب الظروف وأسوأها. وفي الواقع، فإن إبداع المؤلف في سرد ​​قصة بسرد لطيف وناعم وأنثوي لفهم المعاناة التي تسببها الحياة في فلسطين المحتلة ومخيمات اللاجئين يساعد القارئ على الحصول على فهم صحيح وشامل للحياة في جزء من الشرق الأوسط. .
بالإضافة إلى كل هذه الأمور، يجب أن أضيف أنه على الرغم من أن "رقية" هي راوية هذه القصة، إلا أن المؤلف يوفر الفرص لشخصيات أخرى في القصة للتحدث، وتعدد هؤلاء الرواة يؤدي في الواقع إلى تعدد الأصوات ومشاهد مختلفة في القصة . يكون.
في داخلي، أنا لست لاجئة، ليس القضية سوى الوطن والأرض، ولكن إلى جانب الحفاظ عليهما، رواية الحرب وجهود الأمهات لإنقاذ الأسرة من انهيار الحفاظ على الهوية وسط الحرب. فاللاجئون والثقافات المختلفة وبنية العالم الجديد هي اتجاه جدي ومهيمن. ترغب الأمهات في الحفاظ على الأسرة حتى تعود إلى بيوتها وربما هذا هو السبب في أن العالم ليس مطلقًا من وجهة نظر رقية راوية القصة السوداء. ويظهر أنه بعد استمرار حملة حركة المقاومة الإسلامية اللبنانية ضد النظام الصهيوني وعملياتها الناجحة وبدلا من الخسائر الفادحة لقوات الاحتلال، يضطر هذا النظام في 24 مايو 2000 إلى إنهاء احتلال لبنان الذي دام 22 عاما. وتترك هذه الأرض بالذل، فيشرق أمل قوي وقديم في نفس رقية. رقية التي كانت تنتظرها طوال حياتها بعد نزوحها. ومرة أخرى، هذا هو بالضبط السبب الذي جعله يفكر ويأمل، وهو في السبعين من عمره، في التوصل إلى تسوية بعد الدمار. ويبين وصف المؤلف للقاء رقية بخبر انتصار حزب الله على إسرائيل هذا الأمل؛
"هذا غريب. من أين أتت كل هذه الدموع؟ لماذا ترتبط الدموع بالحزن؟ فماذا عن الدموع السعيدة؟ لا، لا حزن ولا فرح. شيء أكبر. أعمق أكثر تعقيدا مثل مظهرك عندما يحملون طفلاً خرج للتو منك. تبدو متعباً وربما معلقاً بين الحياة والموت مع الضعف والدموع تتدفق من عينيك. دمعة ليست دمعة حزن أو سعادة بل...ولكن ماذا؟ إنها أبعد من الكلمات لوصفها. وربما يكون مصدراً من مكان معقد داخل الجسد أو الروح أو الأرض، مثل منبع الكهف الذي يقع شرق قريتنا. تقول والدتي ماؤها مثل ماء كوثر جوفار. ما هو ماء الكشر يا أمي؟ فيقول: إن في السماء نهراً. هذا غريب. وكيف يعرف طعم نهر الجنة؟ هل تعني أنك رأيته من قبل؟"
إن ما ينقذ العالم والحياة هو أمل كل الأمهات، وفي هذا الوسط تكون مساهمة الأمهات الفلسطينيات أكبر.`,
    };
    const discription = descriptions[siteLang] || descriptions.ar;

    const modalMessages = {
        en: 'Please Login to Download',
        ar: 'يرجى تسجيل الدخول للتنزيل',
    };
    const modalMessage = modalMessages[siteLang] || modalMessages.ar;

    const [showModal, setShowModal] = useState(false);
    const handleButtonClick = () => {
        if (userAuth) {
            const link = document.createElement('a');
            link.href = downloadLink;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            setShowModal(true);
        }
    };

    return (
        <div
            className="bg-success py-4 container-fluid d-flex justify-content-center p-0 m-0"
        >
            <div className="col-12 col-md-8">
                <div className={"d-flex flex-column flex-md-row align-items-center align-items-md-stretch " + (siteLang === 'en' ? 'flex-md-row-reverse' : null)}>
                    <img
                        src={bookCover}
                        className="bookCoverImg img-fluid rounded"
                        alt="Arabic Cover"
                    />
                    <div className={"mt-3 mt-md-0 flex-fill d-flex flex-column align-items-center " + (siteLang === 'en' ? 'me-0 me-md-3 align-items-md-end' : 'ms-0 ms-md-3 align-items-md-start')}>
                        <div className={"bookDisTxt mb-3 " + (siteLang === "en" ? "pe-2 tDirectionL" : "ps-2 tDirectionR")}   >
                            {discription}
                        </div>
                        <>
                            <div>
                                <button
                                    type="button"
                                    className="btn btn-outline-light px-5 mx-4 mt-2"
                                    onClick={handleButtonClick}
                                >
                                    {downloadLabel}
                                </button>
                            </div>
                            <div
                                className={`modal fade${showModal ? ' show' : ''}`}
                                tabIndex="-1"
                                role="dialog"
                                style={{ display: showModal ? 'block' : 'none' }}
                            >
                                <div
                                    className={`modal fade${showModal ? ' show' : ''}`}
                                    tabIndex="-1"
                                    role="dialog"
                                    style={{ display: showModal ? 'block' : 'none' }}
                                >
                                    <div className="modal-dialog modal-sm" role="document">
                                        <div className="modal-content">
                                            <div className={"modalContainer d-flex justify-content-between align-items-center " + (siteLang === 'ar' ? 'flex-row-reverse' : 'flex-reverse')}>
                                                <div className="modalHeader">{modalMessage}</div>
                                                <FontAwesomeIcon
                                                    icon="fas fa-close"
                                                    type="button"
                                                    className="fas fa-close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    onClick={() => setShowModal(false)} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDis