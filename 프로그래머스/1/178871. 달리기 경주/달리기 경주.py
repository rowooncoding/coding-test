def solution(players, callings):
    player_positions = {player: i for i, player in enumerate(players)}

    for calling_player in callings:
        current_idx = player_positions[calling_player]
        
        front_player_idx = current_idx - 1
        front_player = players[front_player_idx]
        
        players[front_player_idx], players[current_idx] = players[current_idx], players[front_player_idx]
        
        player_positions[calling_player] = front_player_idx
        player_positions[front_player] = current_idx
        
    return players
            