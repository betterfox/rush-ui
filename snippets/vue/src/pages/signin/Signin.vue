<template>
  <div class="page">
    <div class="bg-below"></div>
    <div class="bg-color-overlay"></div>
    <div class="page-body">
      <div class="card">
        <div class="card-inner">
          <div class="app-logo">
            <img class="logo-img" src="/assets/images/signin/logo-white.png" />
            <h2 class="title">ABugLife Studio</h2>
          </div>
          <div class="page-title">
            <div class="title">Signin to:</div>
            <div class="subtitle">Accounting</div>
          </div>
          <div class="form"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @apply h-full min-h-screen relative flex items-center justify-center p-0 bg-background py-0;

  @screen md {
    @apply py-20;
  }
  .bg-below {
    @apply absolute top-0 left-0 w-full h-full z-10 bg-cover bg-center mix-blend-multiply;
    background-image: url(/assets/images/signin/bg2.png);
  }

  .bg-color-overlay {
    @apply absolute top-0 left-0 w-full h-full bg-primary opacity-5 z-30 mix-blend-multiply;
  }

  .page-body {
    @apply max-w-full w-full space-y-8 relative z-40 flex items-center;

    @screen md {
      @apply max-w-md;
    }
  }
}

.card {
  @apply shadow-xl bg-surface py-20 px-6 z-40 rounded-lg w-full h-full flex flex-col items-center justify-center min-h-screen;

  @screen md {
    @apply h-auto min-h-0;
  }

  .card-inner {
    @apply w-full max-w-xs;
  }
}

.page-title {
  @apply text-center mb-4;

  .title {
    @apply text-on-background opacity-50;
  }
  .subtitle {
    @apply font-bold text-primary;
  }
}

.app-logo {
  @apply mb-8 bg-surface;

  .logo-img {
    @apply mx-auto h-20 w-auto mb-2 opacity-75 mix-blend-difference;
  }

  .title {
    @apply text-center text-xl font-extrabold text-on-background;
  }
}

.social-signin-container {
  & > * {
    @apply mb-2;
  }
  & > *:last-child {
    @apply mb-0;
  }
}

.form {
  @apply mb-10
}

</style>