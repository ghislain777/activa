<?php

namespace App\Entity;

use App\Repository\AppelsortantRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use DateTime;

/**
 * * @ApiResource(
   *   normalizationContext={"groups"={"lecture"}},
   *     denormalizationContext={"groups"={"ecriture"}},
   *     attributes={
   *         "pagination_client_items_per_page"=true,
   *         "order"={"id": "desc"}
   *     }
   * )
   * @ApiFilter(SearchFilter::class, properties={"id": "exact", "nom": "partial", "description": "partial"})
 * @ORM\Entity(repositoryClass=AppelsortantRepository::class)
 */
class Appelsortant
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer" , options={"comment":"ID"})
     * @Groups({"lecture"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255 , options={"comment":"Téléphone"})
     * @Groups({"lecture", "ecriture"})
     */
    private $telephone;

    /**
     * @ORM\Column(type="string", length=255, nullable=false , options={"comment":"Nom et prénom"})
     * @Groups({"lecture", "ecriture"})
     */
    private $nometprenom;

    /**
     * @ORM\Column(type="boolean", options={"comment":"Appelé?"})
     * @Groups({"lecture", "ecriture"})
     */
    private $appele;

    /**
     * @ORM\ManyToOne(targetEntity=Statutentretient::class, inversedBy="appelsortants")
     *  @ORM\JoinColumn(nullable=true, name="statutentretient")
     * @Groups({"lecture", "ecriture"})
     */
    private $statutentretient;

    /**
     * @ORM\Column(type="datetime" , options={"comment":"Date Appel"})
     * @Groups({"lecture", "ecriture"})
     */
    private $dateappel;

    /**
     * @ORM\Column(type="integer", nullable=true , options={"comment":"Montant"})
     * @Groups({"lecture", "ecriture"})
     */
    private $montant;

    /**
     * @ORM\ManyToOne(targetEntity=Produit::class, inversedBy="appelsortants")
     *  @ORM\JoinColumn(nullable=true, name="produit")
     * @Groups({"lecture", "ecriture"})
     */
    private $produit;

    /**
     * @ORM\Column(type="string", length=900, nullable=true, options={"comment":"Verbatim client"})
     * @Groups({"lecture", "ecriture"})
     */
    private $verbatimclient;

    /**
     * @ORM\ManyToOne(targetEntity=Statuttransformation::class, inversedBy="appelsortants")
     */
    private $statuttransformation;


    public function __construct()
    {
        $this->appele = true;
        $this->dateappel = new DateTime();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTelephone(): ?string
    {
        return $this->telephone;
    }

    public function setTelephone(string $telephone): self
    {
        $this->telephone = $telephone;

        return $this;
    }

    public function getNometprenom(): ?string
    {
        return $this->nometprenom;
    }

    public function setNometprenom(?string $nometprenom): self
    {
        $this->nometprenom = $nometprenom;

        return $this;
    }

    public function getAppele(): ?bool
    {
        return $this->appele;
    }

    public function setAppele(bool $appele): self
    {
        $this->appele = $appele;

        return $this;
    }

    public function getStatutentretient(): ?Statutentretient
    {
        return $this->statutentretient;
    }

    public function setStatutentretient(?Statutentretient $statutentretient): self
    {
        $this->statutentretient = $statutentretient;

        return $this;
    }

    public function getDateappel(): ?\DateTimeInterface
    {
        return $this->dateappel;
    }

    public function setDateappel(\DateTimeInterface $dateappel): self
    {
        $this->dateappel = $dateappel;

        return $this;
    }

    public function getMontant(): ?int
    {
        return $this->montant;
    }

    public function setMontant(?int $montant): self
    {
        $this->montant = $montant;

        return $this;
    }

    public function getProduit(): ?Produit
    {
        return $this->produit;
    }

    public function setProduit(?Produit $produit): self
    {
        $this->produit = $produit;

        return $this;
    }

    public function getVerbatimclient(): ?string
    {
        return $this->verbatimclient;
    }

    public function setVerbatimclient(?string $verbatimclient): self
    {
        $this->verbatimclient = $verbatimclient;

        return $this;
    }

    public function getStatuttransformation(): ?Statuttransformation
    {
        return $this->statuttransformation;
    }

    public function setStatuttransformation(?Statuttransformation $statuttransformation): self
    {
        $this->statuttransformation = $statuttransformation;

        return $this;
    }
}
