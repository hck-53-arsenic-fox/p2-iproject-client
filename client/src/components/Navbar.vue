<script>
export default {
    name: 'Navbar'
}
</script>

<template>
    <header class="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

        <div class="container-fluid">
            <div class="d-flex align-items-center">
                <div class="site-logo"><a href="index.html">ENBIE<span>.</span> </a></div>
                <div class="ml-auto">
                    <nav class="site-navigation position-relative text-right" role="navigation">
                        <ul class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                            <li><a href="#home-section" class="nav-link">Home</a></li>
                            <li><RouterLink to="/players" class="nav-link">Players</RouterLink></li>
                            <li><a href="#schedule-section" class="nav-link">Schedule</a></li>
                            <li><a href="#trainer-section" class="nav-link">Trainer</a></li>
                            <li><a href="#services-section" class="nav-link">Services</a></li>
                            <li><a href="#contact-section" class="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                    <a href="#" class="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"><span
                            class="icon-menu h3"></span></a>
                </div>

            </div>
        </div>

    </header>
</template>