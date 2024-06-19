window.addEventListener("DOMContentLoaded", () => {
  var list = document.getElementById("toc");
  var content = document.getElementById("content");
  var headings = content.querySelectorAll("h1, h2, h3, h4, h5, h6");
  var lastLevel = 0;

  headings.forEach(function (heading, index) {
    var level = parseInt(heading.tagName.slice(1));
    if (index === 0) {
      var childList = document.createElement("ul");
      list.appendChild(childList);
      list = childList;
    } else if (level > lastLevel) {
      for (var i = 0; i < level - lastLevel; ++i) {
        var childList = document.createElement("ul");
        list.appendChild(childList);
        list = childList;
      }
    } else if (level < lastLevel) {
      for (var i = 0; i < lastLevel - level; ++i) {
        list = list.parentNode;
      }
    }

    var ref = toc + index;
    if (heading.hasAttribute("id")) {
      ref = heading.getAttribute("id");
    } else {
      heading.setAttribute("id", ref);
    }

    var item = document.createElement("li");

    var link = document.createElement("a");
    link.setAttribute("href", "#" + ref);
    link.textContent = heading.textContent;
    item.appendChild(link);

    list.appendChild(item);
    lastLevel = level;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.intersectionRatio > 0) {
        const selected = document.querySelector(`nav li a[href="#${id}"]`);

        selected.classList.add("active");
      } else {
        const selected = document.querySelector(`nav li a[href="#${id}"]`);

        selected.classList.remove("active");
      }
    });
  });

  headings.forEach((heading) => {
    observer.observe(heading);
  });
});
