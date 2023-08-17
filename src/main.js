const url = [
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup211-3ebe6d2eda3350bcea16922103929843-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup_costas1-501d07089f3c77b99616911687195340-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup_costas1-227b1541d37019f93e16922103643404-1024-1024.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup_costas41-a87a5b7d50b1d87fa316922105408276-1024-1024.webp"
]
const urlHover = [
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup11-810d0e7f90cda9bbb316922103929071-640-0.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup1-edad0f3e93d3ae1b1816911687268564-640-0.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup1-c81450712f18db80bc16922103643045-640-0.webp",
    "https://acdn.mitiendanube.com/stores/001/333/621/products/mockup41-335c56e24285900c3b16922105408950-640-0.webp"
]

$(document).ready(function(){
    $('.hamburguer').click(function(){
        $('header nav').slideToggle()
    })
    $('.produtos ul li img').on("mouseenter", function(){
        this.src = urlHover[$(this).attr('posicao')]
    })
    $('.produtos ul li img').on("mouseleave", function(){
        this.src = url[$(this).attr('posicao')]
    })
})
