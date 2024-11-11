--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.django_content_type VALUES (1, 'admin', 'logentry');
INSERT INTO public.django_content_type VALUES (2, 'auth', 'permission');
INSERT INTO public.django_content_type VALUES (3, 'auth', 'group');
INSERT INTO public.django_content_type VALUES (4, 'contenttypes', 'contenttype');
INSERT INTO public.django_content_type VALUES (5, 'sessions', 'session');
INSERT INTO public.django_content_type VALUES (6, 'profiles', 'appuser');
INSERT INTO public.django_content_type VALUES (7, 'services', 'service');
INSERT INTO public.django_content_type VALUES (8, 'events', 'event');
INSERT INTO public.django_content_type VALUES (9, 'escaperooms', 'escaperoom');


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.auth_permission VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO public.auth_permission VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO public.auth_permission VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO public.auth_permission VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO public.auth_permission VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO public.auth_permission VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO public.auth_permission VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO public.auth_permission VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO public.auth_permission VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO public.auth_permission VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO public.auth_permission VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO public.auth_permission VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO public.auth_permission VALUES (13, 'Can add content type', 4, 'add_contenttype');
INSERT INTO public.auth_permission VALUES (14, 'Can change content type', 4, 'change_contenttype');
INSERT INTO public.auth_permission VALUES (15, 'Can delete content type', 4, 'delete_contenttype');
INSERT INTO public.auth_permission VALUES (16, 'Can view content type', 4, 'view_contenttype');
INSERT INTO public.auth_permission VALUES (17, 'Can add session', 5, 'add_session');
INSERT INTO public.auth_permission VALUES (18, 'Can change session', 5, 'change_session');
INSERT INTO public.auth_permission VALUES (19, 'Can delete session', 5, 'delete_session');
INSERT INTO public.auth_permission VALUES (20, 'Can view session', 5, 'view_session');
INSERT INTO public.auth_permission VALUES (21, 'Can add app user', 6, 'add_appuser');
INSERT INTO public.auth_permission VALUES (22, 'Can change app user', 6, 'change_appuser');
INSERT INTO public.auth_permission VALUES (23, 'Can delete app user', 6, 'delete_appuser');
INSERT INTO public.auth_permission VALUES (24, 'Can view app user', 6, 'view_appuser');
INSERT INTO public.auth_permission VALUES (25, 'Can add service', 7, 'add_service');
INSERT INTO public.auth_permission VALUES (26, 'Can change service', 7, 'change_service');
INSERT INTO public.auth_permission VALUES (27, 'Can delete service', 7, 'delete_service');
INSERT INTO public.auth_permission VALUES (28, 'Can view service', 7, 'view_service');
INSERT INTO public.auth_permission VALUES (29, 'Can add event', 8, 'add_event');
INSERT INTO public.auth_permission VALUES (30, 'Can change event', 8, 'change_event');
INSERT INTO public.auth_permission VALUES (31, 'Can delete event', 8, 'delete_event');
INSERT INTO public.auth_permission VALUES (32, 'Can view event', 8, 'view_event');
INSERT INTO public.auth_permission VALUES (33, 'Can add escape room', 9, 'add_escaperoom');
INSERT INTO public.auth_permission VALUES (34, 'Can change escape room', 9, 'change_escaperoom');
INSERT INTO public.auth_permission VALUES (35, 'Can delete escape room', 9, 'delete_escaperoom');
INSERT INTO public.auth_permission VALUES (36, 'Can view escape room', 9, 'view_escaperoom');


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles_appuser; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.profiles_appuser VALUES (2, 'pbkdf2_sha256$870000$BL7eXd5GFT7owQ2ZBIHW3O$Ka8Nh16bTjGDMc+Lq27ZL5pEsaEebqK2KAEODXiag7M=', NULL, NULL, 'gencho@abv.bg', false, false);
INSERT INTO public.profiles_appuser VALUES (1, 'pbkdf2_sha256$870000$RhXlJMuKopZQMzsi9IgXR0$RCKf096vQvTtZdrYtBaaSkJpCCOydUuVPrvJdHwTL5M=', '2024-10-02 15:47:01.989295+03', NULL, 'pesho@pesho.com', true, true);
INSERT INTO public.profiles_appuser VALUES (5, 'pbkdf2_sha256$870000$9bkgoNADDhPPeO9uyr1WG7$6dhKBTbRzUidUJ/KKmCbqE9ywN3UU4ZiomePpGA1Zok=', NULL, 21, 'tosho@tosho.com', false, false);
INSERT INTO public.profiles_appuser VALUES (6, 'pbkdf2_sha256$870000$kQTXEYXTHTG9zXkH228qou$QOYDrUBaV6bYyfakKYpRMEbAqtdBzIHtmjiJP9KdhK8=', NULL, 52, 'ada@abv.bg', false, false);
INSERT INTO public.profiles_appuser VALUES (17, 'pbkdf2_sha256$870000$oHpckIFsjEVsBVYWKlFMLI$tCFhCThib+syOfsSv26Dk+TcOXtRaG8L+WCCv1LsAxY=', NULL, 23, 'mo3ak@gbg.bg', false, false);
INSERT INTO public.profiles_appuser VALUES (18, 'pbkdf2_sha256$870000$bVyTW0vP8txtVcclcqscQg$BlgQq2TSCooNRUPcwAaZ9lEJyvVqps8Ea3watyz+Mmg=', NULL, 21, 'georgi.taschev@gmail.com', false, false);
INSERT INTO public.profiles_appuser VALUES (8, 'pbkdf2_sha256$870000$6LvgUh2Dt85dEXaMXsbMRr$5UYDPNY8+5zNZX4m9FmcVJIbWIGCH7FfUaj7XDjOg2s=', '2024-10-16 14:02:50.131872+03', NULL, 'gosho@gosho.com', true, true);
INSERT INTO public.profiles_appuser VALUES (19, 'pbkdf2_sha256$870000$8tUEcxWDbBerdEjaWYUhr0$zNVu3ToD+YBBeNI7b2DHsfhVyyNBhdz2NJtBBYNs7oA=', NULL, 34, 'gencho@gencho.com', false, false);
INSERT INTO public.profiles_appuser VALUES (21, 'pbkdf2_sha256$870000$qNgh3v86Nb4Tq8qRwhsqx0$HFLyaRqOB5QyFPoGda9A8w1Q4ZjLgnujBhmxpR/UYz8=', NULL, 25, 'ivan@ivan.com', false, false);
INSERT INTO public.profiles_appuser VALUES (22, 'pbkdf2_sha256$870000$CrmiR2oKbzyGqAAnE7Z4wn$fefI+U0hpALbx5JOBZVsaM6Ok29Wxq1OHaQ5Fiz6LyQ=', NULL, 25, 'pesho@ivan.com', false, false);
INSERT INTO public.profiles_appuser VALUES (23, 'pbkdf2_sha256$870000$Uf4P7FkwforXiF53Xk79Vc$yNmgs9pALiG4raJVLhaj5hXaph79gwhd78OjLNjTqKY=', NULL, 25, 'boncho@boncho.com', false, false);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.django_migrations VALUES (1, 'profiles', '0001_initial', '2024-09-30 13:47:20.91042+03');
INSERT INTO public.django_migrations VALUES (2, 'contenttypes', '0001_initial', '2024-09-30 13:47:20.924385+03');
INSERT INTO public.django_migrations VALUES (3, 'admin', '0001_initial', '2024-09-30 13:47:20.96614+03');
INSERT INTO public.django_migrations VALUES (4, 'admin', '0002_logentry_remove_auto_add', '2024-09-30 13:47:20.96614+03');
INSERT INTO public.django_migrations VALUES (5, 'admin', '0003_logentry_add_action_flag_choices', '2024-09-30 13:47:20.974365+03');
INSERT INTO public.django_migrations VALUES (6, 'contenttypes', '0002_remove_content_type_name', '2024-09-30 13:47:20.985019+03');
INSERT INTO public.django_migrations VALUES (7, 'auth', '0001_initial', '2024-09-30 13:47:21.041027+03');
INSERT INTO public.django_migrations VALUES (8, 'auth', '0002_alter_permission_name_max_length', '2024-09-30 13:47:21.056965+03');
INSERT INTO public.django_migrations VALUES (9, 'auth', '0003_alter_user_email_max_length', '2024-09-30 13:47:21.062313+03');
INSERT INTO public.django_migrations VALUES (10, 'auth', '0004_alter_user_username_opts', '2024-09-30 13:47:21.067505+03');
INSERT INTO public.django_migrations VALUES (11, 'auth', '0005_alter_user_last_login_null', '2024-09-30 13:47:21.070649+03');
INSERT INTO public.django_migrations VALUES (12, 'auth', '0006_require_contenttypes_0002', '2024-09-30 13:47:21.070649+03');
INSERT INTO public.django_migrations VALUES (13, 'auth', '0007_alter_validators_add_error_messages', '2024-09-30 13:47:21.075505+03');
INSERT INTO public.django_migrations VALUES (14, 'auth', '0008_alter_user_username_max_length', '2024-09-30 13:47:21.079881+03');
INSERT INTO public.django_migrations VALUES (15, 'auth', '0009_alter_user_last_name_max_length', '2024-09-30 13:47:21.081917+03');
INSERT INTO public.django_migrations VALUES (16, 'auth', '0010_alter_group_name_max_length', '2024-09-30 13:47:21.090433+03');
INSERT INTO public.django_migrations VALUES (17, 'auth', '0011_update_proxy_permissions', '2024-09-30 13:47:21.095026+03');
INSERT INTO public.django_migrations VALUES (18, 'auth', '0012_alter_user_first_name_max_length', '2024-09-30 13:47:21.095026+03');
INSERT INTO public.django_migrations VALUES (19, 'sessions', '0001_initial', '2024-09-30 13:47:21.120057+03');
INSERT INTO public.django_migrations VALUES (20, 'profiles', '0002_appuser_is_superuser', '2024-09-30 13:49:44.269332+03');
INSERT INTO public.django_migrations VALUES (21, 'profiles', '0003_appuser_has_module_perms', '2024-10-02 15:51:37.627957+03');
INSERT INTO public.django_migrations VALUES (22, 'profiles', '0004_remove_appuser_has_module_perms_appuser_groups_and_more', '2024-10-02 16:06:14.464959+03');
INSERT INTO public.django_migrations VALUES (23, 'services', '0001_initial', '2024-10-08 10:53:36.352961+03');
INSERT INTO public.django_migrations VALUES (24, 'services', '0002_alter_service_imageurl', '2024-10-08 15:12:44.046616+03');
INSERT INTO public.django_migrations VALUES (25, 'events', '0001_initial', '2024-10-17 11:47:27.710281+03');
INSERT INTO public.django_migrations VALUES (26, 'events', '0002_event_price', '2024-10-23 14:13:11.234206+03');
INSERT INTO public.django_migrations VALUES (27, 'escaperooms', '0001_initial', '2024-11-11 11:29:50.234681+02');
INSERT INTO public.django_migrations VALUES (28, 'escaperooms', '0002_alter_escaperoom_rating', '2024-11-11 12:23:09.117938+02');
INSERT INTO public.django_migrations VALUES (29, 'escaperooms', '0003_alter_escaperoom_duration', '2024-11-11 12:28:45.164737+02');
INSERT INTO public.django_migrations VALUES (30, 'escaperooms', '0004_escaperoom_imageurl', '2024-11-11 12:35:11.201536+02');


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: escaperooms_escaperoom; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.escaperooms_escaperoom VALUES (2, 'The Cabin', 'Welcome to The Cabin, a chilling escape room experience set in a remote, isolated woodland hideaway. In this game, you and your team find yourselves trapped in an old, dimly-lit cabin after a sudden storm derails your plans. Mysterious symbols line the walls, strange relics rest on every shelf, and the feeling that you’re being watched intensifies as you explore deeper. Legends say the cabin belonged to a recluse with dark secrets, and your only chance of escape is to solve the puzzles left behind and uncover the truth.', 8, NULL, 60, 35.00, '2024-11-11 13:40:02.285222+02', '2024-11-11 13:45:52.554595+02', 'https://img.craiyon.com/2024-11-11/bXVgFVNvSkWs0bHh0hFdRw.webp');
INSERT INTO public.escaperooms_escaperoom VALUES (1, 'The Old Attic', 'Welcome to The Old Attic, a spine-chilling escape room where the forgotten meets the mysterious. You and your friends have inherited an old mansion, but during a casual exploration, you stumble upon a locked attic door. Curiosity gets the best of you, and you make your way inside, only to find yourselves trapped. The attic is cluttered with dusty trunks, antique furniture, and relics from generations past. Shadows seem to move, and strange sounds echo through the rafters.

Rumor has it that the attic holds the secrets of the mansion’s former owner, a reclusive collector with a fascination for the occult. To escape, you’ll need to solve eerie puzzles, search for hidden compartments, and piece together the attic’s cryptic history. With only 60 minutes on the clock, you’ll face the unknown, where every creak, whisper, and flicker could lead you closer to freedom—or keep you forever sealed in The Old Attic. Will you make it out, or will the attic’s secrets claim you?', 7, NULL, 60, 120.00, '2024-11-11 12:30:56.123467+02', '2024-11-11 13:48:05.94225+02', 'https://img.craiyon.com/2024-11-11/qVbgFxW1QeSSMwg2DwDtjA.webp');
INSERT INTO public.escaperooms_escaperoom VALUES (3, 'The Dusty Storage Room', 'Step into The Dusty Storage Room, an escape room adventure that hides mystery within every shadowed corner. You and your team find yourselves locked inside this forgotten room deep within an old building, untouched for decades. Dust blankets the shelves, faded boxes are piled high, and remnants of long-abandoned belongings lie scattered about. The air is thick and musty, carrying the faintest scent of something peculiar, something that makes the hairs on your neck stand up.

Local legends tell of a hidden item left by the building’s former owner, an eccentric inventor known for his strange experiments. To escape, you’ll need to sift through layers of dust, crack forgotten codes, and decipher bizarre clues left in notebooks, trinkets, and tools. With just 60 minutes to make your way out, you’ll need to rely on teamwork, clever thinking, and maybe a little bit of luck to uncover the secrets of The Dusty Storage Room. Will you find the exit—or get lost in the dust of time?', 5, NULL, 60, 110.00, '2024-11-11 13:51:10.212465+02', '2024-11-11 13:51:32.019653+02', 'https://img.craiyon.com/2024-11-11/OPVXm5obTm2G8WC_SzoUBQ.webp');


--
-- Data for Name: events_event; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.events_event VALUES (5, 'Prodigy', 'Prepare for an explosive night of high-octane music as The Prodigy takes over Club Doom on 01.02.2025! Known for their fierce, electrifying performances and genre-defining hits, The Prodigy brings their signature blend of rave, punk, and electronic energy to the stage like no other.

Get ready to lose yourself to legendary anthems like Firestarter, Breathe, and Smack My Bitch Up along with newer tracks from their latest album. With their iconic sound and visceral energy, this is a show that will ignite your senses and keep you moving all night long.

Don’t miss out on this chance to experience one of the most powerful live acts in electronic music! Tickets are on sale now, so grab yours before they’re gone!', '2025-02-01', '20:00:00', 'London', 'https://www.hollywoodreporter.com/wp-content/uploads/2021/02/PRESS-SHOT-DARKER-3-1612951715.jpg?w=1296&h=730&crop=1', '2024-10-23 16:07:54.648734+03', '2024-10-24 10:44:03.753796+03', 40);
INSERT INTO public.events_event VALUES (1, 'Deicide', 'sfsd df sd', '2006-06-06', '19:00:00', 'Hellfest', 'https://github.com/xaoccc/Doom/blob/main/frontend/public/images/event-1.jpg?raw=true', '2024-10-17 00:00:00+03', '2024-10-17 00:00:00+03', 100);
INSERT INTO public.events_event VALUES (3, 'Mayhem', 'Satanicus', '2019-01-01', '19:00:00', 'Oslo', 'https://github.com/xaoccc/Doom/blob/main/frontend/public/images/event-3.jpg?raw=true', '2024-10-17 00:00:00+03', '2024-10-17 00:00:00+03', 120);
INSERT INTO public.events_event VALUES (4, 'Hocico', 'Hocico is a Mexican electro-industrial band known for its dark, aggressive sound and intense live performances. Formed in the mid-1990s by cousins Erk Aicrag (vocals) and Racso Agroyam (electronics), the duo has become a prominent figure in the industrial and dark electronic music scenes. Their music blends harsh electronic beats, distorted vocals, and eerie atmospheres with themes of anger, despair, and defiance.

Hocico''s shows are immersive experiences, featuring pounding rhythms, pulsating lights, and Aicrag’s raw, energetic stage presence. The band’s concerts are notorious for creating a visceral connection with their audience, drawing fans into a cathartic world of electronic darkness and rebellion. With a discography spanning over two decades, including tracks like "Forgotten Tears" and "Tiempos de Furia," Hocico continues to push the boundaries of industrial music while maintaining their cult following around the globe.', '2025-10-10', '20:00:00', 'Spain', 'https://64.media.tumblr.com/606d6e25c6fedd820d7571bff82851eb/tumblr_owhekq2zsZ1s0zjivo2_400.jpg', '2024-10-23 15:18:14.75447+03', '2024-10-23 15:18:14.75447+03', 66);
INSERT INTO public.events_event VALUES (8, 'Asphyx', 'dssfs f sd', '2025-06-24', '21:57:00', 'Sofia', 'https://www.metalmusicarchives.com/images/artists/asphyx-20120303163236.jpg', '2024-10-25 10:00:14.670091+03', '2024-10-25 10:00:14.670091+03', 50);
INSERT INTO public.events_event VALUES (7, 'Behemoth', 'Prepare yourself for an unforgettable night of pure metal mayhem! The legendary Behemoth is coming to Club Doom on 06.06.2026, bringing their iconic mix of brutal blackened death metal and theatrical performances to the stage.', '2026-06-06', '21:00:00', 'Sofia', 'https://www.releaseathens.gr/wp-content/uploads/2023/12/new-behe.jpg', '2024-10-25 08:46:25.998155+03', '2024-10-25 10:02:27.524176+03', 666);
INSERT INTO public.events_event VALUES (6, 'Torture Killa', 'adasdas', '2016-01-16', '20:00:00', 'Sofia', 'https://www.werock.bg/news/images7/torture-killer.jpg', '2024-10-25 08:15:48.683381+03', '2024-10-31 17:15:32.4201+02', 40);
INSERT INTO public.events_event VALUES (9, 'Brujeria', 'Prepare for an unforgettable night of Latin American metal with the iconic Brujeria! This legendary band, known for their intense blend of death metal with powerful political and social commentary, is bringing their heavy sound to Club Doom. Featuring Brujeria’s raw riffs, commanding presence, and lyrics exploring themes of cultural identity, protest, and mysticism, this is a night that fans of hardcore, thrash, and death metal won’t want to miss.', '2026-03-11', '20:00:00', 'Tijuana', 'https://images.squarespace-cdn.com/content/v1/571045a359827ee01809adda/909baaa4-9ed9-4a22-9b3d-6683fc0c3e13/BandPhoto_updated_1080w.jpg', '2024-11-04 12:27:19.211859+02', '2024-11-04 12:27:19.211859+02', 69);
INSERT INTO public.events_event VALUES (2, '$uicideboy$', 'Get ready for an unforgettable night as $uicideboy$ brings their high-energy, raw, and emotional performance to Club Doom on 15.05.2025! Known for their unique blend of dark, hard-hitting beats and introspective lyrics, this duo has redefined the underground rap scene, delivering tracks that resonate deeply with fans around the world.

Expect an electrifying setlist, featuring fan favorites like Paris, Dead Batteries, and Kill Yourself alongside tracks from their latest album, New World Depression. This is more than just a show—it''s a visceral experience that dives into themes of life, death, and everything in between.

Don''t miss out on this epic night of music and raw emotion! Tickets are selling fast—secure yours now before it''s too late!', '2025-05-15', '19:00:00', 'Sofia', 'https://github.com/xaoccc/Doom/blob/main/frontend/public/images/event-2.jpg?raw=true', '2024-10-17 00:00:00+03', '2024-10-24 10:25:44.103186+03', 20);
INSERT INTO public.events_event VALUES (10, 'Suffocation', 'Join us for an unforgettable night as Suffocation brings their bone-crushing sound to the stage! Known for pioneering brutal death metal with relentless riffs, thunderous drums, and guttural vocals, this is a live show that will push you to the limits.', '2025-01-05', '19:00:00', 'Sofia', 'https://www.alcatraz.be/img/bands/suffocation.jpg', '2024-11-04 12:31:25.13867+02', '2024-11-04 12:31:25.13867+02', 30);
INSERT INTO public.events_event VALUES (12, 'Many More', 'Join us for drinks and metal ', '2026-01-05', '19:00:00', 'Sofia', 'https://www.alcatraz.be/img/bands/suffocation.jpg', '2024-11-04 12:31:25.13867+02', '2024-11-04 12:31:25.13867+02', 30);


--
-- Data for Name: profiles_appuser_groups; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: profiles_appuser_user_permissions; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: services_service; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.services_service VALUES (4, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-4.jpg', 'Escape Rooms', 'Submerse yourself into a world of riddles. Find your way out in an endless maze full of surprises and horrors.');
INSERT INTO public.services_service VALUES (6, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-6.webp', 'Computer Club', 'This is not an ordinary computer club. The entry is restricted only to chosen ones and if you don''t know how to enter, maybe you don''t belong here.');
INSERT INTO public.services_service VALUES (19, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-3.webp', 'Strip Club', 'esfwef we rfwe');
INSERT INTO public.services_service VALUES (2, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-2.webp', 'Bet Zone', 'Step into the thrilling world of sports betting at BetZone, where excitement meets opportunity! Our state-of-the-art venue offers an immersive experience for betting enthusiasts and sports lovers alike. With multiple large screens broadcasting live events, you won''t miss a moment of the action!');
INSERT INTO public.services_service VALUES (5, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-5.jpg', 'Marketplace', 'Here you can buy AND SELL bands merchandise, clothes, souvenirs, computers, mobile phones, alcohol, food and more...');
INSERT INTO public.services_service VALUES (1, 'https://raw.githubusercontent.com/xaoccc/Doom/refs/heads/main/frontend/public/images/service-1.jpg', 'Events', 'We offer the ultimate destination for fans of extreme music! Immerse yourself in a night of death metal, thrash metal, gangsta rap, hard bass, hard techno, and gabba and many more. With electrifying performances, a pulsating dance floor, and a bar serving devilishly crafted cocktails, experience a night where chaos reigns and the beats never stop. Join us if you dare!');


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 36, true);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 9, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 30, true);


--
-- Name: escaperooms_escaperoom_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.escaperooms_escaperoom_id_seq', 6, true);


--
-- Name: events_event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.events_event_id_seq', 10, true);


--
-- Name: profiles_appuser_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profiles_appuser_groups_id_seq', 1, false);


--
-- Name: profiles_appuser_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profiles_appuser_id_seq', 23, true);


--
-- Name: profiles_appuser_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.profiles_appuser_user_permissions_id_seq', 1, false);


--
-- Name: services_service_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.services_service_id_seq', 21, true);


--
-- PostgreSQL database dump complete
--

