<template>
  <article class="code-card" :aria-labelledby="`code-${project.slug}`">
    <div class="terminal-row">
      <terminal-decorator
        :terminal-path="terminalPath"
        :command="`${baseCommand} $NAME`"
      />
      <h2 :id="`code-${project.slug}`">{{ project.title }}</h2>
    </div>
    <div class="terminal-row">
      <terminal-decorator
        :terminal-path="terminalPath"
        :command="`${baseCommand} $DESC`"
      />
      <p class="terminal-row__output">{{ project.description }}</p>
    </div>
    <div class="terminal-row">
      <terminal-decorator
        :terminal-path="terminalPath"
        :command="`${baseCommand} $LINKS`"
      />
      <ul
        :aria-label="`Detail links ${project.title}`"
        class="icon-list code-card__icons"
        role="list"
      >
        <li class="icon-list__item">
          <a
            :href="project.website"
            class="icon-list__link icon-list__link--website"
            rel="noopener"
          >
            <span class="sr-only">
              {{ project.title }}
            </span>
            <span class="icon-list__link-text"> Website</span>
          </a>
        </li>
        <li class="icon-list__item">
          <a
            :href="project.sourceCode"
            class="icon-list__link icon-list__link--code"
            rel="noopener"
          >
            <span class="sr-only">
              {{ project.title }}
            </span>
            <span class="icon-list__link-text"> Source Code</span>
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
import TerminalDecorator from '~components/code/TerminalDecorator.vue'

export default {
  components: {
    TerminalDecorator,
  },

  props: {
    project: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      terminalPath: `~/dev/${this.project.slug}`,
      baseCommand: 'echo',
    }
  },
}
</script>

<style></style>
