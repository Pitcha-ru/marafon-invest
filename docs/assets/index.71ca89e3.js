import { initializeApp as d } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import {
  getAnalytics as l,
  logEvent as p,
} from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
const m = function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) o(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const i of t.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && o(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function o(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = n(e);
    fetch(e.href, t);
  }
};
m();
const u = {
    apiKey: "AIzaSyDRsLING5s2zL0aWvW-TRqD9phI_KwyV6Y",
    authDomain: "pitcha-cloud.firebaseapp.com",
    databaseURL:
      "https://pitcha-cloud-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "pitcha-cloud",
    storageBucket: "pitcha-cloud.appspot.com",
    messagingSenderId: "429078005130",
    appId: "1:429078005130:web:e6db43b484ecfc7b3b3473",
    measurementId: "G-MF88Y93H45",
  },
  f = d(u),
  h = l(f);
new Swiper(".swiper", {
  spaceBetween: 10,
  pagination: { el: ".swiper-pagination" },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});
const g =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  b = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im,
  y = document.getElementById("form");
y.addEventListener("submit", (a) => {
  a.preventDefault();
  const s = document.getElementById("submit"),
    n = document.getElementById("loader");
  n.classList.remove("hidden"), s.classList.add("hidden");
  const o = new FormData(a.target),
    e = o.get("phone").replace(/\D/g, ""),
    t = o.get("email");
  if (!g.test(String(t).toLowerCase()) || !b.test(String(e)))
    alert(
      "\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435"
    ),
      n.classList.add("hidden"),
      s.classList.remove("hidden");
  else {
    const c = document.getElementById("finish").innerHTML;
    document.getElementById("content").innerHTML = c;

    const i = "?phone=" + e + "&email=" + t;
    fetch(
      "https://us-central1-pitcha-cloud.cloudfunctions.net/alphaUsers" + i,
      { method: "POST", headers: {} }
    )
      .then((r) => r.json())
      .then((r) => {
        if (
          (n.classList.add("hidden"), s.classList.remove("hidden"), r.result)
        ) {
        } else
          alert(
            "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u044B\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430."
          );
        p(h, "fill_form");
      })
      .catch((r) => {
        n.classList.add("hidden"),
          s.classList.remove("hidden"),
          alert(
            "\u041E\u0448\u0438\u0431\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0435 \u0434\u0430\u043D\u044B\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430."
          );
      });
  }
});
