<template>
    <nav id="sidebar" class="p-3" style="background-color: orange">
            <div class="sidebar-header">
                <h3>Sidebar</h3>
            </div>

    <ul id="accordionSidebar" class="navbar-nav text-light">
    
    <NuxtLink to="/homepage">
        <li class="nav-item"><a class="nav-link active"><i class="fas fa-tachometer-alt"></i><span>Home</span></a></li>
    </NuxtLink> 
    <NuxtLink to="/dashboard">
        <li class="nav-item"><a class="nav-link"><i class="fas fa-user"></i><span>Dashboard</span></a></li>
    </NuxtLink>
    <NuxtLink to="/orders">
        <li class="nav-item"><a class="nav-link"><i class="fas fa-table"></i><span>Orders</span></a></li>
    </NuxtLink>
    <NuxtLink to="/products">
        <li class="nav-item"><a class="nav-link"><i class="far fa-user-circle"></i><span>Products</span></a></li>
    </NuxtLink>
    <NuxtLink to="/customer">
        <li class="nav-item"><a class="nav-link"><i class="fas fa-user-circle"></i><span>Customer</span></a></li>
    </NuxtLink>
</ul>           
</nav>
</template>