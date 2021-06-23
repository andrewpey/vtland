<script>
  let wishlistModal = " <div class=\"wishlist-modal\"><div class=\"wishlist-modal-content\"><iframe src=\"https://store.steampowered.com/widget/732050/\"frameborder=\"0\"class=\"widget-steam_modal\"</iframe></div></div>";
  $('.page-sidebar').prepend(wishlistModal);

  let burgerIco = "<div class=\"burgerMenu\"><div class=\"burgerMenu__bar1\"></div><div class=\"burgerMenu__bar2\"></div><div class=\"burgerMenu__bar3\"></div></div>";
  $('body').prepend(burgerIco);
</script>

{% if page.style == 'halloween' %}
[ ![Logo](/assets/logo_halloween.gif){:.sidebar-menu__logo_halloween} ](/){:.sidebar-menu__logo_halloween .sidebar-menu__item}
{% else %}
[ ![Logo](/assets/press/voxeltycoon_text.png){:.sidebar-menu__logo} ](/){:.sidebar-menu__logo .sidebar-menu__item}
{% endif %}


[BUY NOW!](http://store.steampowered.com/app/732050/Voxel_Tycoon/){:.greenlight}

[BECOME A PATRON](https://www.patreon.com/bePatron?u=7655118){:.patreon-navbar}

[$ DONATE $](/donate){:.money}

***

<!-- <iframe style="margin-left:-20px" frameborder="0" src="https://itch.io/embed/434404?linkback=true&amp;border_width=0&amp;bg_color=18182d&amp;fg_color=ffffff&amp;link_color=8768ff&amp;border_color=18182d" width="206" height="165"></iframe> -->

[Devlog](/devlog){:.sidebar-menu__item}

[Roadmap](https://trello.com/b/wHz5JHqH/voxel-tycoon-roadmap){:.sidebar-menu__item}

[Bug Tracker](/bugs){:.sidebar-menu__item}

[Suggestions](/suggestions){:.sidebar-menu__item}

***

[Changelog](/changelog){:.changelog .sidebar-menu__item}

[Wiki](https://voxeltycoon.gamepedia.com){:.wiki .sidebar-menu__item}

[Modding](/modding){:.sdk .sidebar-menu__item}

[Railroad to Hell <span style="color:red">3</span>](/railroad-to-hell){:.sidebar-menu__item}

[For Press](/press){:.sidebar-menu__item}

[Jobs](/jobs/ru){:.sidebar-menu__item}

***

[Twitter](//twitter.com/VoxelTycoon){:.twitter .sidebar-menu__item} <small>{{site.data.socials.tw}}</small>

[Facebook](//facebook.com/VoxelTycoon){:.facebook .sidebar-menu__item} <small>{{site.data.socials.fb}} </small>

[YouTube](//youtube.com/c/voxeltycoongame){:.youtube .sidebar-menu__item} <small>{{site.data.socials.yt}} </small>

[VK](//vk.com/VoxelTycoon){:.vk .sidebar-menu__item} (in Russian) <small>{{site.data.socials.vk}}</small>

[Reddit](//reddit.com/r/voxeltycoon){:.reddit .sidebar-menu__item} <small>{{site.data.socials.rd}} </small>

[Discord](//discord.gg/voxeltycoon){:.discord .sidebar-menu__item} <small>{{site.data.socials.dd}} </small>

[Email](mailto:dev@voxeltycoon.xyz){:.email .sidebar-menu__item}

<script>
$('.greenlight').click(function(event) {
    event.preventDefault()
    $('.wishlist-modal').fadeIn(300)
})

$('.wishlist-modal').click(function(event) {
    $('.wishlist-modal').fadeOut(200)
})

let burgerStatus = true;
$('.burgerMenu').click(() => {
  if(burgerStatus){
    $('.burgerMenu__bar1').addClass('burgerMenu__bar1_transform');
    $('.burgerMenu__bar2').addClass('burgerMenu__bar2_transform');
    $('.burgerMenu__bar3').addClass('burgerMenu__bar3_transform');
    $('.page-sidebar').addClass('page-sidebar_modal');
    $('body').addClass('noscroll');
    burgerStatus = false;
  } else {
    $('.burgerMenu__bar1').removeClass('burgerMenu__bar1_transform');
    $('.burgerMenu__bar2').removeClass('burgerMenu__bar2_transform');
    $('.burgerMenu__bar3').removeClass('burgerMenu__bar3_transform');
    $('.page-sidebar').removeClass('page-sidebar_modal');
    $('body').removeClass('noscroll');
    burgerStatus = true;
  }
})

</script>

<script type="text/javascript" src="/assets/js/sticky-sidebar.js"></script>
<script type="text/javascript">
  var stickySideBar = new StickySidebar('.sidebar-menu', {
    topSpacing: 10,
    bottomSpacing: 0,
    containerSelector: '.page-sidebar',
    innerWrapperSelector: '.sidebar-menu__inner',
  });
  $(window).ready(function() {
    stickySideBar.updateSticky();
    setTimeout(() => {
      stickySideBar.updateSticky();
    }, 1000)
  });
</script>