<template>
    <section>
        <header>
            <slot name="header"></slot>
        </header>
        <div>
            <slot></slot>
        </div>
    </section>
</template>


<style scoped>
header {
    background-color: rgb(194, 115, 128);
    color: white;
    text-align: center;
    padding: 1rem;
    width: 18rem;
}
div {
    width: 18rem;
    height: 20rem;
    background: whitesmoke;
    border: 1px solid grey;
}
</style>