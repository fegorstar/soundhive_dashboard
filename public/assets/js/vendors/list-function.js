document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("listjs").getAttribute("data-list").split(","),n=new List("listjs",{valueNames:e,page:10,searchClass:"listjs-search",sortClass:"listjs-sorter",pagination:[{name:"pagination",paginationClass:"pagination",left:1,right:1,item:'<li class="page-item"><a class="nav-link min-h-[36px] min-w-[36px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-md border bg-white border-gray-300 text-gray-800 hover:bg-gray-300 active:bg-indigo-600 active:text-white focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none leading-none page" href="#"></a></li>'}]});function t(e){var t=e.items.length,e=(e.visibleItems.length,t+" entries found");document.getElementById("listjs-showing-items-label").innerHTML=e}t(n),n.on("updated",function(e){t(e)}),document.getElementById("listjs-items-per-page").addEventListener("change",function(e){var t=this.value;n.page=t,n.update()});var i=1,o=10;function a(){var e=Math.ceil(n.items.length/o);document.querySelector(".prev").disabled=1===i,document.querySelector(".next").disabled=i===e}document.querySelector(".prev").addEventListener("click",function(){1<i&&(i--,n.show((i-1)*o,o),a())}),document.querySelector(".next").addEventListener("click",function(){i*o<n.items.length&&(i++,n.show(+i*o,o),a())}),document.querySelector(".texttooltip")&&((e=document.createElement("link")).rel="stylesheet",e.href="https://unpkg.com/tippy.js@6/dist/tippy.css",document.head.appendChild(e),(e=document.createElement("script")).src="https://unpkg.com/@popperjs/core@2",e.onload=function(){var e=document.createElement("script");e.src="https://unpkg.com/tippy.js@6",e.onload=function(){tippy(".texttooltip",{content(e){e=e.getAttribute("data-template");return document.getElementById(e).innerHTML},allowHTML:!0})},document.body.appendChild(e)},document.body.appendChild(e)),a()});