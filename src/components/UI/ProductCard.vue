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
}
div {
    width: 17rem;
    height: 17rem;
    background: whitesmoke;
    border: 1px solid grey;
}
</style>