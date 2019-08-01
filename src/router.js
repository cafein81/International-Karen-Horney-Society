import Vue from "vue";
import Router from "vue-router";
//View Imports

import Home from "@/views/Home";
import About from "@/views/About";
import KarenHorney from "@/views/KarenHorney";
import Extensions from "@/views/Extensions";
import AudioVideo from "@/views/AudioVideo";
import Resources from "@/views/Resources";
import News from "@/views/News";
import Contact from "@/views/Contact";
import EssaysExcerpts from "@/views/EssaysExcerpts";
import RelatedBooks from "@/views/RelatedBooks";
import AllanHobson from "@/views/AllanHobson";
import BulletinBoard from "@/views/BulletinBoard";
import MembershipDirectory from "@/views/MembershipDirectory";

//homepages Imports

import p1 from "@/homepages/p1";
import p2 from "@/homepages/p2";
import p3 from "@/homepages/p3";
import p4 from "@/homepages/p4";
import p5 from "@/homepages/p5";
import p6 from "@/homepages/p6";
import p7 from "@/homepages/p7";
import p8 from "@/homepages/p8";
import p9 from "@/homepages/p9";
import p10 from "@/homepages/p10";
import p11 from "@/homepages/p11";


//audiovideo Imports

import a1 from "@/audiopages/a1";
import a2 from "@/audiopages/a2";
import a3 from "@/audiopages/a3";
import a4 from "@/audiopages/a4";
import a5 from "@/audiopages/a5";
import a6 from "@/audiopages/a6";
import a7 from "@/audiopages/a7";
import a8 from "@/audiopages/a8";
import a9 from "@/audiopages/a9";
import a10 from "@/audiopages/a10";
import a11 from "@/audiopages/a11";
import a12 from "@/audiopages/a12";
import a13 from "@/audiopages/a13";
import a14 from "@/audiopages/a14";
import a15 from "@/audiopages/a15";

//translation Import
import translation from "@/translation/translation";

//essays import
import e1 from "@/essays/e1";
import e2 from "@/essays/e2";
import e3 from "@/essays/e3";
import e4 from "@/essays/e4";
import e5 from "@/essays/e5";
import e6 from "@/essays/e6";
import e7 from "@/essays/e7";
import e8 from "@/essays/e8";
import e9 from "@/essays/e9";
import e10 from "@/essays/e10";
import e11 from "@/essays/e11";
import e12 from "@/essays/e12";
import e13 from "@/essays/e13";
import e14 from "@/essays/e14";

//essays import - turksih
import turkish from "@/turkish/turkish";

//bulletin
import b1 from "@/bulletin/b1";
import b2 from "@/bulletin/b2";

//abstract
import abstract from "@/abstract/abstract";

//allan import
import h1 from "@/allan/h1";

//membership import

import m1 from "@/membership/m1";
import m2 from "@/membership/m2";
import m3 from "@/membership/m3";
import m4 from "@/membership/m4";
import m5 from "@/membership/m5";
import m6 from "@/membership/m6";
import m7 from "@/membership/m7";
import m8 from "@/membership/m8";
import m9 from "@/membership/m9";
import m10 from "@/membership/m10";
import m11 from "@/membership/m11";
import m12 from "@/membership/m12";
import m13 from "@/membership/m13";
import m14 from "@/membership/m14";
import m15 from "@/membership/m15";
import m16 from "@/membership/m16";
import m17 from "@/membership/m17";
import m18 from "@/membership/m18";
import m19 from "@/membership/m19";
import m20 from "@/membership/m20";
import m21 from "@/membership/m21";
import m22 from "@/membership/m22";
import m23 from "@/membership/m23";
import m24 from "@/membership/m24";
import m25 from "@/membership/m25";

//books import

import x1 from "@/books/x1";
import x2 from "@/books/x2";
import x3 from "@/books/x3";
import x4 from "@/books/x4";
import x5 from "@/books/x5";
import x6 from "@/books/x6";
import x7 from "@/books/x7";
import x8 from "@/books/x8";
import x9 from "@/books/x9";
import x10 from "@/books/x10";
import x11 from "@/books/x11";
import x12 from "@/books/x12";
import x13 from "@/books/x13";
import x14 from "@/books/x14";
import x15 from "@/books/x15";
import x16 from "@/books/x16";



Vue.use(Router);



export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    // sub-routes

    {
      path: "/p1",
      name: "p1",
      component: p1,
    },
    {
      path: "/p2",
      name: "p2",
      component: p2,
    },
    {
      path: "/p3",
      name: "p3",
      component: p3,
    },
    {
      path: "/p4",
      name: "p4",
      component: p4,
    },
    {
      path: "/p5",
      name: "p5",
      component: p5,
    },
    {
      path: "/p6",
      name: "p6",
      component: p6,
    },
    {
      path: "/p7",
      name: "p7",
      component: p7,
    },
    {
      path: "/p8",
      name: "p8",
      component: p8,
    },
    {
      path: "/p9",
      name: "p9",
      component: p9,
    },
    {
      path: "/p10",
      name: "p10",
      component: p10,
    },
    {
      path: "/p11",
      name: "p11",
      component: p11,
    },

    //end 

    {
      path: "/About",
      name: "About",
      component: About
    },
    {
      path: "/KarenHorney",
      name: "KarenHorney",
      component: KarenHorney
    },
    {
      path: "/Extensions",
      name: "Extensions",
      component: Extensions
    },

    //sub-routes

    {
      path: "/Extensions/x1",
      name: "x1",
      component: x1
    },
    {
      path: "/Extensions/x2",
      name: "x2",
      component: x2
    },
    {
      path: "/Extensions/x3",
      name: "x3",
      component: x3
    },
    {
      path: "/Extensions/x4",
      name: "x4",
      component: x4
    },
    {
      path: "/Extensions/x5",
      name: "x5",
      component: x5
    },
    {
      path: "/Extensions/x6",
      name: "x6",
      component: x6
    },
    {
      path: "/Extensions/x7",
      name: "x7",
      component: x7
    },
    {
      path: "/Extensions/x8",
      name: "x8",
      component: x8
    },
    {
      path: "/Extensions/x9",
      name: "x9",
      component: x9
    },
    {
      path: "/Extensions/x10",
      name: "x10",
      component: x10
    },
    {
      path: "/Extensions/x11",
      name: "x11",
      component: x11
    },
    {
      path: "/Extensions/x12",
      name: "x12",
      component: x12
    },
    {
      path: "/Extensions/x13",
      name: "x13",
      component: x13
    },
    {
      path: "/Extensions/x14",
      name: "x14",
      component: x14
    },
    {
      path: "/Extensions/x15",
      name: "x15",
      component: x15
    },
    {
      path: "/Extensions/x16",
      name: "x16",
      component: x16
    },

    {
      path: "/AudioVideo",
      name: "AudioVideo",
      component: AudioVideo
    },

    // sub-routes

    {
      path: "/AudioVideo/a1",
      name: "a1",
      component: a1,
    },
    {
      path: "/AudioVideo/a2",
      name: "a2",
      component: a2,
    },
    {
      path: "/AudioVideo/a3",
      name: "a3",
      component: a3,
    },
    {
      path: "/AudioVideo/a4",
      name: "a4",
      component: a4,
    },
    {
      path: "/AudioVideo/a5",
      name: "a5",
      component: a5,
    },
    {
      path: "/AudioVideo/a6",
      name: "a6",
      component: a6,
    },
    {
      path: "/AudioVideo/a7",
      name: "a7",
      component: a7,
    },
    {
      path: "/AudioVideo/a8",
      name: "a8",
      component: a8,
    },
    {
      path: "/AudioVideo/a9",
      name: "a9",
      component: a9,
    },
    {
      path: "/AudioVideo/a10",
      name: "a10",
      component: a10,
    },
    {
      path: "/AudioVideo/a11",
      name: "a11",
      component: a11,
    },
    {
      path: "/AudioVideo/a12",
      name: "a12",
      component: a12,
    },
    {
      path: "/AudioVideo/a13",
      name: "a13",
      component: a13,
    },
    {
      path: "/AudioVideo/a14",
      name: "a14",
      component: a14,
    },
    {
      path: "/AudioVideo/a15",
      name: "a15",
      component: a15,
    },

    //end

    {
      path: "/Resources",
      name: "Resources",
      component: Resources
    },

    //subroute
    {
      path: "/Resources/translation",
      name: "translation",
      component: translation
    },
    {
      path: "/News",
      name: "News",
      component: News
    },
    {
      path: "/Contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/AllanHobson",
      name: "AllanHobson",
      component: AllanHobson
    },
    {
      path: "/AllanHobson/h1",
      name: "h1",
      component: h1
    },
    {
      path: "/EssaysExcerpts",
      name: "EssaysExcerpts",
      component: EssaysExcerpts
    },

    //sub routes
    {
      path: "/EssaysExcerpts/e1",
      name: "e1",
      component: e1
    },
    {
      path: "/EssaysExcerpts/e2",
      name: "e2",
      component: e2
    },
    {
      path: "/EssaysExcerpts/e3",
      name: "e3",
      component: e3
    },
    {
      path: "/EssaysExcerpts/e4",
      name: "e4",
      component: e4
    },
    {
      path: "/EssaysExcerpts/e5",
      name: "e5",
      component: e5
    },
    {
      path: "/EssaysExcerpts/e6",
      name: "e6",
      component: e6
    },
    {
      path: "/EssaysExcerpts/e7",
      name: "e7",
      component: e7
    },
    {
      path: "/EssaysExcerpts/e8",
      name: "e8",
      component: e8
    },
    // turkish trans. route

    {
      path: "/EssaysExcerpts/e8/turkish",
      name: "turkish",
      component: turkish
    },

    {
      path: "/EssaysExcerpts/e9",
      name: "e9",
      component: e9
    },
    {
      path: "/EssaysExcerpts/e10",
      name: "e10",
      component: e10
    },
    {
      path: "/EssaysExcerpts/e11",
      name: "e11",
      component: e11
    },
    {
      path: "/EssaysExcerpts/e12",
      name: "e12",
      component: e12
    },
    {
      path: "/EssaysExcerpts/e13",
      name: "e13",
      component: e13
    },
    {
      path: "/EssaysExcerpts/e14",
      name: "e14",
      component: e14
    },

    {
      path: "/RelatedBooks",
      name: "RelatedBooks",
      component: RelatedBooks
    },
    {
      path: "/BulletinBoard",
      name: "BulletinBoard",
      component: BulletinBoard
    },

    // bulletin sub routes

    {
      path: "/BulletinBoard/b1",
      name: "b1",
      component: b1
    },
    {
      path: "/BulletinBoard/b2",
      name: "b2",
      component: b2
    },
    {
      path: "/BulletinBoard/abstract",
      name: "abstract",
      component: abstract
    },

    {
      path: "/MembershipDirectory",
      name: "MembershipDirectory",
      component: MembershipDirectory
    },
    // sub routes
    {
      path: "/MembershipDirectory/m1",
      name: "m1",
      component: m1
    },
    {
      path: "/MembershipDirectory/m2",
      name: "m2",
      component: m2
    },
    {
      path: "/MembershipDirectory/m3",
      name: "m3",
      component: m3
    },
    {
      path: "/MembershipDirectory/m3",
      name: "m3",
      component: m3
    },
    {
      path: "/MembershipDirectory/m4",
      name: "m4",
      component: m4
    },
    {
      path: "/MembershipDirectory/m5",
      name: "m5",
      component: m5
    },
    {
      path: "/MembershipDirectory/m6",
      name: "m6",
      component: m6
    },
    {
      path: "/MembershipDirectory/m7",
      name: "m7",
      component: m7
    },
    {
      path: "/MembershipDirectory/m8",
      name: "m8",
      component: m8
    },
    {
      path: "/MembershipDirectory/m9",
      name: "m9",
      component: m9
    },
    {
      path: "/MembershipDirectory/m10",
      name: "m10",
      component: m10
    },
    {
      path: "/MembershipDirectory/m11",
      name: "m11",
      component: m11
    },
    {
      path: "/MembershipDirectory/m12",
      name: "m12",
      component: m12
    },
    {
      path: "/MembershipDirectory/m13",
      name: "m13",
      component: m13
    },
    {
      path: "/MembershipDirectory/m14",
      name: "m14",
      component: m14
    },
    {
      path: "/MembershipDirectory/m15",
      name: "m15",
      component: m15
    },
    {
      path: "/MembershipDirectory/m16",
      name: "m16",
      component: m16
    },
    {
      path: "/MembershipDirectory/m17",
      name: "m17",
      component: m17
    },
    {
      path: "/MembershipDirectory/m18",
      name: "m18",
      component: m18
    },
    {
      path: "/MembershipDirectory/m19",
      name: "m19",
      component: m19
    },
    {
      path: "/MembershipDirectory/m20",
      name: "m20",
      component: m20
    },
    {
      path: "/MembershipDirectory/m21",
      name: "m21",
      component: m21
    },
    {
      path: "/MembershipDirectory/m22",
      name: "m22",
      component: m22
    },
    {
      path: "/MembershipDirectory/m23",
      name: "m23",
      component: m23
    },
    {
      path: "/MembershipDirectory/m24",
      name: "m24",
      component: m24
    },
    {
      path: "/MembershipDirectory/m25",
      name: "m25",
      component: m25
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});
