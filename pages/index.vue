<script setup>
window.addEventListener("scroll", function () {
  let value = window.scrollY;

  title.style.marginTop = value * 1.8 + "px";
  layer6.style.top = value * 1.5 + "px";
  layer5.style.top = value * 1.3 + "px";
  layer4.style.top = value * 1.0 + "px";
  layer3.style.top = value * 0.8 + "px";
  layer2.style.top = value * 0.6 + "px";
});
</script>

<template>
  <section>
    <section class="parallax">
      <img src="../assets/img/layer6.png" alt="layer6" id="layer6" />
      <img src="../assets/img/layer5.png" alt="layer5" id="layer5" />
      <img src="../assets/img/layer4.png" alt="layer4" id="layer4" />
      <h2 id="title">GeoRisk</h2>
      <img src="../assets/img/layer3.png" alt="layer3" id="layer3" />
      <img src="../assets/img/layer2.png" alt="layer2" id="layer2" />
      <img src="../assets/img/layer1.png" alt="layer1" id="layer1" />
    </section>
    <section class="sec">
      <h2>Section 2</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae
        est nisi. Curabitur interdum lacinia lacus eget mollis. Morbi iaculis,
        turpis quis ultricies viverra, erat justo ornare lectus, vitae aliquet
        lorem mi id sem. Nunc interdum justo et consequat tempor. Integer mattis
        orci est, vitae imperdiet magna mollis quis. Nam non est condimentum
        velit sodales accumsan. Ut mollis mauris molestie, interdum ex ultrices,
        feugiat purus. Mauris non porta ante. Pellentesque vitae interdum neque,
        quis pretium urna.
        <br /><br />
        Praesent elementum nibh et erat pharetra ullamcorper. Quisque laoreet
        dui eget porttitor mattis. Nulla facilisi. Cras pharetra, turpis et
        lacinia convallis, enim nisl tincidunt risus, eu aliquam odio leo ac
        nibh. Curabitur malesuada ipsum non blandit cursus. Morbi nec aliquet
        est. Etiam non sapien sit amet est sodales pulvinar sit amet nec augue.
        Mauris eget ipsum libero. Praesent cursus id nulla a sollicitudin.
        Curabitur egestas, mi et mattis elementum, eros justo gravida ex, ac
        hendrerit lorem diam a nulla. Vivamus sit amet mollis felis. Suspendisse
        hendrerit arcu at mauris rhoncus, in accumsan risus ullamcorper. Nullam
        id erat in elit convallis tincidunt ac in eros. Mauris blandit porta
        ante, non tincidunt sapien mattis eget.
        <br /><br />
        Aliquam vestibulum, nulla id tempus facilisis, velit lectus fringilla
        sem, in fringilla nunc tortor eu nunc. In pharetra venenatis eros et
        tempus. Sed pellentesque lorem sodales nibh porttitor interdum. Sed vel
        ex commodo, varius sem sit amet, pharetra magna. Fusce orci quam, mollis
        et nisl sit amet, volutpat finibus tortor. Cras tincidunt, orci non
        iaculis rutrum, turpis ante rhoncus ex, non consectetur sapien purus at
        velit. Fusce lacinia enim justo, sit amet lacinia orci pretium vitae.
        Nullam pharetra scelerisque ornare.
        <br /><br />
        Integer eu pellentesque dui. Ut non lacus non arcu dapibus fermentum id
        ut velit. Sed justo sem, imperdiet nec lacinia quis, imperdiet eget
        magna. Pellentesque egestas, erat ac rutrum posuere, sem neque porttitor
        ex, id ultrices erat tellus vitae turpis. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Maecenas sapien augue, finibus id nisl id,
        pellentesque interdum ante. Cras et iaculis nulla. Sed ultrices aliquam
        elementum. Sed viverra pellentesque enim, ut aliquam purus efficitur a.
        Integer accumsan tincidunt ex hendrerit molestie.
        <br /><br />
        Mauris a dignissim augue. Fusce nibh ligula, pulvinar vel vehicula id,
        mattis sed nibh. Integer a malesuada enim, sit amet laoreet nulla.
        Mauris tempor at quam sit amet egestas. Maecenas pretium sapien rhoncus
        erat auctor luctus. Sed auctor diam non sapien porta pretium. Sed
        ultricies nibh vitae urna eleifend, at malesuada metus euismod. Fusce at
        nulla commodo, accumsan enim ac, venenatis augue. Curabitur a orci sit
        amet risus ultricies scelerisque. Etiam dui erat, fringilla ut leo vel,
        malesuada tristique nisi. Mauris ut sapien maximus, congue leo sit amet,
        vehicula dolor. Nam rutrum molestie lobortis. Nunc placerat imperdiet
        augue, eget efficitur purus tincidunt at.
      </p>
    </section>
  </section>
</template>

<style>
.parallax {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4ffee;
  overflow: hidden;
}

.parallax img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  pointer-events: none;
  object-fit: cover;
}

.sec {
  position: relative;
  background-color: #011104;
}

.sec h2 {
  color: #fff;
  font-size: 3rem;
}

#title {
  position: absolute;
  font-size: 7em;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
