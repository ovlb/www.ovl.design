<template>
  <main id="main" class="content-code" tabindex="-1">
    <h1 class="sr-only">Code</h1>
    <p>{{ terminalLogin(build.buildTime) }}</p>
    <div class="terminal-row content-code__intro">
      <terminal-decorator
        terminal-path="~/dev/"
        command="show-projects --verbose --directories"
      />
    </div>
    <ol class="code-list" role="list">
      <li v-for="project in code.projects" :key="project.id">
        <code-card :project="project" />
      </li>
    </ol>
  </main>
</template>

<script>
import CodeCard from '~components/code/CodeCard.vue'
import TerminalDecorator from '~components/code/TerminalDecorator.vue'

export default {
  components: {
    CodeCard,
    TerminalDecorator,
  },
  data() {
    return {
      permalink: '/code/',
      title: 'Code',
      templateClass: 'tmpl-code',
      pageCSS: 'code',
      eleventyComputed: {
        meta: function ({ meta, site }) {
          return {
            ...meta,
            description:
              '01000011 01101111 01100100 01100101 00100000 01001001 00100000 01101000 01100001 01110110 01100101 00100000 01110111 01110010 01101001 01110100 01110100 01100101 01101110',
            image: {
              src: `${site.baseURL}/img/open-graph/ovl-og-image-code-v2.jpg`,
              alt: 'ASCII art of an owl holding a square. In the sqaure the letter o v l are written in a monospaced font.',
            },
          }
        },
      },
    }
  },
}
</script>

<style></style>
