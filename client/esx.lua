ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
PlayerLoaded = ESX.IsPlayerLoaded()

RegisterNetEvent('esx:playerLoaded')
AddEventHandler('esx:playerLoaded', function(xPlayer)
	PlayerLoaded = true
	Start()
end)

RegisterNetEvent('esx:onPlayerLogout')	-- Trigger this event when a player logs out to character selection
AddEventHandler('esx:onPlayerLogout', function()
	PlayerLoaded = false
	TriggerEvent('linden_inventory:closeInventory')
end)

AddEventHandler('esx:onPlayerDeath', function(data)
	isDead = true
	TriggerEvent('linden_inventory:closeInventory')
end)

AddEventHandler('playerSpawned', function(spawn)
	isDead = false
end)

AddEventHandler('esx:onPlayerSpawn', function(spawn)
	isDead = false
end)

RegisterNetEvent('esx_policejob:handcuff')
AddEventHandler('esx_policejob:handcuff', function()
	isCuffed = not isCuffed
	if isCuffed then TriggerEvent('linden_inventory:closeInventory') end
end)

RegisterNetEvent('esx_policejob:unrestrain')
AddEventHandler('esx_policejob:unrestrain', function()
	isCuffed = false
	TriggerEvent('linden_inventory:closeInventory')
end)

RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
	ESX.PlayerData.job = job
end)

RegisterNetEvent('esx_ambulancejob:setDeathStatus')
AddEventHandler('esx_ambulancejob:setDeathStatus', function(status)
	isDead = status
	if isDead then TriggerEvent('linden_inventory:closeInventory') end
end)