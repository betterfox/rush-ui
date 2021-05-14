<template>
  <div class="page">
    <div class="bg-below"></div>
    <div class="bg-color-overlay"></div>
    <div class="page-body">
      <div class="card-container">
        <div class="card">
          <div class="card-inner">
            <div class="app-logo">
              <img
                class="logo-img"
                src="/assets/images/signin/logo-white.png"
              />
              <h2 class="title">ABugLife Studio</h2>
            </div>
            <div class="page-title">
              <div class="title">Signin to:</div>
              <div class="subtitle">Accounting</div>
            </div>
            <div class="form">
              <app-input
                icon="account-box-outline"
                placeholder="abc@gmail.com"
              />
              <app-input
                icon="key-outline"
                placeholder="password"
                type="password"
              />

              <app-loading-button text="Signin" />
            </div>

            <separate-line-with-text text="OR" />

            <div class="social-signin-container">
              <social-signin-button
                text="Signin with Google"
                logo="/assets/images/social/google.png"
                type="button"
              />

              <social-signin-button
                text="Signin with Line"
                logo="/assets/images/social/line.png"
                type="button"
              />

              <social-signin-button
                text="Signin with Microsoft"
                logo="/assets/images/social/microsoft.png"
                type="button"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-link-container">
          <div class="link">Privacy Policy</div>
          <div class="dot">•</div>
          <div class="link">User Notice</div>
        </div>
        <div class="copy-right">
          @ 2021 ABugLife Studio, Inc. All rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  @apply h-full min-h-screen relative flex items-center justify-center p-0 bg-background;

  .bg-below {
    @apply absolute top-0 left-0 w-full h-full z-10 bg-cover bg-center mix-blend-multiply;
    background-image: url(/assets/images/signin/bg2.png);
  }

  .bg-color-overlay {
    @apply absolute top-0 left-0 w-full h-full bg-primary opacity-5 z-30 mix-blend-multiply;
  }

  .page-body {
    @apply max-w-full w-full relative z-40 flex flex-col items-center min-h-screen px-4;
  }
}

.card-container {
  @apply flex-1 flex items-center w-full max-w-md mx-auto pt-4;
  @screen md {
    @apply pt-8;
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
  @apply mb-10;
}

.footer {
  @apply flex flex-col items-center justify-center w-full px-4 py-4 sticky;
  @screen md {
    @apply px-8 py-8;
  }

  .footer-link-container {
    @apply flex items-center mb-1 space-x-4 text-sm;
    @screen md {
      @apply mb-4 text-base;
    }

    .link {
      @apply text-on-background opacity-50 cursor-pointer text-sm;
      @screen md {
        @apply text-base;
      }

      &:hover {
        @apply text-primary opacity-100;
      }
    }

    .dot {
      @apply opacity-50;
    }
  }

  .copy-right {
    @apply text-on-background opacity-25 text-center whitespace-nowrap text-sm;
    @screen md {
      @apply text-base;
    }
  }
}


</style>