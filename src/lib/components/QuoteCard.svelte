<script>
   import * as Card from "$lib/components/ui/card";
   import { getDate } from "$lib/utils";
   const today = getDate();
</script>

<Card.Root class="w-72 bg-black text-white flex flex-col items-center">
  <Card.Header>
    <Card.Title>Todays quote</Card.Title>
    <Card.Description>{today}</Card.Description>
  </Card.Header>
  <Card.Content class="text-pretty">
    <p>The only way to do great work is to love what you do.</p>
  </Card.Content>
  <Card.Footer class="flex flex-col gap-1">
    <strong>Author</strong>
    <p>Steve Jobs</p>
  </Card.Footer>
</Card.Root>