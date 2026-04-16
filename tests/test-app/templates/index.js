import { precompileTemplate } from '@ember/template-compilation';

export default precompileTemplate(`{{! template-lint-disable no-action}}

<h1>ember-drag-sort demo</h1>

<div class="list-groups">

  <div class="list-group-wrapper">
    <h2>Simple usage</h2>

    <section class="list-group">
      <article class="list">
        <h4>List without drag handles</h4>

        <DragSortList
          id="simple-1"
          @items={{this.simple1}}
          @group="simple"
          @dragEndAction={{this.dragEnd}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>

      <article class="list">
        <h4>List with drag handles</h4>

        <DragSortList
          id="simple-2"
          @items={{this.simple2}}
          @group="simple"
          @handle=".handle"
          @dragEndAction={{this.dragEnd}}
          as |item|
        >
          <div class="the-item">
            <span class="handle" draggable="true">☰</span>
            {{item.name}}
          </div>
        </DragSortList>
      </article>
    </section>
  </div>

  <div class="list-group-wrapper">
    <h2>Unsortable list</h2>

    <section class="list-group">
      <article class="list">
        <h4>List 1 (always sorted alphabetically)</h4>

        <DragSortList
          id="foreign-1"
          @items={{this.foreign1}}
          @group="foreign"
          @dragEndAction={{this.dragEnd}}
          @determineForeignPositionAction={{this.determineForeignPosition}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>

      <article class="list">
        <h4>List 2 (sorted by user)</h4>

        <DragSortList
          id="foreign-2"
          @items={{this.foreign2}}
          @group="foreign"
          @dragEndAction={{this.dragEnd}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>
    </section>
  </div>

  <div class="list-group-wrapper">
    <h2>Create copies</h2>

    <section class="list-group">
      <article class="list">
        <h4>List 1 (source)</h4>

        <DragSortList
          id="copies-1"
          @items={{this.copies1}}
          @group="copies"
          @dragEndAction={{this.dragEnd2}}
          @determineForeignPositionAction={{this.determineForeignPosition2}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>

      <article class="list">
        <h4>List 2 (target)</h4>

        <DragSortList
          id="copies-2"
          @items={{this.copies2}}
          @group="copies"
          @dragEndAction={{this.dragEnd2}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>

      <article class="list">
        <h4>List 3 (target)</h4>

        <DragSortList
          id="copies-3"
          @items={{this.copies3}}
          @group="copies"
          @dragEndAction={{this.dragEnd2}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>
    </section>
  </div>

  <div class="list-group-wrapper">
    <h2>Source only list</h2>

    <section class="list-group">
      <article class="list">
        <h4>Source list</h4>

        <DragSortList
          id="source-only-1"
          @items={{this.sourceOnly1}}
          @group="source-only"
          @dragEndAction={{this.sourceOnlyDragEnd}}
          @sourceOnly={{true}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>

      <article class="list">
        <h4>Target list</h4>

        <DragSortList
          id="source-only-2"
          @items={{this.sourceOnly2}}
          @group="source-only"
          @dragEndAction={{this.sourceOnlyDragEnd}}
          as |item|
        >
          <div class="the-item">
            {{item.name}}
          </div>
        </DragSortList>
      </article>
    </section>
  </div>

</div>`);
