<script>
export default {
    name: 'Table Team',
    props: ['team']
}
</script>

<template>
    <tr>
        <th>{{ team.id }}</th>
        <td>{{team.full_name}}</td>
        <td>{{ team.abbreviation }}</td>
        <td>{{ team.city }}</td>
        <td>{{ team.conference }}</td>
        <td>{{ team.division }}</td>
    </tr>
</template>